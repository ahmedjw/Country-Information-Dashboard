import { MouseEventHandler, ReactNode } from "react";

export type Size = "xl" | "lg" | "md" | "sm" | "icon";
export type Color = "primary" | "secondary";
export type ButtonType = "button" | "reset" | "submit";

export interface ButtonProps {
  icon?: ReactNode;
  color: Color;
  size: Size;
  disabled?: boolean;
  buttonText?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: ButtonType;
  isLoading?: boolean;
}
