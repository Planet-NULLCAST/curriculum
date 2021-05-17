import React from "react";
import Profilestyles from "../../styles/Profile.module.css";

export default function Trails() {
	const trailItems = [
		{
			trailName: "Contributor",
			points: "1500",
			title: "Mega Expert",
			rank: "145",
			total: "37,222"
		},
		{
			trailName: "Competitor",
			points: "0",
			title: "Unranked",
			rank: "145",
			total: "37,222"
		},
		{
			trailName: "Learner",
			points: "1500",
			title: "Mega Expert",
			rank: "145",
			total: "37,222"
		}
	];
	return (
		<div className="flex flex-row justify-evenly w-2/3 text-gray-700">
			{trailItems.map((trail) => (
				<div
					className={`w-1/3 ml-3 p-4 ${
						trail.trailName === "Contributor" && Profilestyles?.bg_green_110
					} ${trail.trailName === "Competitor" && Profilestyles?.bg_blue_110} ${
						trail.trailName === "Learner" && Profilestyles?.bg_cyan_110
					}`}
				>
					<h3 className="font-semibold text-gray-900 mb-2">
						{trail.trailName}
					</h3>
					<div className="flex flex-row mt-8 mb-1">
						<img
							className="mr-2"
							src="/images/smallduck.svg"
							alt="small duck"
						/>
						<h3 className="font-semibold text-lg">{trail.points}</h3>
					</div>

					<h2 className="text-red-500 font-semibold">{trail.title}</h2>
					<h5 className="text-sm">Current Rank</h5>
					<div>
						<span className="text-gray-900 font-semibold text-xl">
							{trail.rank}
						</span>
						<span className="text-sm"> of {trail.total}</span>
					</div>
				</div>
			))}
		</div>
	);
}
