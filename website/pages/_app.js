import { UserContext } from "../context/user/userContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<UserContext>
			<Component {...pageProps} />
		</UserContext>
	);
}

export default MyApp;
