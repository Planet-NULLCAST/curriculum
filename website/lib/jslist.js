import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import highlight from "remark-highlight.js";

//TO DO: get folder names
const courseDirectory = path.join(process.cwd(), "courses");

export async function getAllChapterIds() {
	const fileNames = fs.readdirSync(courseDirectory);

	return fileNames.map((fileName) => {
		return {
			params: {
				chapterName: fileName.replace(/\.md$/, "")
			}
		};
	});
}

export async function getChapterData(chapterName) {
	const fullPath = path.join(chapterDirectory, `${chapterName}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	const matterResult = matter(fileContents);

	const processedContent = await remark()
		.use(highlight)
		.use(html)
		.process(matterResult.content);

	const contentHtml = processedContent.toString();
	return {
		courseName: "javascript",
		chapterName,
		contentHtml,
		...matterResult.data
	};
}
// get course ids and course chapter list

export async function getAllCourseIds() {
	const folderNames = fs.readdirSync(courseDirectory);
	let index = folderNames.indexOf("meta.js");
	folderNames.splice(index, 1);

	// console.log(folderNames);
	return folderNames.map((folderName) => {
		return {
			params: {
				courseName: folderName
			}
		};
	});
}

export async function getCourseData(courseName) {
	const fullPath = path.join(courseDirectory, courseName);
	let chapterNames = fs.readdirSync(fullPath);

	chapterNames = chapterNames.map((chapterName) => {
		return chapterName.replace(/\.md$/, "");
	});
	console.log({ chapterNames });

	return {
		chapterNames: chapterNames
	};
}
