import UserState from "../context/user/UserState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserState>
      <Component {...pageProps} />
    </UserState>
  );
}

export default MyApp;
