import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, Page, Card, Button } from "@shopify/polaris";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider i18n={enTranslations}>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
