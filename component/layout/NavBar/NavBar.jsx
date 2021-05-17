import { useEffect, useState } from "react";
import Profile from "../../Profile";

export default function NavBar({ onToggle, title, showMenuIcon, showTitle }) {
	// console.log(title);
	const [cookies, setCookies] = useState("");
	useEffect(() => {
		let cook = document.cookie;
		cook = cook.split("=");
		cook[0] !== "" && setCookies(JSON.parse(cook[1]));
	}, []);

	function handleClick(e) {
		onToggle();
	}
	return (
    <nav className="sticky top-0 bg-white z-15 shadow-md h-14 flex flex-row items-center justify-between">
      <div className="flex p-2 items-center w-full justify-between">
        <div className="flex flex-row items-center">
          {showMenuIcon && (
            <img
              src="/images/hamburger.svg"
              alt="hamburger menu"
              onClick={handleClick}
              className="h-6 w-6 text-gray-900 inline-block cursor-pointer ml-3"
            />
          )}
          {showTitle && (
            <span className="pl-3 uppercase tracking-wider">{title}</span>
          )}
        </div>
        <div>
          {cookies ? (
            <Profile
              fName={cookies.fName}
              lName={cookies.lName}
              userName={cookies.username}
            />
          ) : (
            <a
              className="py-3 px-11 bg-gray-800 text-white rounded-full"
              href="/login"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
