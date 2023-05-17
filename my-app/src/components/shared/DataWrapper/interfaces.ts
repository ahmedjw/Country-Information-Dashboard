import { ApolloError } from "@apollo/client";
export interface country {
  code: string;
  currency: string;
  languages: Array<{
    code: string;
    name: string;
  }>;
  name: string;
  native: string;
  continent: {
    name: string;
  };
  states: {
    name: string;
  };
}
export interface dataWraperProps {
  loading: boolean;
  error: ApolloError | undefined;
  contries: Array<country>;
  limit: number;
  // setLimit: React.Dispatch<React.SetStateAction<number>>;
}
