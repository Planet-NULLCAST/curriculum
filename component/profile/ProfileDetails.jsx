import React from "react";
import Trails from "../profile/Trails";
import Profilestyles from "../../styles/Profile.module.css";

export default function ProfileDetails() {
	return (
		<div className="bg-white shadow-sm rounded h-64 px-4 py-6 flex flex-row">
			<div className={`rounded w-80 p-4 h-full grid grid-cols-3 grid-rows-3 text-gray-700 relative ${Profilestyles?.bg_red_110}`}>
				<img
					className="absolute top-4 right-4"
					src="/images/profileedit.svg"
					alt="edit profile"
				/>
				{/* picture */}
				<div className="relative row-span-2">
					<div className="rounded-full h-24 w-24 bg-red-600"></div>
					<img
						className="absolute bottom-3 left-14"
						src="/images/duckbadge.svg"
						alt="duck badge"
					/>
				</div>

				{/* details */}
				<div className="px-4 col-span-2 row-span-2">
					<h3 className="mb-1 font-semibold text-lg text-gray-900">
						DataTurks
					</h3>
					<h3 className="my-1 text-sm font-medium">@dataturks</h3>
					<div className="flex flex-row my-1">
						<img
							className="mr-2"
							src="/images/smallduck.svg"
							alt="small duck"
						/>
						<h3 className="font-semibold text-lg">22000</h3>
					</div>
				</div>
				{/* description */}
				<div className="col-span-3 text-sm">
					ML data annotations made super easy. Just upload data, invite your
					team and build training/evaluation dataset in hours.
				</div>
			</div>
			<Trails />
		</div>
	);
}
