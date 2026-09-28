"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

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

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 items-center justify-center text-[#005b3c]"
      >
        {open ? <X size={25} /> : <Menu size={25} />}
      </button>

      {open && (
        <div className="absolute left-[-14px] right-[-14px] top-full z-50 border-t border-[#e3e9e5] bg-white shadow-xl">
          <div className="px-5 py-5">
            <nav className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-[#edf1ee] py-4 text-sm font-medium text-[#17352a] transition-colors hover:text-[#f36b21]"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-5 flex items-center justify-center gap-2 bg-[#f36b21] px-5 py-3.5 text-sm font-semibold text-white"
              >
                Enquiry Now
                <ArrowRight size={16} />
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}