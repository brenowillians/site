import BodyTemplate from "@/components/body-template";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return( 
      <BodyTemplate>
        <Component {...pageProps} />
      </BodyTemplate> 
  )
}
