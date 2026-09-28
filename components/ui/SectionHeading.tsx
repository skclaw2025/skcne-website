interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f36b21]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-3xl font-bold leading-tight text-[#005b3c] sm:text-4xl lg:text-[42px]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-[#68756f]">
          {description}
        </p>
      )}

      <div className={`orange-line mt-5 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}