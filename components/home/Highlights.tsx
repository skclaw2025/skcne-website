import {
  Award,
  GraduationCap,
  Users,
  Stethoscope,
} from "lucide-react";

import Container from "../ui/Container";

const highlights = [
  {
    icon: Award,
    number: "01",
    title: "UPSMF Affiliated",
    description: "U.P. State Medical Faculty, Lucknow",
  },
  {
    icon: GraduationCap,
    number: "02",
    title: "ANM Programme",
    description: "A focused 2-year nursing programme",
  },
  {
    icon: Users,
    number: "03",
    title: "40 Seats",
    description: "Intake capacity for the programme",
  },
  {
    icon: Stethoscope,
    number: "04",
    title: "Practical Training",
    description: "Learning with clinical exposure",
  },
];

export default function Highlights() {
  return (
    <section className="border-y border-[#e3e9e5] bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className={`group relative flex min-h-[140px] items-start gap-4 px-4 py-6 sm:px-5 sm:py-8 transition-colors duration-300 hover:bg-[#f3f8f5] ${
                  index !== highlights.length - 1
                    ? "border-b border-[#e3e9e5] lg:border-b-0 lg:border-r"
                    : ""
                } ${
                  index === 1
                    ? "md:border-r md:border-[#e3e9e5]"
                    : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8e5de] text-[#005b3c] transition-colors duration-300 group-hover:border-[#f36b21] group-hover:text-[#f36b21]">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-[0.18em] text-[#f36b21]">
                    {item.number}
                  </span>

                  <h3 className="mt-1 text-base font-bold text-[#005b3c]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-[190px] text-sm leading-6 text-[#68756f]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}