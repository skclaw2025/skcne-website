"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

import Container from "../ui/Container";

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#e7ece9] bg-white">
        <Container>
          <div className="flex min-h-[68px] items-center justify-between sm:min-h-[74px] lg:min-h-[78px]">

            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex shrink-0 items-center"
              aria-label="Shri Krishna College of Nursing Education"
            >
              <Image
                src="/images/logo.png"
                alt="Shri Krishna College of Nursing Education"
                width={520}
                height={173}
                priority
                className="h-auto w-[185px] object-contain sm:w-[230px] lg:w-[260px]"
              />
            </Link>

            {/* ONLY MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="
                flex
                h-[44px]
                w-[48px]
                items-center
                justify-center
                border
                border-[#005b3c]
                bg-white
                text-[#005b3c]
                transition-all
                duration-300
                hover:bg-[#005b3c]
                hover:text-white
              "
            >
              <Menu size={22} strokeWidth={1.8} />
            </button>

          </div>
        </Container>
      </header>

      {/* =========================================================
          MENU DRAWER
      ========================================================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100]">

          {/* Background overlay */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-[#002f20]/35 backdrop-blur-[2px]"
          />

          {/* Drawer */}
          <aside
            className="
              absolute
              right-0
              top-0
              flex
              h-full
              w-full
              max-w-[420px]
              flex-col
              bg-white
              shadow-2xl
            "
          >

            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-[#e3e9e5] px-6 py-5">

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center"
              >
                <Image
                  src="/images/logo.png"
                  alt="Shri Krishna College of Nursing Education"
                  width={520}
                  height={173}
                  className="h-auto w-[190px] object-contain"
                />
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  border-[#005b3c]
                  text-[#005b3c]
                  transition-all
                  hover:bg-[#005b3c]
                  hover:text-white
                "
              >
                <X size={20} />
              </button>

            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-6 py-8">

              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f36b21]">
                Menu
              </p>

              <div className="space-y-1">

                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[#edf1ee]
                      py-4
                      text-lg
                      font-semibold
                      text-[#17352a]
                      transition-colors
                      hover:text-[#f36b21]
                    "
                  >
                    <span>{item.name}</span>

                    <ArrowRight
                      size={18}
                      className="
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                ))}

              </div>

              {/* ANM Course */}
              <div className="mt-8 bg-[#f3f8f5] p-5">

                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#005b3c]">
                  Start Your Nursing Journey
                </p>

                <h3 className="mt-2 font-display text-2xl font-bold text-[#17352a]">
                  ANM Course
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#68756f]">
                  Explore the 2 Years ANM programme, eligibility,
                  course details and admission information.
                </p>

                <Link
                  href="/courses"
                  onClick={() => setMenuOpen(false)}
                  className="
                    group
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    bg-[#f36b21]
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-white
                    transition-colors
                    hover:bg-[#dc5712]
                  "
                >
                  Choose ANM Course

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </nav>

            {/* Enquiry CTA */}
            <div className="border-t border-[#e3e9e5] p-6">

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  bg-[#005b3c]
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition-colors
                  hover:bg-[#003f2a]
                "
              >
                Make an Enquiry

                <ArrowRight size={17} />
              </Link>

            </div>

          </aside>
        </div>
      )}
    </>
  );
}