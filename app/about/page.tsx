import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const commitments = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description:
      "Deliver high-quality education aligned with the standards of the Uttar Pradesh State Medical Faculty (UPSMF).",
  },
  {
    icon: Lightbulb,
    title: "Learning & Critical Thinking",
    description:
      "Foster a learning environment that encourages critical thinking, empathy and a spirit of service.",
  },
  {
    icon: Users,
    title: "Empowering Students",
    description:
      "Empower female students, particularly those from rural and semi-urban backgrounds, through meaningful education.",
  },
  {
    icon: HeartHandshake,
    title: "Service to Society",
    description:
      "Prepare competent ANMs who can contribute meaningfully to the health and well-being of individuals and communities.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="border-b border-[#e3e9e5] bg-[#f3f8f5]">
        <Container>
          <div className="py-16 sm:py-20 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
              About Us
            </p>

            <h1 className="font-display mt-4 max-w-4xl text-4xl font-bold leading-tight text-[#005b3c] sm:text-5xl lg:text-[60px]">
              Nurturing knowledge, compassion and service
            </h1>

            <div className="orange-line mt-6" />

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#68756f] sm:text-lg sm:leading-8">
              Shri Krishna College of Nursing Education is committed to
              developing skilled, compassionate and responsible healthcare
              professionals through quality education and practical training.
            </p>
          </div>
        </Container>
      </section>

      {/* About Institution */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
                Shri Krishna College of Nursing Education
              </p>

              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-[#005b3c] sm:text-4xl">
                A foundation for a meaningful career in healthcare
              </h2>

              <div className="orange-line mt-5" />
            </div>

            <div className="space-y-5 text-base leading-8 text-[#68756f]">
              <p>
                Shri Krishna College of Nursing Education is a premier
                institution located in Baghpat, Uttar Pradesh.
              </p>

              <p>
                The institution is focused on providing students with quality
                nursing education that combines theoretical understanding with
                practical learning and clinical exposure.
              </p>

              <p>
                We believe that nursing education is not limited to developing
                professional skills. It is also about building compassion,
                discipline, integrity and a sense of responsibility towards
                individuals and communities.
              </p>

              <p>
                Through a supportive academic environment, dedicated faculty
                and practical learning opportunities, we aim to help students
                develop the confidence and knowledge required for a rewarding
                career in healthcare.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision */}
      <section className="section-padding bg-[#005b3c]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
                Our Vision
              </p>

              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Academic excellence with compassion and purpose
              </h2>

              <div className="mt-5 h-[3px] w-12 bg-[#f36b21]" />
            </div>

            <div>
              <p className="font-display text-2xl font-bold leading-[1.45] text-white sm:text-3xl">
                “At Shri Krishna College of Nursing Education, our vision is to
                become a center of academic excellence in nursing education,
                producing skilled, compassionate, and ethical healthcare
                professionals.”
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Commitments */}
      <section className="section-padding bg-[#f3f8f5]">
        <Container>
          <SectionHeading
            eyebrow="Our Commitments"
            title="What we strive to build"
            description="Our approach to nursing education is guided by a commitment to academic quality, practical learning and service."
          />

          <div className="grid gap-px overflow-hidden border border-[#dce7e0] bg-[#dce7e0] sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group bg-white p-7 transition-colors duration-300 hover:bg-[#005b3c]"
                >
                  <div className="flex h-11 w-11 items-center justify-center border border-[#d8e5de] text-[#005b3c] transition-colors duration-300 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <span className="mt-6 block text-[10px] font-bold tracking-[0.18em] text-[#f36b21]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-[#005b3c] transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#68756f] transition-colors duration-300 group-hover:text-white/75">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Principal's Message */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
                Principal's Message
              </p>

              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-[#005b3c] sm:text-4xl">
                Education that shapes lives
              </h2>

              <div className="orange-line mt-5" />

              <div className="mt-8 border-l-2 border-[#f36b21] pl-5">
                <p className="font-display text-xl font-bold leading-8 text-[#005b3c]">
                  “Education is not just about imparting knowledge, it’s about
                  shaping lives and serving humanity.”
                </p>
              </div>
            </div>

            <div className="border border-[#dfe8e2] bg-[#fafbf8] p-7 sm:p-10">
              <div className="space-y-5 text-base leading-7 text-[#68756f]">
                <p>
                  I extend a warm welcome to all aspiring nursing
                  professionals. At Shri Krishna College of Nursing Education,
                  we believe in nurturing students not only with clinical
                  skills but also with the values of compassion, discipline,
                  and integrity.
                </p>

                <p>
                  Our ANM program is designed to build a strong foundation in
                  both theoretical learning and hands-on practical training.
                  We are proud of our dedicated faculty, well-equipped
                  infrastructure, and supportive environment that together
                  create a platform for student growth and success.
                </p>

                <p>
                  In today’s ever-evolving healthcare landscape, the role of
                  nursing professionals has become more crucial than ever. Our
                  goal is to prepare nurses who are capable of delivering
                  high-quality care and making meaningful contributions to the
                  health and well-being of individuals and communities.
                </p>

                <p>
                  We invite you to join our institution and begin a fulfilling
                  journey toward a respected and rewarding career in nursing.
                </p>
              </div>

              <div className="mt-8 border-t border-[#dfe8e2] pt-6">
                <p className="text-base font-bold text-[#17352a]">
                  Ms. Renu Sharma
                </p>
                <p className="mt-1 text-sm text-[#68756f]">Principal</p>
                <p className="mt-1 text-sm text-[#68756f]">
                  Shri Krishna College of Nursing Education, Baghpat
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-[#e3e9e5] bg-[#fafbf8]">
        <Container>
          <div className="flex flex-col gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
                Start Your Journey
              </p>

              <h2 className="font-display mt-2 text-2xl font-bold text-[#005b3c] sm:text-3xl">
                Explore our ANM programme
              </h2>
            </div>

            <Link
              href="/courses"
              className="group inline-flex w-fit items-center gap-2 bg-[#f36b21] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#dc5712]"
            >
              View ANM Course
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