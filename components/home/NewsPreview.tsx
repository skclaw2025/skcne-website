import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const newsItems = [
  {
    date: "Admissions",
    title: "Admissions Open for ANM – Batch 2026–27",
    description:
      "Applications are invited from eligible female candidates for the two-year ANM programme  for Batch 2026–27.",
    href: "/courses",
  },
  {
    date: "Programme",
    title: "Practical and clinical learning",
    description:
      "Students receive practical exposure designed to connect academic learning with healthcare settings.",
    href: "/courses",
  },
  {
    date: "Campus",
    title: "Explore Shri Krishna College of Nursing Education",
    description:
      "Discover our campus, facilities and learning environment in Baghpat, Uttar Pradesh.",
    href: "/campus-gallery",
  },
];

export default function NewsPreview() {
  return (
    <section id="news" className="section-padding bg-[#fafbf8]">
      <Container>
        <SectionHeading
          eyebrow="News & Updates"
          title="Stay informed"
          description="Important information and updates from Shri Krishna College of Nursing Education."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <article
              key={item.title}
              className="group flex h-full flex-col border border-[#dfe8e2] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#005b3c] hover:shadow-[0_15px_35px_rgba(0,63,42,0.07)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center bg-[#f3f8f5] text-[#005b3c]">
                  <CalendarDays size={17} strokeWidth={1.7} />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#f36b21]">
                  {item.date}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold leading-snug text-[#005b3c] transition-colors duration-300 group-hover:text-[#f36b21]">
                {item.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-[#68756f]">
                {item.description}
              </p>

              <Link
                href={item.href}
                className="group/link mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#005b3c]"
              >
                Read More
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}