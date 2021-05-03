import UserState from "../context/user/UserState";
import "../styles/globals.css";
import "highlight.js/styles/default.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserState>
      <Component {...pageProps} />
    </UserState>
  );
}

export default MyApp;
