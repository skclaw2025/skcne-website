import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Hospital,
  ShieldCheck,
  Users,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "ANM Course",
  description:
    "Explore the 2-year ANM – Auxiliary Nurse & Midwife programme at Shri Krishna College of Nursing Education, Baghpat, approved by U.P. State Medical Faculty, Lucknow.",
};

const courseFacts = [
  {
    icon: Clock3,
    label: "Duration",
    value: "2 Years",
  },
  {
    icon: Users,
    label: "Intake",
    value: "40 Seats",
  },
  {
    icon: GraduationCap,
    label: "Programme",
    value: "ANM",
  },
  {
    icon: ShieldCheck,
    label: "Approval",
    value: "UPSMF",
  },
];

const subjects = [
  "Community Health Nursing",
  "Health Promotion",
  "Primary Health Care",
  "Child Health Nursing",
  "Midwifery",
  "Nutrition",
  "First Aid and Emergency Nursing",
  "Environmental Sanitation",
  "Infection Control",
  "Health Center Management",
];

const clinicalTraining = [
  "Primary Health Centres (PHCs)",
  "Community Health Centres (CHCs)",
  "District Hospitals",
  "Maternity Wards",
  "Urban Health Camps",
  "Rural Health Camps",
];

const eligibility = [
  "Female candidates only",
  "10+2 from a recognized board",
  "Any stream",
  "Age 17–35 years at the time of admission",
];

