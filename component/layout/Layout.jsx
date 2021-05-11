import { useState } from "react";
import NavBar from "../layout/NavBar/NavBar.jsx";
import SideBar from "./SideBar/SideBar.jsx";

export default function Layout({ children }) {
	const [toggle, setToggle] = useState(false);
	function handleToggle() {
		setToggle(!toggle);
	}
	return (
		<div>
			<NavBar onToggle={handleToggle} showMenuIcon={true} showTitle={true} />
			<SideBar onToggle={handleToggle} toggle={toggle} />
			{children}
		</div>
	);
}
