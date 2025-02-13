import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Banner from "../components/banner";
import Footer from "../components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Banner />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
