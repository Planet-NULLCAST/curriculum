import Head from "next/head";
import UserState from "../context/user/UserState";
import "react-toastify/dist/ReactToastify.css";
import "../styles/slick.scss";
import "../styles/slick-theme.scss";
import "../styles/globals.scss";
import "../styles/Home.module.scss";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <UserState>
      <Head>
      <meta name="google-site-verification" content="i7GH2ZiL_DBRxCi09A91mRT6EfWvMC-hrsL12WBCjqU" />
        <meta property="og:site_name" content="nullcast" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/nullcast"
        />
        <meta name="twitter:site" content="@nullcast_io" />
        <meta name="twitter:creator" content="@nullcast_io" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </UserState>
  );
}

export default MyApp;
