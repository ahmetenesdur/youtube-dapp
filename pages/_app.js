import { ApolloProvider } from "@apollo/client";
import client from "../client";
import "../styles/globals.css";
import { LivepeerConfig } from "@livepeer/react";
import livepeerClient from "../livepeer";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <LivepeerConfig client={livepeerClient}>
        <Component {...pageProps} />
      </LivepeerConfig>
    </ApolloProvider>
  );
}
