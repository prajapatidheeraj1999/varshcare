import { ButtonHTMLAttributes, FC } from "react";

import IonIcon from "@reacticons/ionicons";
import classNames from "classnames";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  color?: "primary" | "danger" | "warn" | "success";
  size?: "sm" | "md" | "lg";
  label?: string;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  label,
  loading = false,
  disabled = false,
  className,
  color = "primary",
  children,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={classNames(
        className,
        "flex min-w-[144px] items-center justify-center rounded transition-opacity enabled:hover:opacity-80",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" &&
          (color === "primary"
            ? "bg-primary-900"
            : color === "success"
            ? "bg-success"
            : color === "warn"
            ? "bg-warning"
            : "bg-error"),
        variant === "outline" &&
          (color === "primary"
            ? "text-primary border-primary-900"
            : color === "success"
            ? "border-success text-success"
            : color === "warn"
            ? "border-warning text-warning"
            : "border-error text-error"),
        variant === "ghost" &&
          (color === "primary"
            ? "text-primary bg-background"
            : color === "success"
            ? "bg-secondary-2 text-success"
            : color === "warn"
            ? "bg-secondary-3 text-warning"
            : "bg-secondary-4 text-error"),
        {
          // Variant
          "text-white": variant === "primary",
          "bg-light-bg-3 text-light-text-3 dark:bg-dark-bg-3 dark:text-dark-text-4":
            variant === "secondary",
          border: variant === "outline",
          // Size
          "gap-1  p-2 text-sm": size === "sm",
          "h-10 gap-2 px-4": size === "md",
          "text-md h-12 gap-3 px-5": size === "lg",
        },
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <IonIcon name="radio-button-on-outline" className="animate-ping" />
      ) : (
        label || children
      )}
    </button>
  );
};

export default Button;
