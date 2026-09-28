import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import MobileMenu from "./MobileMenu";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "ANM Course",
    href: "/courses",
  },
  {
    name: "Campus Gallery",
    href: "/campus-gallery",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e7ece9] bg-white">
      <Container>
       <div className="relative flex min-h-[68px] items-center justify-between gap-4 sm:min-h-[74px] lg:min-h-[78px]">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Shri Krishna College of Nursing Education"
          >
            <Image
              src="/images/logo.jpeg"
              alt="Shri Krishna College of Nursing Education"
              width={310}
              height={90}
              priority
             className="h-auto w-[185px] object-contain sm:w-[230px] lg:w-[260px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            <nav className="flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative py-7 text-[13px] font-semibold text-[#17352a] transition-colors hover:text-[#005b3c]"
                >
                  {item.name}

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f36b21] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[#f36b21] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#dc5712]"
            >
              Enquiry Now
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile */}
          <MobileMenu />

        </div>
      </Container>
    </header>
  );
}