import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const galleryImages = [
  {
    src: "/images/campus-01.png",
    alt: "Shri Krishna College of Nursing Education campus",
    className: "md:col-span-2 md:row-span-2",
  },
];

export default function GalleryPreview() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Campus Gallery"
            title="A glimpse of our campus"
            description="Explore our campus, learning spaces and institutional environment through photographs."
          />

          <Link
            href="/campus-gallery"
            className="group mb-12 inline-flex w-fit shrink-0 items-center gap-2 border border-[#005b3c] px-5 py-3 text-sm font-semibold text-[#005b3c] transition-all duration-300 hover:bg-[#005b3c] hover:text-white"
          >
            View Full Gallery
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[170px]">
          {galleryImages.map((image, index) => (
            <Link
              key={image.src}
              href="/campus-gallery"
              className={`group relative overflow-hidden bg-[#e9efeb] ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <Images size={16} strokeWidth={1.7} />
                <span className="text-xs font-semibold uppercase tracking-[0.12em]">
                  Campus
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}