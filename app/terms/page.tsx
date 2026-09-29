import Container from "@/components/ui/Container";

export default function TermsPage() {
  return (
    <main>
      <section className="border-b border-[#e3e9e5] bg-[#f1f7f4]">
        <Container>
          <div className="py-16 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
              Legal
            </p>

            <h1 className="font-display mt-4 text-4xl font-bold text-[#005b3c] sm:text-5xl">
              Terms of Use
            </h1>

            <div className="orange-line mt-6" />
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-4xl space-y-8 text-base leading-8 text-[#68756f]">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#005b3c]">
                Website Use
              </h2>

              <p className="mt-3">
                This website is maintained by Shri Krishna College of Nursing
                Education to provide information about the institution,
                academic programmes, admissions, facilities and contact
                information.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#005b3c]">
                Information
              </h2>

              <p className="mt-3">
                Visitors are requested to use the information provided on this
                website for genuine academic and admission-related purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#005b3c]">
                Contact
              </h2>

              <p className="mt-3">
                For clarification regarding admissions or institutional
                information, please contact Shri Krishna College of Nursing
                Education directly.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}