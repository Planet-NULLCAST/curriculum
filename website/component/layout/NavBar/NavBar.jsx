import { MenuIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import Profile from "../../Profile";

export default function NavBar({ showMenuIcon, showTitle, onToggle }) {
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
		<nav className="sticky top-0 bg-white z-50 shadow-md h-14 flex flex-row items-center justify-between">
			<div className="flex p-2 items-center w-full justify-between">
				<div>
					{showMenuIcon && (
						<MenuIcon
							onClick={handleClick}
							className="h-6 w-6 text-gray-900 inline-block cursor-pointer"
						/>
					)}
					{showTitle && (
						<span className="pl-3 uppercase">Basic JavaScript</span>
					)}
				</div>
				<div className="flex flex-row justify-center">
					<img src="/images/logo.png" alt="Logo" />
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
