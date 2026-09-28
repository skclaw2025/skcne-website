"use client";

import { FormEvent, useState } from "react";
import type { Metadata } from "next";
import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  course: "ANM – Auxiliary Nurse & Midwife",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitting(true);
    setError("");
    setSubmitted(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: "New Enquiry - Shri Krishna College of Nursing Education",
          from_name: "SKCNE Website",
          name: form.name,
          phone: form.phone,
          email: form.email,
          course: form.course,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setForm(initialForm);
      } else {
        setError(
          "We could not submit your enquiry. Please try again or contact us directly."
        );
      }
    } catch {
      setError(
        "Something went wrong while submitting your enquiry. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[#e3e9e5] bg-[#f3f8f5]">
        <Container>
          <div className="py-16 sm:py-20 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
              Contact Us
            </p>

            <h1 className="font-display mt-4 max-w-4xl text-4xl font-bold leading-tight text-[#005b3c] sm:text-5xl lg:text-[60px]">
              Begin your journey in nursing
            </h1>

            <div className="orange-line mt-6" />

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#68756f] sm:text-lg sm:leading-8">
              Have questions about the ANM programme or admissions? Get in
              touch with Shri Krishna College of Nursing Education.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact + Form */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            {/* Contact Information */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
                Get In Touch
              </p>

              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-[#005b3c] sm:text-4xl">
                We would be happy to hear from you
              </h2>

              <div className="orange-line mt-5" />

              <p className="mt-6 max-w-lg text-base leading-7 text-[#68756f]">
                Contact our institution for information regarding the ANM
                programme, eligibility, admissions and the learning
                environment at Shri Krishna College of Nursing Education.
              </p>

              <div className="mt-9 space-y-6">
                <a
                  href={`tel:${SITE.phone}`}
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f3f8f5] text-[#005b3c] transition-colors duration-300 group-hover:bg-[#005b3c] group-hover:text-white">
                    <Phone size={19} strokeWidth={1.7} />
                  </span>

                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.12em] text-[#68756f]">
                      Phone
                    </span>

                    <span className="mt-1 block text-base font-semibold text-[#17352a]">
                      {SITE.phone}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f3f8f5] text-[#005b3c] transition-colors duration-300 group-hover:bg-[#005b3c] group-hover:text-white">
                    <Mail size={19} strokeWidth={1.7} />
                  </span>

                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.12em] text-[#68756f]">
                      Email
                    </span>

                    <span className="mt-1 block break-all text-base font-semibold text-[#17352a]">
                      {SITE.email}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f3f8f5] text-[#005b3c]">
                    <MapPin size={19} strokeWidth={1.7} />
                  </span>

                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.12em] text-[#68756f]">
                      Address
                    </span>

                    <span className="mt-1 block max-w-sm text-base font-semibold leading-6 text-[#17352a]">
                      {SITE.address}
                    </span>
                  </span>
                </div>
              </div>

              {/* Course Information */}
              <div className="mt-10 border-l-2 border-[#f36b21] bg-[#fafbf8] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#f36b21]">
                  Current Programme
                </p>

                <p className="mt-2 text-base font-bold text-[#005b3c]">
                  ANM – Auxiliary Nurse & Midwife
                </p>

                <p className="mt-1 text-sm text-[#68756f]">
                  2 Years · 40 Seats · UPSMF Approved
                </p>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="border border-[#dfe8e2] bg-[#fafbf8] p-7 sm:p-9 lg:p-10">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
                  Enquiry Form
                </p>

                <h2 className="font-display mt-3 text-2xl font-bold text-[#005b3c] sm:text-3xl">
                  Send us your enquiry
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#68756f]">
                  Fill in your details and our team can get in touch with you.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 flex items-start gap-3 border border-[#b9d9c8] bg-[#edf8f1] p-4 text-sm text-[#005b3c]">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="font-bold">Enquiry submitted successfully.</p>
                    <p className="mt-1 text-[#4d6b5b]">
                      Thank you for contacting Shri Krishna College of Nursing
                      Education. We will get back to you.
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[#17352a]"
                    >
                      Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full border border-[#d8e3dc] bg-white px-4 py-3 text-sm text-[#17352a] outline-none transition-colors placeholder:text-[#9aa7a0] focus:border-[#005b3c]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#17352a]"
                    >
                      Phone Number *
                    </label>

                   <input
  id="phone"
  name="phone"
  type="tel"
  value={form.phone}
  onChange={handleChange}
  required
  pattern="[6-9][0-9]{9}"
  maxLength={10}
  inputMode="numeric"
  placeholder="Enter 10-digit phone number"
  className="w-full border border-[#d8e3dc] bg-white px-4 py-3 text-sm text-[#17352a] outline-none transition-colors placeholder:text-[#9aa7a0] focus:border-[#005b3c]"
/> 
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#17352a]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="w-full border border-[#d8e3dc] bg-white px-4 py-3 text-sm text-[#17352a] outline-none transition-colors placeholder:text-[#9aa7a0] focus:border-[#005b3c]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="course"
                    className="mb-2 block text-sm font-semibold text-[#17352a]"
                  >
                    Programme
                  </label>

                  <select
                    id="course"
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    className="w-full border border-[#d8e3dc] bg-white px-4 py-3 text-sm text-[#17352a] outline-none transition-colors focus:border-[#005b3c]"
                  >
                    <option>ANM – Auxiliary Nurse & Midwife</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#17352a]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Write your enquiry..."
                    className="w-full resize-none border border-[#d8e3dc] bg-white px-4 py-3 text-sm leading-6 text-[#17352a] outline-none transition-colors placeholder:text-[#9aa7a0] focus:border-[#005b3c]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#f36b21] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#dc5712] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit Enquiry"}
                  <Send size={17} />
                </button>

                <p className="text-center text-xs leading-5 text-[#7b8781]">
                  Your enquiry will be sent securely to the institution through
                  our online enquiry service.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="border-t border-[#e3e9e5] bg-[#f3f8f5]">
        <Container>
          <div className="flex flex-col gap-5 py-12 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
                Visit Us
              </p>

              <h2 className="font-display mt-2 text-2xl font-bold text-[#005b3c] sm:text-3xl">
                Shri Krishna College of Nursing Education
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#68756f]">
                {SITE.address}
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Shri+Krishna+College+of+Nursing+Education+Johnmani+Daula+Baghpat+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 border border-[#005b3c] px-6 py-3.5 text-sm font-semibold text-[#005b3c] transition-colors duration-300 hover:bg-[#005b3c] hover:text-white"
            >
              Get Directions
              <MapPin size={17} />
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}