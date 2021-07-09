import UserState from "../context/user/UserState";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.scss";
import "../styles/slick.scss";
import "../styles/slick-theme.scss";
import "highlight.js/styles/default.css";
import "../styles/Home.module.scss";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <UserState>
      <Component {...pageProps} />
      <ToastContainer />
    </UserState>
  );
}

export default MyApp;
