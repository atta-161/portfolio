"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMsg("Web3Forms key not configured. Add NEXT_PUBLIC_WEB3FORMS_KEY to .env.local");
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  const inputClasses =
    "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors";

  return (
    <section id="contact" className="py-24 px-8 max-w-3xl mx-auto space-y-16">
      <div className="space-y-4 text-center">
        <h2 className="text-accent text-sm font-mono uppercase tracking-widest">
          Get In Touch
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
          Let&apos;s create something <br />
          <span className="text-muted">extraordinary together.</span>
        </h3>
        <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
          Have a project in mind or just want to say hello? Drop me a message and
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 py-16"
          >
            <CheckCircle className="w-12 h-12 text-accent" />
            <p className="text-lg font-medium text-white">Message sent!</p>
            <p className="text-sm text-muted">Thank you. I&apos;ll respond shortly.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 text-sm text-accent hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className={inputClasses}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className={inputClasses}
              />
            </div>

            <textarea
              name="message"
              required
              rows={6}
              placeholder="Your message..."
              className={`${inputClasses} resize-none`}
            />

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 text-sm"
              >
                <AlertCircle className="w-4 h-4" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group w-full md:w-auto flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-black font-medium rounded-xl hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
}
