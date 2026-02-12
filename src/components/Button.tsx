type ButtonVariants = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  variant?: ButtonVariants;
}

const baseClasses = "flex gap-2 p-3 rounded-lg font-medium";

const variantClasses: Record<ButtonVariants, string> = {
  primary:
    "bg-blue-500 font-2xl text-gray-800 hover:bg-blue-400 active:bg-blue-300",
  secondary:
    "text-gray-200 hover:bg-gray-400 active:bg-gray-300 active:text-gray-400",
};

export default function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant ?? "primary"]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
