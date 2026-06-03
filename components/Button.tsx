import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

const variants = {
  primary:
    "bg-[#C79A8B] text-white shadow-md hover:bg-[#b88a7a] hover:shadow-lg hover:shadow-[#C79A8B]/30 hover:-translate-y-0.5",
  secondary:
    "bg-[#916B61] text-white shadow-md hover:bg-[#7d5a51] hover:shadow-lg hover:-translate-y-0.5",
  outline:
    "border-2 border-[#C79A8B] text-[#916B61] hover:bg-[#C79A8B]/10 hover:shadow-sm",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
