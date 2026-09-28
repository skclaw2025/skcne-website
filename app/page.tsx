import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import AboutPreview from "@/components/home/AboutPreview";
import CoursePreview from "@/components/home/CoursePreview";
import Facilities from "@/components/home/Facilities";
import GalleryPreview from "@/components/home/GalleryPreview";
import NewsPreview from "@/components/home/NewsPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
      <AboutPreview />
      <CoursePreview />
      <Facilities />
      <GalleryPreview />
      <NewsPreview />
      <ContactCTA />
    </main>
  );
}