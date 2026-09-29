import Container from "@/components/ui/Container";

export default function PrivacyPage() {
  return (
    <main>
      <section className="border-b border-[#e3e9e5] bg-[#f1f7f4]">
        <Container>
          <div className="py-16 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
              Legal
            </p>

            <h1 className="font-display mt-4 text-4xl font-bold text-[#005b3c] sm:text-5xl">
              Privacy & Security Policy
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
                Information We Collect
              </h2>

              <p className="mt-3">
                When you contact Shri Krishna College of Nursing Education
                through this website, information such as your name, phone
                number, email address and enquiry details may be collected for
                responding to your request.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#005b3c]">
                Use of Information
              </h2>

              <p className="mt-3">
                Information submitted through the website may be used to
                respond to enquiries, provide admission information and
                communicate regarding the requested services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#005b3c]">
                Security
              </h2>

              <p className="mt-3">
                Reasonable measures are taken to protect information submitted
                through the website. Users should avoid submitting confidential
                or highly sensitive personal information through general
                enquiry forms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#005b3c]">
                Contact
              </h2>

              <p className="mt-3">
                For privacy-related questions, please contact us at
                contact@skcne.com.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}