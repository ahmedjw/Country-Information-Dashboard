import { ThemeProvider } from "@emotion/react";
import React from "react";
import theme from "../../theme";
import { LayoutProps } from "./interface";
import { ApolloProvider } from "@apollo/client";
import client from "../../apollo";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ThemeProvider>
  );
};
export default Layout;
