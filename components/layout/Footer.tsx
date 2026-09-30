import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Container from "../ui/Container";
import { SITE } from "@/lib/constants";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "ANM Course", href: "/courses" },
  { name: "Campus Gallery", href: "/campus-gallery" },
  { name: "Contact Us", href: "/contact" },
];

const usefulLinks = [
  { name: "Terms of Use", href: "/terms" },
  { name: "Privacy & Security Policy", href: "/privacy" },
  { name: "Sitemap", href: "/sitemap.xml" },
];

export default function Footer() {
  return (
    <footer className="bg-[#003f2a] text-white">
      <Container>
        <div className="grid gap-12 py-14 lg:grid-cols-[1.5fr_0.9fr_0.9fr_1.2fr] lg:gap-16">
          
          {/* College Information */}
          <div>
            <Link
              href="/"
              className="inline-flex bg-white p-0"
              aria-label="Shri Krishna College of Nursing Education"
            >
              <Image
                src="/images/logo.png"
                alt="Shri Krishna College of Nursing Education"
                width={520}
                height={173}
                className="h-auto w-[215px] object-contain"
              />
            </Link>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/75">
              Shri Krishna College of Nursing Education is committed to
              providing quality nursing education, practical training and
              professional development for aspiring healthcare professionals.
            </p>

            <div className="mt-7 h-[3px] w-10 bg-[#f36b21]" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <nav className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.7}
                    className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Information
            </h3>

            <nav className="mt-6 space-y-4">
              {usefulLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.7}
                    className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5">
              {/* Phone */}
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3 text-sm text-white/80 transition-colors hover:text-white"
              >
                <Phone
                  size={17}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#f36b21]"
                />

                <span>{SITE.phone}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-3 text-sm text-white/80 transition-colors hover:text-white"
              >
                <Mail
                  size={17}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#f36b21]"
                />

                <span>{SITE.email}</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 text-sm leading-6 text-white/80">
                <MapPin
                  size={18}
                  strokeWidth={1.7}
                  className="mt-0.5 shrink-0 text-[#f36b21]"
                />

                <span>{SITE.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-8 border-t border-white/10 py-6 md:flex-row md:items-end md:justify-between">
          
          {/* Copyright */}
          <p className="text-xs leading-5 text-white/55">
            © 2026 Shri Krishna College of Nursing Education. All Rights
            Reserved.
          </p>

          {/* Affiliation + UPSMF Logo */}
          <div className="flex flex-col items-start gap-3 md:items-end">
            
            {/* UPSMF Logo */}
            <div className="flex h-[58px] w-[70px] items-center justify-center overflow-hidden bg-white">
              <Image
                src="/images/upsmf-logo.png"
                alt="U.P. State Medical Faculty"
                width={178}
                height={165}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Affiliation */}
            <p className="text-right text-xs leading-5 text-white/55">
              Affiliated to U.P. State Medical Faculty, Lucknow, U.P.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}