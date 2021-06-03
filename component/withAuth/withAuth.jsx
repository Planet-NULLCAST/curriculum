import Link from "next/link";
import { useRouter } from "next/router";

const withAuth = (PassedComponent) => {
  return () => {
    // useEffect(() => {});
    if (typeof window !== "undefined") {
      const userSession = JSON.parse(sessionStorage.getItem("userNullcast"));
      // console.log(userSession);

      if (!userSession) {
        const Router = useRouter();
        Router.push("/login");
        // return null;
      }

      return <PassedComponent />;
    }
    return null;
  };
};

export default withAuth;
