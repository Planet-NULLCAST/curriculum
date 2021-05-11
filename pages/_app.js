import UserState from "../context/user/UserState";
import "../styles/globals.scss";
import "highlight.js/styles/default.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserState>
      <Component {...pageProps} />
    </UserState>
  );
}

export default MyApp;
