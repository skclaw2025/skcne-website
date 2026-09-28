import {
  BookOpen,
  Building2,
  Computer,
  FlaskConical,
  HeartPulse,
  Library,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const facilities = [
  {
    icon: Building2,
    title: "Well-Equipped Classrooms",
    description:
      "Comfortable and focused learning spaces designed to support effective classroom teaching.",
  },
  {
    icon: HeartPulse,
    title: "Nursing Skills Lab",
    description:
      "Practical learning environment where students can develop essential nursing skills and techniques.",
  },
  {
    icon: Computer,
    title: "Computer Lab",
    description:
      "Access to computer facilities supporting academic learning, research and digital education.",
  },
  {
    icon: FlaskConical,
    title: "Anatomy & Physiology Lab",
    description:
      "Dedicated laboratory facilities to strengthen students' understanding of human anatomy and physiology.",
  },
  {
    icon: Library,
    title: "Library",
    description:
      "A supportive academic resource with books and learning materials relevant to nursing education.",
  },
  {
    icon: BookOpen,
    title: "Clinical Training",
    description:
      "Practical exposure through clinical training to connect classroom knowledge with real healthcare settings.",
  },
];

export default function Facilities() {
  return (
    <section className="section-padding bg-[#f3f8f5]">
      <Container>
        <SectionHeading
          eyebrow="Campus Facilities"
          title="An environment designed for learning and growth"
          description="Our facilities provide students with the academic resources and practical learning environment needed to build confidence and professional skills."
        />

        <div className="grid gap-px overflow-hidden border border-[#dce7e0] bg-[#dce7e0] sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <article
                key={facility.title}
                className="group relative bg-white px-7 py-8 transition-all duration-300 hover:bg-[#005b3c]"
              >
                {/* Number */}
                <span className="absolute right-6 top-6 text-[11px] font-bold tracking-[0.15em] text-[#f36b21] transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center border border-[#d8e5de] text-[#005b3c] transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white">
                  <Icon size={22} strokeWidth={1.6} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-bold text-[#005b3c] transition-colors duration-300 group-hover:text-white">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#68756f] transition-colors duration-300 group-hover:text-white/75">
                  {facility.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 h-[2px] w-8 bg-[#f36b21] transition-all duration-300 group-hover:w-12" />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}