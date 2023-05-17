import ProgressSpinner from "../ProgressSpinner";
import CustomContainer from "../Container";
import CountryCard from "../CountryCard";
import { country, dataWraperProps } from "./interfaces";
import ErrorPage from "../ErrorPage";

export default function DataWraper({
  loading,
  error,
  contries,
  limit,
}: dataWraperProps) {
  if (loading) return <ProgressSpinner size="lg" color="primary" />;
  if (error) return <ErrorPage titleFontSize={"h2"} isButtonVisible={true} />;

  return (
    <CustomContainer>
      {
        // since we graphQl endpoint don't support pagination Limit here is to enable pagination using local state
      }
      {contries?.slice(0, limit).map((country: country, index: number) => (
        <CountryCard
          name={country.name}
          currency={country.currency}
          language={country.languages[0]?.name}
          flag={country.code}
          key={index}
        />
      ))}
    </CustomContainer>
  );
}
