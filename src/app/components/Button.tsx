import Link from "next/link"; // Заміна на Link від Next.js
import { cn } from "@/app/lib/utilities";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
  external?: boolean;
  isLoading?: boolean; // Додано для завантаження
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  asChild = false,
  href,
  external = false,
  isLoading = false, // Додано для завантаження
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50";

  const variants = {
    primary: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    secondary:
      "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
    outline:
      "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (isLoading) {
    return (
      <button className={classes} disabled {...props}>
        <div className="w-5 h-5 border-4 border-t-4 border-transparent border-t-primary animate-spin rounded-full"></div>
      </button>
    );
  }

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
