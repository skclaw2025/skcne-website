import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
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
  { name: "Sitemap", href: "/sitemap" },
];

export default function Footer() {
  return (
    <footer className="bg-[#003f2a] text-white">
      <Container>
        <div className="grid gap-12 py-14 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:gap-10 lg:py-16">
          
          {/* Institution */}
          <div>
            <Link
              href="/"
              className="inline-block bg-white p-3"
              aria-label={SITE.name}
            >
              <Image
                src="/images/logo.jpeg"
                alt={SITE.name}
                width={270}
                height={80}
                className="h-auto w-[190px] object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              Shri Krishna College of Nursing Education is committed to
              providing quality nursing education, practical training and
              professional development for aspiring healthcare professionals.
            </p>

            <div className="mt-6 h-[2px] w-10 bg-[#f36b21]" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              Information
            </h3>

            <ul className="mt-6 space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#f36b21]"
                  strokeWidth={1.7}
                />
                <span>{SITE.phone}</span>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#f36b21]"
                  strokeWidth={1.7}
                />
                <span className="break-all">{SITE.email}</span>
              </a>

              <div className="flex items-start gap-3 text-sm leading-6 text-white/70">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#f36b21]"
                  strokeWidth={1.7}
                />
                <span>{SITE.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="flex flex-col gap-3 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
            </p>

            <p>
              {SITE.affiliation}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}