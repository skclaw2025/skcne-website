import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  GraduationCap,
  HeartPulse,
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

/* =========================================================
   COURSE FACTS
========================================================= */

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

/* =========================================================
   ACTUAL ANM SUBJECTS
========================================================= */

const firstYearSubjects = [
  "Primary Health Care",
  "Health Promotion",
  "Community Health Nursing",
  "Child Health Nursing",
  "Computer Education",
  "English",
];

const secondYearSubjects = [
  "Midwifery",
  "Health Centre Management",
];

/* =========================================================
   CLINICAL TRAINING
========================================================= */

const clinicalTraining = [
  {
    name: "Primary Health Centre",
    shortName: "PHC",
    icon: Hospital,
  },
  {
    name: "Community Health Centre",
    shortName: "CHC",
    icon: Building2,
  },
  {
    name: "District Hospital",
    shortName: "District Level",
    icon: Hospital,
  },
  {
    name: "Private Hospital",
    shortName: "Clinical Training",
    icon: HeartPulse,
  },
];

/* =========================================================
   ELIGIBILITY
========================================================= */

const eligibility = [
  "Female candidates only",
  "10+2 from a recognized board",
  "Any stream",
  "Age 17–35 years at the time of admission",
];

/* =========================================================
   CAREER OPPORTUNITIES AFTER ANM
========================================================= */

