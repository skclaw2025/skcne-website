import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Container from "../ui/Container";
import { SITE } from "@/lib/constants";

export default function TopBar() {
  return (
    <div className="bg-[#005b3c] text-white">
      <Container>
        <div className="flex min-h-[38px] items-center justify-between gap-4 text-xs">
          
          <div className="flex items-center gap-5">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Phone size={13} />
              <span>{SITE.phone}</span>
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="hidden items-center gap-2 transition-opacity hover:opacity-80 sm:flex"
            >
              <Mail size={13} />
              <span>{SITE.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/#news"
              className="transition-opacity hover:opacity-80"
            >
              News & Updates
            </Link>

            <span className="h-3 w-px bg-white/30" />

            <Link
              href="/contact"
              className="transition-opacity hover:opacity-80"
            >
              Enquiry
            </Link>
          </div>

        </div>
      </Container>
    </div>
  );
}