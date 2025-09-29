import React from "react";
import AppIcons, { type IconNameType } from "src/config/AppIcons";
import cn from "src/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "outline"
    | "navlink"
    | "navlinkHovered";
  size?: "sm" | "md" | "lg";
  href?: string;
  id: string;
  disabled?: boolean;
  icon_name?: IconNameType;
  className?: string;
  target?: "_blank";
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = "primary",
      size = "md",
      type = "button",
      href,
      id,
      disabled = false,
      icon_name,
      className = "",
      children,
      target,
      ...rest
    },
    ref,
  ) => {
    // Base classes
    const baseClasses =
      "inline-flex items-center gap-2 text-nowrap justify-center font-medium transition-all ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-50";

    // Size variants
    const sizeClasses = {
      sm: "h-8 px-3 sm:text-sm rounded-2xl",
      md: "h-10 px-4 sm:text-base rounded-2xl",
      lg: "h-[3.131rem] px-6 sm:text-lg text-sm rounded-3xl",
    };

    // Color variants
    const variantClasses = {
      primary:
        "bg-grey-400 text-white hover:bg-grey-300 hover:text-surface-10 disabled:text-grey-400 disabled:bg-green-50",
      secondary:
        "bg-grey-50 text-neutral-200 hover:bg-surface-40 disabled:text-neutral-disabled disabled:bg-surface-elevated",
      tertiary:
        "bg-surface-10 text-grey-300 hover:bg-surface-30 hover:text-neutral-200 disabled:text-neutral-disabled disabled:bg-surface-elevated",
      outline:
        "text-grey-300 hover:text-neutral-200 disabled:text-neutral-disabled",
      navlink:
        "bg-transparent text-inherit hover:bg-white-3 hover:text-neutral-200 disabled:text-neutral-disabled disabled:bg-surface-elevated",
      navlinkHovered:
        "bg-transparent text-inherit bg-white-3 text-neutral-200 disabled:text-neutral-disabled disabled:bg-surface-elevated",
    };

    const buttonClasses = cn(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      className,
    );

    const Icon = icon_name ? AppIcons[icon_name] : null;

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          id={id}
          href={disabled ? undefined : href}
          className={buttonClasses}
          target={target}
          {...rest}
        >
          {children}
          {Icon && <Icon />}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        id={id}
        type={type}
        disabled={disabled}
        className={buttonClasses}
        {...rest}
      >
        {children}
        {Icon && <Icon />}
      </button>
    );
  },
);

Button.displayName = "Button";