export default function CoursesPage() {
  return (
    <main>
      {/* Course Hero */}
      <section className="border-b border-[#e3e9e5] bg-[#f3f8f5]">
        <Container>
          <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
                Academic Programme
              </p>

              <h1 className="font-display mt-4 max-w-4xl text-4xl font-bold leading-[1.08] text-[#005b3c] sm:text-5xl lg:text-[58px]">
                ANM – Auxiliary Nurse & Midwife
              </h1>

              <div className="orange-line mt-6" />

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#68756f] sm:text-lg sm:leading-8">
                A two-year diploma programme designed to prepare female
                students with the knowledge, practical skills and professional
                values required for a career in nursing and community
                healthcare.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#f36b21] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#dc5712]"
                >
                  Make an Enquiry
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="tel:+919873830777"
                  className="inline-flex items-center gap-2 border border-[#005b3c] px-6 py-3.5 text-sm font-semibold text-[#005b3c] transition-colors duration-300 hover:bg-[#005b3c] hover:text-white"
                >
                  Call +91 9873830777
                </a>
              </div>
            </div>

            <div className="border border-[#cdded4] bg-white p-7 sm:p-8 lg:w-[320px]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f36b21]">
                Programme Approval
              </p>

              <p className="font-display mt-4 text-2xl font-bold leading-tight text-[#005b3c]">
                U.P. State Medical Faculty
              </p>

              <p className="mt-2 text-sm text-[#68756f]">
                Lucknow, Uttar Pradesh
              </p>

              <div className="mt-6 h-px bg-[#e3e9e5]" />

              <div className="mt-5 flex items-center gap-3">
                <ShieldCheck
                  size={23}
                  className="text-[#005b3c]"
                  strokeWidth={1.6}
                />

                <span className="text-sm font-semibold text-[#17352a]">
                  Approved Programme
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Course Snapshot */}
      <section className="border-b border-[#e3e9e5] bg-white">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {courseFacts.map((fact, index) => {
              const Icon = fact.icon;

              return (
                <div
                  key={fact.label}
                  className={`flex items-center gap-4 px-5 py-7 sm:px-7 ${
                    index !== courseFacts.length - 1
                      ? "border-b border-[#e3e9e5] lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3f8f5] text-[#005b3c]">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.1em] text-[#68756f]">
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
        </Container>
      </section>

      {/* Programme Overview */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <SectionHeading
              eyebrow="Programme Overview"
              title="Building the foundations of nursing practice"
              description="The ANM programme combines classroom learning with hands-on practical training to help students develop essential nursing and community healthcare skills."
            />

            <div className="space-y-5 text-base leading-8 text-[#68756f]">
              <p>
                The Auxiliary Nurse & Midwife programme is a two-year diploma
                programme designed for female students interested in pursuing
                a career in nursing and community healthcare.
              </p>

              <p>
                The programme provides students with foundational knowledge in
                nursing care, maternal and child health, community health,
                nutrition, first aid, infection control and other essential
                areas of healthcare practice.
              </p>

              <p>
                Alongside theoretical education, students receive hands-on
                practical and clinical training. This approach helps students
                understand how nursing knowledge is applied in real healthcare
                environments.
              </p>

              <p>
                The programme also emphasises compassion, discipline,
                communication, responsibility and ethical professional
                conduct.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-[#f3f8f5]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
                Eligibility
              </p>

              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-[#005b3c] sm:text-4xl">
                Who can apply?
              </h2>

              <div className="orange-line mt-5" />

              <p className="mt-6 max-w-lg text-base leading-7 text-[#68756f]">
                Candidates meeting the following requirements may apply for
                admission to the ANM programme.
              </p>
            </div>

            <div className="border border-[#dce7e0] bg-white">
              {eligibility.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-start gap-4 px-6 py-5 sm:px-8 ${
                    index !== eligibility.length - 1
                      ? "border-b border-[#e3e9e5]"
                      : ""
                  }`}
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#f36b21]"
                    strokeWidth={1.8}
                  />

                  <span className="text-sm leading-6 text-[#17352a] sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Subjects */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            eyebrow="Course Curriculum"
            title="Subjects covered during the programme"
            description="The curriculum provides a broad foundation in nursing practice, community health, maternal and child care and essential healthcare support."
            centered
          />

          <div className="mx-auto grid max-w-5xl gap-px overflow-hidden border border-[#dce7e0] bg-[#dce7e0] sm:grid-cols-2">
            {subjects.map((subject, index) => (
              <div
                key={subject}
                className="flex items-center gap-4 bg-white px-6 py-5 transition-colors duration-300 hover:bg-[#f3f8f5]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f3f8f5] text-xs font-bold text-[#005b3c]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-medium text-[#17352a] sm:text-base">
                  {subject}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Clinical Training */}
      <section className="section-padding bg-[#005b3c]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
            <div>
              <div className="flex h-14 w-14 items-center justify-center border border-white/20 bg-white/10 text-white">
                <Hospital size={27} strokeWidth={1.5} />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
                Practical Training
              </p>

              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Learning beyond the classroom
              </h2>

              <div className="mt-5 h-[3px] w-12 bg-[#f36b21]" />

              <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
                Practical exposure helps students connect theoretical
                knowledge with real healthcare situations and develop
                confidence in patient care.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {clinicalTraining.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-[#005b3c] px-6 py-5"
                >
                  <span className="text-xs font-bold tracking-[0.14em] text-[#f36b21]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium text-white/85">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Certification */}
      <section className="section-padding bg-white">
        <Container>
          <div className="mx-auto max-w-4xl border border-[#dfe8e2] bg-[#fafbf8] p-8 text-center sm:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#005b3c] text-white">
              <GraduationCap size={27} strokeWidth={1.6} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
              Certification
            </p>

            <h2 className="font-display mt-3 text-3xl font-bold text-[#005b3c]">
              Diploma in Auxiliary Nursing & Midwifery
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#68756f]">
              Upon successful completion of the programme, students receive a
              diploma from the U.P. State Medical Faculty, Lucknow and are
              eligible to register as ANMs, subject to applicable requirements.
            </p>
          </div>
        </Container>
      </section>

      {/* Admission CTA */}
      <section className="bg-[#f3f8f5]">
        <Container>
          <div className="flex flex-col gap-7 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
                Admissions
              </p>

              <h2 className="font-display mt-3 text-3xl font-bold text-[#005b3c] sm:text-4xl">
                Interested in the ANM programme?
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-7 text-[#68756f]">
                Contact us to learn more about admissions, eligibility and the
                programme.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-2 bg-[#f36b21] px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#dc5712]"
            >
              Enquire About Admission
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}