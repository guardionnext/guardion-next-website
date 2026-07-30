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
 * Scroll-triggered fade-in / fade-out.
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
      // Reveal a little after the element enters the viewport; fade back out
      // only once it has fully scrolled away.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
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
  /** Reveal once and stop observing (disables the fade-out on scroll-away). */
  once?: boolean;
};

export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  once = false,
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
