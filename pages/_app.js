import UserState from "../context/user/UserState";
import "../styles/globals.scss";
import "../styles/slick.scss";
import "../styles/slick-theme.scss";
import "highlight.js/styles/default.css";
import "../component/Editorjs/tools/embedTool/index.css"
import "../styles/Home.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <UserState>
      <Component {...pageProps} />
    </UserState>
  );
}

export default MyApp;
