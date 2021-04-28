import React, { useContext } from "react";
import UserContext from "../../context/user/userContext";

export default function Runbutton({ editorVal }) {
	const globalState = useContext(UserContext);
	const testCase = globalState.test;
	// console.log(testCase);

	const clickHandle = () => {
		let i = 0;
		// for (let i = 0; i < editorVal.length; i++) {
		//   editorVal[i] = editorVal[i].replace(/\s+/g, "");
		//   console.log(editorVal[i]);
		//   editorVal[i] = editorVal[i].replace(/"+/g, "'");
		//   console.log(editorVal[i]);
		//   if (editorVal[i] === "{") {
		//     editorVal[i - 1] = editorVal[i - 1] + "{";
		//     editorVal.splice(i, 1);
		//     console.log(i);
		//     continue;
		//   }
		//   console.log(editorVal[i]);
		//   if (i <= testCase.length) {
		//     if (testCase[i].case.includes(editorVal[i])) {
		//       testCase[i].isCorrect = true;
		//     } else {
		//       testCase[i].isCorrect = false;
		//     }
		//   }
		// }
		while (i < editorVal.length) {
			// console.log(i);
			editorVal[i] = editorVal[i].replace(/\s+/g, "");
			// console.log(editorVal[i]);

			editorVal[i] = editorVal[i].replace(/"+/g, "'");
			// console.log(editorVal[i]);

			if (editorVal[i] === "{") {
				editorVal[i - 1] = editorVal[i - 1] + "{";
				editorVal.splice(i, 1);
				// console.log(i);
				continue;
			}
			// console.log(editorVal[i]);
			if (i < testCase.length) {
				if (testCase[i].case.includes(editorVal[i])) {
					testCase[i].isCorrect = true;
				} else {
					testCase[i].isCorrect = false;
				}
			}
			i = i + 1;
		}
		// console.log(testCase);
		globalState.setTest(testCase);
	};
	return (
		<div className="absolute top-3/4">
			<button
				className="bg-green-600  text-white font-medium py-1 px-3 ml-2 mt-20 rounded-sm"
				onClick={clickHandle}
			>
				Run
			</button>
		</div>
	);
}
