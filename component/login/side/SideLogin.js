// import LoginSide from "../images/svg/login_side.svg";
// import LoginSide from "../images/png/login_side.png";
import Loginstyles from "../../../styles/Login.module.css";
import Link from "next/link";
export default function Login() {
  return (
    <div
      className={`w-1/2 h-full hidden lg:flex flex-col items-center justify-center p-20 text-center fixed left-0 top-0 h-screen ${Loginstyles.bg_yellow_710}`}
    >
      <img
        src="/images/login_duck.svg"
        alt="login_side"
        className="w-6/12"
      ></img>
      <h1
        className={`text-5xl uppercase text-white font-black mt-4 GrotesqueFamily ${Loginstyles.text_green_710}`}
      >
        Planet Nullcast
      </h1>
      <p className={`text-lg mt-3 ${Loginstyles.text_green_710}`}>
        A Place where code-crazy devs chill!
      </p>
    </div>
  );
}
