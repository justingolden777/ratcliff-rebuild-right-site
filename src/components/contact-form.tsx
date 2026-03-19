"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { quoteRequestSchema, type QuoteRequestInput } from "@/lib/validation";

type FormStatus = {
  type: "idle" | "success" | "error";
  message?: string;
};

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteRequestInput>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
      company: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus({ type: "idle" });
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message: payload.message ?? "We could not send your request right now.",
        });
        return;
      }

      setStatus({
        type: "success",
        message:
          payload.message ??
          "Thanks. Your request has been received and the next step is a direct follow-up.",
      });
      reset();
    } catch {
      setStatus({
        type: "error",
        message:
          "We could not send your request right now. Please call or text if the issue continues.",
      });
    }
  });

  const inputClassName =
    "min-h-12 w-full rounded-2xl border border-white/10 bg-black/36 px-4 py-3 text-base text-white placeholder:text-zinc-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/40";

  return (
    <form className="surface-panel p-6 sm:p-8" onSubmit={onSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={inputClassName}
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name")}
          />
          {errors.name ? <p className="form-error">{errors.name.message}</p> : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="e.g. 423-555-0100"
            className={inputClassName}
            aria-invalid={errors.phone ? "true" : "false"}
            {...register("phone")}
          />
          {errors.phone ? <p className="form-error">{errors.phone.message}</p> : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="e.g. you@email.com"
            className={inputClassName}
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email")}
          />
          {errors.email ? <p className="form-error">{errors.email.message}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="location" className="form-label">
            City / Property Location
          </label>
          <input
            id="location"
            type="text"
            autoComplete="address-level2"
            placeholder="e.g. Cleveland, TN"
            className={inputClassName}
            aria-invalid={errors.location ? "true" : "false"}
            {...register("location")}
          />
          {errors.location ? <p className="form-error">{errors.location.message}</p> : null}
        </div>

        <div className="hidden">
          <label htmlFor="company">Company</label>
          <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="form-label">
            Service Needed / Message
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="e.g. Need siding replaced on a ranch home after storm damage, looking to get an estimate soon."
            className={`${inputClassName} resize-y`}
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message")}
          />
          {errors.message ? <p className="form-error">{errors.message.message}</p> : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-400">
          Include your timeline and project goals so the estimate can move faster.
        </p>
        <button type="submit" className="button-primary" disabled={isSubmitting}>
          {isSubmitting ? "Sending Request..." : "Book a Free Estimate"}
        </button>
      </div>

      <div aria-live="polite" className="mt-4">
        {status.type === "success" ? (
          <p className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            {status.message}
          </p>
        ) : null}
        {status.type === "error" ? (
          <p className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
