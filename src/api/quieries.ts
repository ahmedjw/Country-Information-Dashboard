import { gql } from "@apollo/client";

export const GET_DATA = gql`
  query Query {
    countries {
      code
      currency
      languages {
        code
        name
      }
      name
      native
      continent {
        name
      }
      states {
        name
      }
    }
  }
`;
