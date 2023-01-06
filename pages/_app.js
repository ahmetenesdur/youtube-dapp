import "../styles/globals.css";
import { LivepeerConfig } from "@livepeer/react";
import LivePeerClient from "../livepeer";

export default function App({ Component, pageProps }) {
  return (
    <LivepeerConfig client={LivePeerClient}>
      <Component {...pageProps} />
    </LivepeerConfig>
  );
}
