import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  GraduationCap,
  Users,
} from "lucide-react";

import Container from "../ui/Container";

const courseFacts = [
  {
    icon: Clock3,
    label: "Duration",
    value: "2 Years",
  },
  {
    icon: Users,
    label: "Intake Capacity",
    value: "40 Seats",
  },
  {
    icon: GraduationCap,
    label: "Programme",
    value: "ANM",
  },
  {
    icon: BookOpen,
    label: "Approval",
    value: "UPSMF",
  },
];

export default function CoursePreview() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid overflow-hidden border border-[#dfe8e2] bg-[#005b3c] lg:grid-cols-[0.95fr_1.05fr]">

          {/* LEFT */}
          <div className="relative flex flex-col justify-between p-8 text-white sm:p-10 lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
                Our Programme
              </p>

              <h2 className="font-display mt-4 max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-[42px]">
                ANM – Auxiliary Nurse & Midwife
              </h2>

              <div className="mt-5 h-[3px] w-12 bg-[#f36b21]" />

              <p className="mt-6 max-w-xl text-base leading-7 text-white/75">
                A two-year diploma programme designed to prepare female
                students for careers in community health nursing through
                academic learning and practical clinical training.
              </p>
            </div>

            <Link
              href="/courses"
              className="group mt-8 inline-flex w-fit items-center gap-2 border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#f36b21] hover:bg-[#f36b21]"
            >
              View Course Details

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="bg-[#f3f8f5] p-8 sm:p-10 lg:p-12">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
                Course Information
              </p>

              <h3 className="font-display mt-3 text-2xl font-bold text-[#005b3c] sm:text-3xl">
                A focused foundation for nursing
              </h3>
            </div>

            <div className="grid grid-cols-1 border-t border-[#dbe6df] sm:grid-cols-2">
              {courseFacts.map((fact) => {
                const Icon = fact.icon;

                return (
                  <div
                    key={fact.label}
                    className="flex items-center gap-4 border-b border-[#dbe6df] py-6 sm:even:border-l sm:even:pl-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#005b3c] shadow-sm">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.1em] text-[#68756f]">
                        {fact.label}
                      </p>

                      <p className="mt-1 text-base font-bold text-[#17352a]">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 flex items-start gap-3 border-l-2 border-[#f36b21] pl-4">
              <div>
                <p className="text-sm font-semibold text-[#005b3c]">
                  Female candidates
                </p>

                <p className="mt-1 text-sm leading-6 text-[#68756f]">
                  The ANM programme is designed for female candidates seeking
                  a career in nursing and community healthcare.
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}