const careerOpportunities = [
  {
    icon: HeartPulse,
    title: "Auxiliary Nurse Midwife",
    description:
      "Work in community and primary healthcare settings, supporting nursing care, maternal health, newborn care and health education.",
    category: "Community Healthcare",
  },
  {
    icon: Hospital,
    title: "Primary Healthcare Services",
    description:
      "Explore opportunities in primary healthcare centres, sub-centres and other community-based healthcare services, subject to applicable eligibility requirements.",
    category: "Primary Health Services",
  },
  {
    icon: Users,
    title: "Maternal & Child Healthcare",
    description:
      "Build experience in maternal and child health services, including antenatal, postnatal, newborn care and health awareness activities.",
    category: "Mother & Child Care",
  },
  {
    icon: ShieldCheck,
    title: "Immunisation & Public Health",
    description:
      "Participate in immunisation activities, preventive healthcare initiatives, health education and community public-health programmes.",
    category: "Public Health",
  },
  {
    icon: Building2,
    title: "Community Healthcare",
    description:
      "Work with healthcare organisations and community programmes focused on health awareness, family welfare and preventive healthcare.",
    category: "Community Outreach",
  },
  {
    icon: HeartPulse,
    title: "NGO & Healthcare Projects",
    description:
      "Healthcare NGOs and community organisations may offer opportunities in health awareness, women and child health and community outreach projects.",
    category: "Healthcare Organisations",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function CoursesPage() {
  return (
    <main>
      {/* =====================================================
          COURSE HERO
      ===================================================== */}
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
                  href="tel:+919711558989"
                  className="inline-flex items-center gap-2 border border-[#005b3c] px-6 py-3.5 text-sm font-semibold text-[#005b3c] transition-colors duration-300 hover:bg-[#005b3c] hover:text-white"
                >
                  Call +91 9711558989
                </a>
              </div>
            </div>

            {/* Programme Approval */}
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

      {/* =====================================================
          COURSE SNAPSHOT
      ===================================================== */}
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

      {/* =====================================================
          PROGRAMME OVERVIEW
      ===================================================== */}
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

      {/* =====================================================
          ELIGIBILITY
      ===================================================== */}
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

      {/* =====================================================
          ACTUAL COURSE CURRICULUM
      ===================================================== */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            eyebrow="Course Curriculum"
            title="Subjects covered during the programme"
            description="The ANM programme is divided into subjects for the Ist Year and IInd Year."
            centered
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
            {/* IST YEAR */}
            <div className="overflow-hidden border border-[#dce7e0] bg-white">
              <div className="border-b border-[#dce7e0] bg-[#f1f7f4] px-6 py-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f36b21]">
                  Auxiliary Nursing and Midwifery (ANM)
                </p>

                <h3 className="font-display mt-2 text-2xl font-bold text-[#005b3c]">
                  Ist Year
                </h3>
              </div>

              <div className="divide-y divide-[#e3e9e5]">
                {firstYearSubjects.map((subject) => (
                  <div
                    key={subject}
                    className="flex items-center gap-4 px-6 py-5 transition-colors duration-300 hover:bg-[#f7faf8]"
                  >
                    <CheckCircle2
                      size={19}
                      strokeWidth={1.7}
                      className="shrink-0 text-[#f36b21]"
                    />

                    <span className="text-sm font-medium text-[#17352a] sm:text-base">
                      {subject}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* IIND YEAR */}
            <div className="overflow-hidden border border-[#dce7e0] bg-white">
              <div className="border-b border-[#dce7e0] bg-[#f1f7f4] px-6 py-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f36b21]">
                  Auxiliary Nursing and Midwifery (ANM)
                </p>

                <h3 className="font-display mt-2 text-2xl font-bold text-[#005b3c]">
                  IInd Year
                </h3>
              </div>

              <div className="divide-y divide-[#e3e9e5]">
                {secondYearSubjects.map((subject) => (
                  <div
                    key={subject}
                    className="flex items-center gap-4 px-6 py-5 transition-colors duration-300 hover:bg-[#f7faf8]"
                  >
                    <CheckCircle2
                      size={19}
                      strokeWidth={1.7}
                      className="shrink-0 text-[#f36b21]"
                    />

                    <span className="text-sm font-medium text-[#17352a] sm:text-base">
                      {subject}
                    </span>
                  </div>
                ))}
              </div>

              <div className="hidden min-h-[136px] lg:block" />
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CLINICAL TRAINING
      ===================================================== */}
      <section className="section-padding bg-[#f1f7f4]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
            {/* LEFT CONTENT */}
            <div>
              <div className="flex h-14 w-14 items-center justify-center border border-[#cfe0d8] bg-white text-[#005b3c]">
                <Hospital size={27} strokeWidth={1.5} />
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
                Clinical Training
              </p>

              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-[#005b3c] sm:text-4xl">
                Practical learning in healthcare settings
              </h2>

              <div className="mt-5 h-[3px] w-12 bg-[#f36b21]" />

              <p className="mt-6 max-w-xl text-base leading-7 text-[#68756f]">
                Students receive practical exposure in healthcare settings
                where they can develop essential nursing skills and understand
                patient care in real-world situations.
              </p>
            </div>

            {/* TRAINING LOCATIONS */}
            <div className="grid gap-4 sm:grid-cols-2">
              {clinicalTraining.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 border border-[#dce7e0] bg-white px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9d2c5] hover:shadow-sm"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f1f7f4] text-[#005b3c]">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-[#17352a] sm:text-base">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-xs text-[#68756f]">
                        {item.shortName}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CAREER OPPORTUNITIES AFTER ANM
      ===================================================== */}
      <section
        id="career-opportunities"
        className="relative overflow-hidden bg-white py-20 sm:py-24"
      >
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f3f8f5] blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#eef8f4] blur-3xl" />

        <Container>
          {/* SECTION HEADING */}
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
              Career Opportunities
            </p>

            <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-[#005b3c] sm:text-4xl lg:text-5xl">
              Where Can an ANM Career Take You?
            </h2>

            <div className="orange-line mx-auto mt-5" />

            <p className="mt-6 text-base leading-7 text-[#68756f] sm:text-lg">
              ANM professionals can explore opportunities in nursing,
              maternal and child healthcare, community health and public
              healthcare services, depending on the role and applicable
              eligibility requirements.
            </p>
          </div>

          {/* CAREER CARDS */}
          <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {careerOpportunities.map((career) => {
              const Icon = career.icon;

              return (
                <div
                  key={career.title}
                  className="group relative overflow-hidden border border-[#dce7e0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9d2c5] hover:shadow-lg"
                >
                  {/* Top accent */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-[#f36b21] transition-all duration-300 group-hover:w-full" />

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1f7f4] text-[#005b3c] transition-all duration-300 group-hover:bg-[#005b3c] group-hover:text-white">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display mt-6 text-xl font-bold text-[#005b3c]">
                    {career.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#68756f]">
                    {career.description}
                  </p>

                  {/* Category */}
                  <div className="mt-6 flex items-center justify-between border-t border-[#e8eee9] pt-5">
                    <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#f36b21]">
                      {career.category}
                    </span>

                    <ArrowRight
                      size={17}
                      className="text-[#005b3c] transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* CAREER JOURNEY STRIP */}
          <div className="relative mt-14 overflow-hidden bg-[#005b3c]">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />

            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/5" />

            <div className="relative grid gap-8 px-7 py-10 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-14">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f7a66d]">
                  Your Professional Journey
                </p>

                <h3 className="font-display mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Learn. Serve. Grow in Healthcare.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#d8ebe2] sm:text-base">
                  ANM education provides a foundation for work in nursing and
                  community healthcare. With professional experience and
                  further education, students can continue developing their
                  opportunities within the healthcare sector.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex w-fit items-center gap-2 bg-[#f36b21] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#dc5712]"
              >
                Explore Admissions

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* DISCLAIMER */}
          <p className="relative mx-auto mt-6 max-w-4xl text-center text-xs leading-5 text-[#68756f]">
            Career opportunities, job titles, recruitment processes and
            eligibility requirements may vary by employer, state and applicable
            government or regulatory rules. Students should check the
            requirements applicable to the position they wish to pursue.
          </p>
        </Container>
      </section>

      {/* =====================================================
          CERTIFICATION
      ===================================================== */}
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

      {/* =====================================================
          ADMISSION CTA
      ===================================================== */}
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