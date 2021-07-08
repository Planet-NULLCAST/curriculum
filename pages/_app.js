import UserState from "../context/user/UserState";
import "../styles/globals.scss";
import "../styles/slick.scss";
import "../styles/slick-theme.scss";
import "highlight.js/styles/default.css";
import "../styles/Home.module.scss";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserState>
      <Component {...pageProps} />
      {/* <ToastContainer /> */}
    </UserState>
  );
}

export default MyApp;
