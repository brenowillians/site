import BodyTemplate from "@/components/body-template";
import { UserProvider } from "@/context/user-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return( 
      <UserProvider>
        <BodyTemplate>
          <Component {...pageProps} />
        </BodyTemplate> 
      </UserProvider>
  )
}
