import Head from "next/head";
import NavBar from "../components/NavBar";
import "../styles/global.css";

const app = ({ Component, pageProps }) => {
  console.log("[App] render");
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />;
    </>
  );
};

export default app;
