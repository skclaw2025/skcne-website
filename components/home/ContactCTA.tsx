import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Container from "../ui/Container";
import { SITE } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section className="bg-[#F1F7F4]">
      <Container>
        <div className="grid gap-10 py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:py-20">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F36B21]">
              Begin Your Journey
            </p>

            <h2 className="font-display mt-4 max-w-3xl text-3xl font-bold leading-tight text-[#17352A] sm:text-4xl lg:text-[44px]">
              Ready to take the next step toward a career in nursing?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#68756F]">
              Get in touch with Shri Krishna College of Nursing Education to
              learn more about the ANM programme, eligibility and admissions.
            </p>

            <Link
              href="/contact"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                bg-[#F36B21]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#DC5712]
                hover:shadow-md
              "
            >
              Make an Enquiry

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* =====================================================
              CONTACT DETAILS
          ===================================================== */}
          <div
            className="
              grid
              gap-5
              border-t
              border-[#DCE5DF]
              pt-7

              sm:grid-cols-3

              lg:block
              lg:min-w-[300px]
              lg:border-l
              lg:border-t-0
              lg:pl-8
              lg:pt-0
            "
          >

            {/* =================================================
                PHONE
            ================================================= */}
            <a
              href={`tel:${SITE.phone}`}
              className="
                flex
                items-center
                gap-3
                text-[#005B3C]
                transition-opacity
                duration-300
                hover:opacity-70
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  border
                  border-[#CFE0D8]
                  bg-white
                  text-[#005B3C]
                "
              >
                <Phone size={17} />
              </span>

              <span>
                <span className="block text-xs text-[#68756F]">
                  Call Us
                </span>

                <span className="mt-1 block text-sm font-semibold text-[#005B3C]">
                  {SITE.phone}
                </span>
              </span>
            </a>

            {/* =================================================
                EMAIL
            ================================================= */}
            <a
              href={`mailto:${SITE.email}`}
              className="
                flex
                items-center
                gap-3
                text-[#005B3C]
                transition-opacity
                duration-300
                hover:opacity-70

                lg:mt-5
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  border
                  border-[#CFE0D8]
                  bg-white
                  text-[#005B3C]
                "
              >
                <Mail size={17} />
              </span>

              <span>
                <span className="block text-xs text-[#68756F]">
                  Email Us
                </span>

                <span className="mt-1 block text-sm font-semibold text-[#005B3C]">
                  {SITE.email}
                </span>
              </span>
            </a>

            {/* =================================================
                ADDRESS
            ================================================= */}
            <div
              className="
                flex
                items-start
                gap-3
                text-[#005B3C]

                lg:mt-5
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  border
                  border-[#CFE0D8]
                  bg-white
                  text-[#005B3C]
                "
              >
                <MapPin size={17} />
              </span>

              <span>
                <span className="block text-xs text-[#68756F]">
                  Visit Us
                </span>

                <span className="mt-1 block text-sm font-semibold leading-5 text-[#005B3C]">
                  Baghpat, Uttar Pradesh
                </span>
              </span>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}