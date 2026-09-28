import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  GraduationCap,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        mobile-hero
        relative
        min-h-[auto]
        overflow-hidden
        bg-[#eef3ef]

        sm:min-h-[calc(100vh-116px)]
      "
    >
      {/* =========================================================
          BACKGROUND CAMPUS IMAGE
      ========================================================= */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-campus.png"
          alt="Shri Krishna College of Nursing Education campus"
          fill
          priority
          sizes="100vw"
          className="
            scale-[1.04]
            object-cover
            object-[60%_center]
            blur-[2px]
            sm:object-center
          "
        />

        {/* Very light neutral veil — no green overlay */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <div
        className="
          mobile-hero-content
          relative
          z-10
          flex
          min-h-[auto]
          items-center

          sm:min-h-[calc(100vh-116px)]
        "
      >
        <div className="site-container w-full py-8 sm:py-16 lg:py-20">

          {/* =====================================================
              WHITE FROSTED HERO CARD
          ===================================================== */}
          <div
            className="
              mobile-hero-card
              w-full
              max-w-[760px]
              rounded-[6px]
              border
              border-white/70
              bg-white/90
              p-5
              shadow-[0_25px_80px_rgba(0,45,30,0.18)]
              backdrop-blur-[8px]

              sm:p-9
              md:p-10
              lg:p-11
            "
          >
            {/* =================================================
                EYEBROW
            ================================================= */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#f36b21]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#005b3c]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Shri Krishna College of Nursing Education
              </span>
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}
            <h1
              className="
                font-display
                mt-5
                max-w-[680px]
                text-[34px]
                font-bold
                leading-[1.04]
                tracking-[-0.025em]
                text-[#17352a]

                sm:text-5xl
                md:text-6xl
                lg:text-[68px]
              "
            >
              Shaping
              <br />
              Compassionate
              <br />
              <span className="text-[#f36b21]">
                Healthcare
              </span>
              <br />
              <span className="text-[#f36b21]">
                Professionals
              </span>
            </h1>

            {/* =================================================
                ORANGE ACCENT
            ================================================= */}
            <div className="mt-5 h-[3px] w-12 bg-[#f36b21]" />

            {/* =================================================
                DESCRIPTION
            ================================================= */}
            <p
              className="
                mt-5
                max-w-[620px]
                text-sm
                leading-6
                text-[#52635b]

                sm:text-base
                sm:leading-7
                lg:text-[17px]
                lg:leading-8
              "
            >
              Quality nursing education that combines academic learning,
              practical training, compassion and service to prepare students
              for meaningful careers in healthcare.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}
            <div className="mt-6 flex flex-wrap gap-3">
              {/* Primary Button */}
              <Link
                href="/courses"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-[#f36b21]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#dc5712]
                  hover:shadow-lg

                  sm:px-6
                  sm:py-3.5
                "
              >
                Explore ANM Course

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* Secondary Button */}
              <Link
                href="/about"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  border
                  border-[#005b3c]
                  bg-white/60
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-[#005b3c]
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-[#005b3c]
                  hover:text-white

                  sm:px-6
                  sm:py-3.5
                "
              >
                About Us

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* =================================================
                COURSE HIGHLIGHTS
                Mobile: 3 columns
                Desktop: 3 columns
            ================================================= */}
            <div className="mt-7 border-t border-[#dce5df] pt-5">
              <div className="grid grid-cols-3 divide-x divide-[#dce5df]">

                {/* =================================================
                    UPSMF
                ================================================= */}
                <div
                  className="
                    flex
                    flex-col
                    items-center
                    px-1
                    text-center

                    sm:flex-row
                    sm:items-center
                    sm:px-2
                    sm:text-left
                  "
                >
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#fff5ef]
                      text-[#f36b21]

                      sm:h-10
                      sm:w-10
                    "
                  >
                    <Award
                      size={17}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="mt-2 sm:ml-3 sm:mt-0">
                    <p
                      className="
                        text-[11px]
                        font-bold
                        text-[#005b3c]

                        sm:text-sm
                      "
                    >
                      UPSMF
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[9px]
                        text-[#7b8781]

                        sm:text-xs
                      "
                    >
                      Affiliated
                    </p>
                  </div>
                </div>

                {/* =================================================
                    ANM
                ================================================= */}
                <div
                  className="
                    flex
                    flex-col
                    items-center
                    px-1
                    text-center

                    sm:flex-row
                    sm:items-center
                    sm:px-2
                    sm:text-left
                  "
                >
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#fff5ef]
                      text-[#f36b21]

                      sm:h-10
                      sm:w-10
                    "
                  >
                    <GraduationCap
                      size={17}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="mt-2 sm:ml-3 sm:mt-0">
                    <p
                      className="
                        text-[11px]
                        font-bold
                        text-[#005b3c]

                        sm:text-sm
                      "
                    >
                      ANM
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[9px]
                        text-[#7b8781]

                        sm:text-xs
                      "
                    >
                      2 Years
                    </p>
                  </div>
                </div>

                {/* =================================================
                    40 SEATS
                ================================================= */}
                <div
                  className="
                    flex
                    flex-col
                    items-center
                    px-1
                    text-center

                    sm:flex-row
                    sm:items-center
                    sm:px-2
                    sm:text-left
                  "
                >
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#fff5ef]
                      text-[#f36b21]

                      sm:h-10
                      sm:w-10
                    "
                  >
                    <Users
                      size={17}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="mt-2 sm:ml-3 sm:mt-0">
                    <p
                      className="
                        text-[11px]
                        font-bold
                        text-[#005b3c]

                        sm:text-sm
                      "
                    >
                      40 Seats
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[9px]
                        text-[#7b8781]

                        sm:text-xs
                      "
                    >
                      Capacity
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          CAMPUS LABEL
      ========================================================= */}
      <div
        className="
          absolute
          bottom-6
          right-6
          z-20
          hidden
          bg-white/95
          px-4
          py-3
          shadow-lg
          backdrop-blur-sm

          sm:block
        "
      >
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f36b21]" />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#005b3c]
            "
          >
            Our Campus · Baghpat
          </span>
        </div>
      </div>
    </section>
  );
}