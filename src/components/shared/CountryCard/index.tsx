import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import useStyles from "./styles";
import { CountryCardProps, CountryData } from "./interfaces";
import Flag from "react-world-flags";
import CDButton from "../CDButton";
import axios from "axios";
import CountryField from "../CountryField";
import { CircularProgress } from "@material-ui/core";

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  currency,
  language,
  flag,
}) => {
  const [data, setData] = useState<CountryData>([]);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [detailsStatus, setDetailsStatus] = useState<boolean>(false);

  const handleClick = () => {
    setDetailsStatus((prevState) => !prevState);
  };

  useEffect(() => {
    //a seprate Api end point to fetch additional data for countries
    if (detailsStatus) {
      const fetchCountryDetails = async () => {
        try {
          const response = await axios.get(
            `https://restcountries.com/v3.1/alpha/${flag}`
          );
          const countryData = response.data;
          setData(countryData);
          setLoading(false);
        } catch (error) {
          setError(error);
          console.log(error);
        }
      };

      fetchCountryDetails();
    }
  }, [detailsStatus]);

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Box className={classes.Box}>
          <Typography variant="h6">{name}</Typography>
          <Flag code={flag} width="22" height="22" />
        </Box>
        <CountryField
          Styles={classes.Box}
          fieldName="Currency"
          fieldValue={currency}
        />
        <CountryField
          Styles={classes.Box}
          fieldName="Language"
          fieldValue={language}
        />
        {detailsStatus ? (
          loading ? (
            <Box>
              <CircularProgress />
            </Box>
          ) : (
            //here we can make this as a sperate component to write less code
            <Box>
              <Box className={classes.Box}>
                <Typography variant="h6">Addtional Details </Typography>
              </Box>
              <CountryField
                Styles={classes.Box}
                fieldName="Capital"
                fieldValue={data[0]?.capital}
              />
              <CountryField
                Styles={classes.Box}
                fieldName="timezones"
                fieldValue={data[0]?.timezones[0]}
              />{" "}
              <CountryField
                Styles={classes.Box}
                fieldName="population"
                fieldValue={data[0]?.population}
              />
              <CountryField
                Styles={classes.Box}
                fieldName="continents"
                fieldValue={data[0]?.continents[0]}
              />
            </Box>
          )
        ) : (
          ""
        )}
        <CDButton
          color={"primary"}
          buttonText={
            !detailsStatus ? "Show More Details" : "Show Less Details"
          }
          size="lg"
          onClick={handleClick}
        />
      </CardContent>
    </Card>
  );
};

export default CountryCard;
