import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

import Container from "../ui/Container";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-[#f3f8f5]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">

          {/* LEFT — ABOUT */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
              About Shri Krishna
            </p>

            <h2 className="font-display max-w-xl text-3xl font-bold leading-tight text-[#005b3c] sm:text-4xl">
              Building a strong foundation for a career in nursing
            </h2>

            <div className="orange-line mt-5" />

            <p className="mt-6 max-w-xl text-base leading-7 text-[#68756f]">
              Shri Krishna College of Nursing Education is a premier
              institution located in Baghpat, Uttar Pradesh, committed to
              providing quality nursing education and practical learning.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#68756f]">
              Our focus is to develop skilled, compassionate and responsible
              healthcare professionals through academic learning, practical
              training and a supportive environment.
            </p>

            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#005b3c]"
            >
              Discover Our Institution

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* RIGHT — PRINCIPAL MESSAGE */}
          <div className="relative border border-[#dbe7e0] bg-white p-7 shadow-[0_15px_45px_rgba(0,63,42,0.06)] sm:p-9">

            {/* Quote icon */}
            <div className="absolute right-7 top-7 text-[#f36b21]/20">
              <Quote size={50} strokeWidth={1} />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f36b21]">
              Principal's Message
            </p>

            <blockquote className="mt-6 max-w-xl font-display text-2xl font-bold leading-[1.35] text-[#005b3c] sm:text-[28px]">
              “Education is not just about imparting knowledge, it’s about
              shaping lives and serving humanity.”
            </blockquote>

            <div className="mt-7 h-px w-full bg-[#e3e9e5]" />

            <div className="mt-5">
              <p className="text-base font-bold text-[#17352a]">
                Ms. Renu Sharma
              </p>

              <p className="mt-1 text-sm text-[#68756f]">
                Principal
              </p>

              <p className="mt-1 text-sm text-[#68756f]">
                Shri Krishna College of Nursing Education, Baghpat
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}