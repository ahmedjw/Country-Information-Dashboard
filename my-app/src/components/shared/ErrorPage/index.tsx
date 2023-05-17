import { Typography } from "@material-ui/core";
import CDButton from "../CDButton";
import useStyles from "./styles";
import ErrorPageProps from "./interfaces";

const ErrorPage: React.FC<ErrorPageProps> = ({
  titleFontSize,
  isButtonVisible,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography
        variant={titleFontSize}
        component="h6"
        className={classes.title}
      >
        Error Message
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        className={classes.paragraph}
      >
        there is an Error happpend u can refresh the page By clicking on the
        button below
      </Typography>
      {isButtonVisible ? (
        <CDButton
          color="primary"
          buttonText={"refresh the page"}
          size="lg"
          //   onClick={() => }
        />
      ) : null}
    </div>
  );
};

export default ErrorPage;
