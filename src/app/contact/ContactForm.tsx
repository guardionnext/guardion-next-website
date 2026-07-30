"use client";

import { useState } from "react";
import { Phone, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SITE, SERVICES } from "@/lib/site";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
  website: string; // honeypot
}

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  location: "",
  message: "",
  website: "",
};

const ERRORS = {
  name: "Please enter your name.",
  email: "Please enter a valid email address.",
  phone: "Please enter a phone number.",
  service: "Please select a service.",
  message: "Please enter a brief message.",
};

export function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitError) setSubmitError(null);
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) next.name = ERRORS.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = ERRORS.email;
    if (!form.phone.trim()) next.phone = ERRORS.phone;
    if (!form.service) next.service = ERRORS.service;
    if (!form.message.trim()) next.message = ERRORS.message;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot — bots that fill this field are ignored silently.
    if (form.website) return;

    if (!validate()) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string; errors?: Partial<Record<keyof FormData, string>> }
          | null;
        if (data?.errors) setErrors((prev) => ({ ...prev, ...data.errors }));
        setSubmitError(
          data?.error ??
            "Something went wrong sending your enquiry. Please try again, or call us directly.",
        );
        return;
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError(
        "We couldn't reach the server. Please check your connection and try again, or call us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <span className="eyebrow mb-6">Enquiry form</span>
      <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-foreground md:text-[44px]">
        Request a confidential consultation.
      </h2>
      <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-text-mute">
        Tell us briefly what you need. A principal of the firm will respond directly,
        usually within one business day. Every enquiry is handled in strict confidence.
      </p>

      {submitted ? (
        <div className="mt-10 border border-border bg-surface p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-accent bg-accent">
              <Check className="h-5 w-5 text-white" aria-hidden />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-foreground">
                Thank you. We will be in touch shortly.
              </h3>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-text-mute">
                Your enquiry has been sent. A principal of the firm will respond
                directly, usually within one business day. To reach us sooner, please
                call or message directly.
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-6 inline-flex items-center gap-2 text-sm text-foreground transition hover:text-accent"
              >
                <Phone className="h-4 w-4" aria-hidden />
                <span className="tabular-nums">{SITE.phone}</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">
                Name{" "}
                <span className="text-accent" aria-hidden>
                  *
                </span>
                <span className="sr-only">(required)</span>
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Your full name"
                className="h-12 bg-surface"
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-accent">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email{" "}
                <span className="text-accent" aria-hidden>
                  *
                </span>
                <span className="sr-only">(required)</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="you@example.com"
                className="h-12 bg-surface"
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-accent">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone{" "}
                <span className="text-accent" aria-hidden>
                  *
                </span>
                <span className="sr-only">(required)</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                placeholder="+61 ..."
                className="h-12 bg-surface"
              />
              {errors.phone && (
                <p id="phone-error" className="text-sm text-accent">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">
                Service{" "}
                <span className="text-accent" aria-hidden>
                  *
                </span>
                <span className="sr-only">(required)</span>
              </Label>
              <Select
                value={form.service}
                onValueChange={(value) => update("service", value)}
              >
                <SelectTrigger
                  id="service"
                  name="service"
                  aria-label="Service of interest"
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "service-error" : undefined}
                  className="h-12 bg-surface"
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((s) => (
                    <SelectItem key={s.slug} value={s.title}>
                      {s.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.service && (
                <p id="service-error" className="text-sm text-accent">
                  {errors.service}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location / country of operation</Label>
            <Input
              id="location"
              name="location"
              type="text"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              placeholder="e.g. Sydney, Melbourne, London, Singapore"
              className="h-12 bg-surface"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              Message{" "}
              <span className="text-accent" aria-hidden>
                *
              </span>
              <span className="sr-only">(required)</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Describe your situation briefly, including any known risks, dates or locations."
              className="min-h-[160px] bg-surface"
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-accent">
                {errors.message}
              </p>
            )}
          </div>

          {/* Honeypot field: hidden from real users, visible to bots. */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Do not fill this field</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) => update("website", e.target.value)}
            />
          </div>

          {submitError && (
            <p role="alert" className="text-sm text-accent">
              {submitError}
            </p>
          )}

          <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[52ch] text-xs leading-relaxed text-text-mute">
              Your enquiry is handled discreetly and in confidence. We do not share
              identifying details, and we respond only to the channels you provide.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-12 shrink-0 items-center border border-accent bg-accent px-6 text-sm font-medium text-white transition hover:bg-[#a91f26] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send enquiry"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
