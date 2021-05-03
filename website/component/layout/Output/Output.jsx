import React, { useContext, useEffect } from "react";
import UserContext from "../../../context/user/userContext";

function Output() {
	const userState = useContext(UserContext);
	// console.log(userState);
	let { test, run } = userState;
	// console.log(test);

	return (
		<div
			className="flex flex-col items-center p-2 bg-gray-50 text-gray-700"
			style={{ height: "84.5vh" }}
		>
			<h1 className="text-sm tracking-wider font-medium uppercase py-3">
				Results
			</h1>
			<div className="py-2 px-3">
				{run &&
					test.map(t => (
						<div
							key={t.id}
							className="bg-white border border-gray-200 m-1 shadow-lg flex flex-row items-center"
							style={{ minHeight: "4rem" }}
						>
							{t.isCorrect ? (
								<svg
									aria-hidden="true"
									className="h-6 pl-4"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path
										fill="rgba(16, 185, 129, 1)"
										d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
									></path>
								</svg>
							) : (
								<svg
									aria-hidden="true"
									className="h-6 pl-4"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path
										fill="rgba(209, 213, 219, 1)"
										d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
									></path>
								</svg>
							)}

							<div className="w-3/4 ml-5">{t.hint}</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default Output;
