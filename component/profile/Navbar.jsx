import React from "react";

export default function Navbar() {
	return (
		<div className="bg-white h-12 my-7 flex flex-row items-center text-gray-500 rounded shadow-sm">
			<ul className="flex flex-row justify-start items-center font-semibold">
				<li className="m-4">Profile</li>
				<li className="m-4">My Store</li>
				<li className="m-4">Achievements</li>
			</ul>
		</div>
	);
}
