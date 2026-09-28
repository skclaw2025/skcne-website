import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#f36b21] text-white hover:bg-[#dc5712]"
      : "border border-[#005b3c] text-[#005b3c] hover:bg-[#005b3c] hover:text-white";

  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-sm
    px-6
    py-3
    text-sm
    font-semibold
    transition-all
    duration-300
    ${styles}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        <ArrowRight size={17} strokeWidth={2} />
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}
      <ArrowRight size={17} strokeWidth={2} />
    </button>
  );
}