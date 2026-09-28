import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Campus Gallery",
  description:
    "Explore the campus and learning environment of Shri Krishna College of Nursing Education, Baghpat, Uttar Pradesh.",
};

const galleryImages = [
  {
    src: "/images/campus-01.png",
    alt: "Shri Krishna College of Nursing Education campus",
    title: "Our Campus",
    description:
      "A glimpse of Shri Krishna College of Nursing Education in Baghpat.",
  },
];

export default function CampusGalleryPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="border-b border-[#e3e9e5] bg-[#f3f8f5]">
        <Container>
          <div className="py-16 sm:py-20 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
              Campus Gallery
            </p>

            <h1 className="font-display mt-4 max-w-4xl text-4xl font-bold leading-tight text-[#005b3c] sm:text-5xl lg:text-[60px]">
              A glimpse of our campus
            </h1>

            <div className="orange-line mt-6" />

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#68756f] sm:text-lg sm:leading-8">
              Explore the environment where our students learn, develop
              practical skills and begin their journey towards a career in
              nursing.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <Container>
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3f8f5] text-[#005b3c]">
              <Camera size={20} strokeWidth={1.7} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#005b3c]">
                Shri Krishna College of Nursing Education
              </p>
              <p className="mt-1 text-xs text-[#68756f]">
                Baghpat, Uttar Pradesh
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <article
                key={image.src}
                className="group overflow-hidden border border-[#dfe8e2] bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e9efeb]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-lg font-bold text-[#005b3c]">
                    {image.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#68756f]">
                    {image.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* More Photos Placeholder */}
      <section className="border-t border-[#e3e9e5] bg-[#fafbf8]">
        <Container>
          <div className="flex flex-col gap-6 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
                Our Institution
              </p>

              <h2 className="font-display mt-3 text-2xl font-bold text-[#005b3c] sm:text-3xl">
                Discover more about Shri Krishna College of Nursing Education
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-7 text-[#68756f]">
                Learn about our academic approach, vision and commitment to
                developing compassionate healthcare professionals.
              </p>
            </div>

            <Link
              href="/about"
              className="group inline-flex w-fit shrink-0 items-center gap-2 border border-[#005b3c] px-6 py-3.5 text-sm font-semibold text-[#005b3c] transition-all duration-300 hover:bg-[#005b3c] hover:text-white"
            >
              About Us
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