import Head from "next/head";
import Link from "next/link";
import { getAllChapterIds, getChapterData } from "../../../lib/jslist";
import { getCourse } from "../../../lib/getCourse";
import Editor from "../../../component/editor/Editor";
import Output from "../../../component/layout/Output/Output";
import Navbar from "../../../component/layout/NavBar/NavBar";
import Sidebar from "../../../component/layout/SideBar/SideBar";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { useEffect, useContext, useState } from "react";
import UserState from "../../../context/user/userContext";
const axios = require("axios");

hljs.registerLanguage("javascript", javascript);

import {
	ArrowCircleLeftIcon,
	ArrowCircleRightIcon
} from "@heroicons/react/solid";

export async function getStaticPaths() {
	const paths = await getAllChapterIds();
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const { courseName, chapterName } = params;
	const chapterData = await getChapterData(params);
	return {
		props: {
			chapterData,
			courseName,
			chapterName
		}
	};
}
export default function Chapter({ chapterData, courseName }) {
	const [toggle, setToggle] = useState(false);
	function handleToggle() {
		setToggle(!toggle);
	}
	// console.log(courseName, "from chapter component");
	const { testCase } = chapterData;
	const userState = useContext(UserState);
	const [progress, setProgress] = useState(0);
	const [courseList, seCourseList] = useState([]);

	useEffect(() => {
		hljs.highlightAll();
		seCourseList(JSON.parse(window.localStorage.getItem("courses")));
	}, []);
	useEffect(() => {
		userState.setTest(testCase);
		userState.setRun(false);
		// console.log(progress);
	}, [testCase]);
	useEffect(() => {
		let cook = document.cookie;
		cook = cook.split("=");
		cook[0] !== "" ? (cook = JSON.parse(cook[1]).accessToken) : (cook = false);
		if (cook) {
			axios({
				method: "post",
				mode: "no-cors",
				url: `http://localhost:8080/api/progress/javascript`,
				headers: {
					"x-access-token": `${cook}`
				}
			})
				.then((response) => {
					console.log(response.data);
					setProgress(
						(response.data.length / courseList[0].chapters.length) * 100
					);
				})
				.catch((err) => {
					console.log(err.message);
				});
		} else {
			// console.log("Not logged in");
		}
	}, [userState]);

	let currentCourse = getCourse(courseName);

	return (
		<div>
			<Head>
				<title>{chapterData.subheading} | Curriculum</title>
			</Head>
			<Navbar
				onToggle={handleToggle}
				title={chapterData.title}
				showMenuIcon={true}
				showTitle={true}
			/>
			<Sidebar onToggle={handleToggle} toggle={toggle} course={currentCourse} />
			<div className="grid grid-cols-3" style={{ height: "calc(100vh - 104px)" }}>
				<div className="bg-gray-50 px-4 py-4 overflow-auto text-gray-700">
					<div className="py-3">
						<a
							href="#"
							className="text-sm py-1 px-2 uppercase rounded-full border border-gray-500 tracking-wider font-medium"
						>
							Learn
						</a>
					</div>
					<div className="font-bold my-3 uppercase">
						<h1 className="text-2xl">{chapterData.title}</h1>
					</div>
					<div className="text-xl font-semibold mt-5 mb-3">
						{chapterData.subheading}
					</div>
					<div
						className="codeClass font-light js text-gray-900"
						dangerouslySetInnerHTML={{ __html: chapterData.contentHtml }}
					/>
				</div>
				<div>
					<Editor initialValue={chapterData} />
				</div>
				<div>
					<Output />
				</div>
			</div>
			<div className="flex flex-row space-x-52 bg-gray-900 items-center py-6 sticky bottom-0 h-12">
				<div
					className="rounded-md bg-gray-600"
					style={{ width: "382px", marginLeft: "10px" }}
				>
					<div
						className="mt-0 bg-purple-500 py-1 rounded-full"
						style={{ width: `${progress}%` }}
					></div>
				</div>
				<div className="flex flex-row" style={{ marginLeft: "142px" }}>
					{chapterData.prev ? (
						<Link href={`/curriculum/${courseName}/${chapterData.prev}`}>
							<a className="text-white" style={{ marginRight: "93px" }}>
								<ArrowCircleLeftIcon className="h-10 w-10 inline-block text-yellow-500" />
								Previous
							</a>
						</Link>
					) : (
						""
					)}
					{chapterData.next ? (
						<Link href={`/curriculum/${courseName}/${chapterData.next}`}>
							<a className="text-white">
								Next
								<ArrowCircleRightIcon className="h-10 w-10 inline-block text-yellow-500" />
							</a>
						</Link>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
}
