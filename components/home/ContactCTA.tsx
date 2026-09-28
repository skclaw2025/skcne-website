import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Container from "../ui/Container";
import { SITE } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section className="bg-[#005b3c]">
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
              Begin Your Journey
            </p>

            <h2 className="font-display mt-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[44px]">
              Ready to take the next step toward a career in nursing?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
              Get in touch with Shri Krishna College of Nursing Education to
              learn more about the ANM programme, eligibility and admissions.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 bg-[#f36b21] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#dc5712]"
            >
              Make an Enquiry
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-4 border-t border-white/15 pt-7 sm:grid-cols-3 lg:block lg:min-w-[280px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-3 text-white transition-opacity hover:opacity-80"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20">
                <Phone size={17} />
              </span>
              <span>
                <span className="block text-xs text-white/50">Call Us</span>
               <span className="mt-1 block text-sm font-semibold text-white">
                  {SITE.phone}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="mt-0 flex items-center gap-3 text-white transition-opacity hover:opacity-80 lg:mt-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20">
                <Mail size={17} />
              </span>
              <span>
                <span className="block text-xs text-white/50">Email Us</span>
              <span className="mt-1 block text-sm font-semibold text-white">
                  {SITE.email}
                </span>
              </span>
            </a>

            <div className="mt-0 flex items-start gap-3 text-white lg:mt-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20">
                <MapPin size={17} />
              </span>
              <span>
                <span className="block text-xs text-white/50">Visit Us</span>
                <span className="mt-1 block text-sm leading-5 font-semibold text-white">
                  Baghpat, Uttar Pradesh
                </span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}