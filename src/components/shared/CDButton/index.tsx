import { Button as MuiButton } from "@material-ui/core";
import { ButtonProps } from "./interfaces";
import useStyles from "./styles";

const CDButton: React.FC<ButtonProps> = ({
  icon,
  color,
  size,
  disabled,
  buttonText,
  type,
  isLoading,
  ...props
}) => {
  const classes = useStyles();
  return (
    <MuiButton
      startIcon={icon}
      color={color}
      disabled={isLoading || disabled}
      className={`${classes.button} ${classes[size]}`}
      disableElevation
      type={type}
      {...props}
    >
      {buttonText}
    </MuiButton>
  );
};

export default CDButton;
