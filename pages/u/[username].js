import React from "react";
import Navbar from "../../component/profile/Navbar";
import ProfileDetails from "../../component/profile/ProfileDetails";
import Head from "next/head";
import Activity from "../../component/profile/Activity";

export default function Username() {
	return (
		<div className="bg-gray-200 py-4 px-16">
			<Head>
				<title>Profile | Nullcast</title>
			</Head>
			<Navbar />
			<div className="flex flex-row">
				<div className="flex flex-col w-3/4">
					<ProfileDetails />
					<Activity />
					{/* <div className="bg-white shadow-sm rounded p-4 my-4 h-80">dd</div> */}
					<div className="bg-white shadow-sm rounded p-4 mb-4 h-80">dd</div>
				</div>
				<div className="bg-white shadow-sm rounded h-auto w-1/4 ml-4 mb-4">
					side
				</div>
			</div>
		</div>
	);
}
