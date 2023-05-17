type Size = "xs" | "sm" | "md" | "lg" | "xl";
type Color = "primary" | "secondary";

interface ProgressSpinnerProps {
  size: Size;
  color: Color;
  isButtonSpinner?: boolean;
}

export default ProgressSpinnerProps;
