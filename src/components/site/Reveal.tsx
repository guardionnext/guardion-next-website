"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Scroll-triggered fade-in. By default the reveal is one-way: once an element
 * has animated in it stays put (see the `once` prop), so scrolling back up
 * never fades it out again.
 *
 * Performance notes:
 * - A single, module-level IntersectionObserver is shared by every <Reveal> on
 *   the page. There are no per-element observers and no scroll listeners, so
 *   scrolling never runs layout work on the main thread.
 * - Only `opacity` and `transform` are animated — both are GPU-composited, so
 *   the effect never triggers layout or paint.
 * - `prefers-reduced-motion` and JS-disabled / no-IntersectionObserver
 *   environments fall back to fully-visible content (see globals.css).
 */

type RevealCallback = (visible: boolean) => void;

let sharedObserver: IntersectionObserver | null = null;
const callbacks = new Map<Element, RevealCallback>();

function ensureObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          callbacks.get(entry.target)?.(entry.isIntersecting);
        }
      },
      // Hold the fade until the element has scrolled well into view — its top
      // must pass ~60% of the viewport height (into the lower-middle of the
      // screen) — so the reveal plays right where the eye is, rather than
      // completing down at the bottom edge.
      { threshold: 0, rootMargin: "0px 0px -40% 0px" }
    );
  }
  return sharedObserver;
}

type RevealProps = {
  children: ReactNode;
  /** Element to render. Defaults to a <div>. */
  as?: ElementType;
  className?: string;
  /** Stagger the transition start, in milliseconds. */
  delay?: number;
  /**
   * Reveal once, then stop observing so the element never fades back out on
   * scroll-away. Defaults to `true`; pass `once={false}` to opt into the
   * fade-out-when-off-screen behaviour instead.
   */
  once?: boolean;
};

export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const observer = ensureObserver();

    // No motion / no observer support → just show the content.
    if (prefersReduced || !observer) {
      setVisible(true);
      return;
    }

    callbacks.set(el, (isVisible) => {
      setVisible(isVisible);
      if (isVisible && once) {
        observer.unobserve(el);
        callbacks.delete(el);
      }
    });
    observer.observe(el);

    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, [once]);

  return createElement(
    Tag,
    {
      ref,
      className,
      "data-reveal": "",
      "data-visible": visible ? "true" : "false",
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children
  );
}
