import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import highlight from "remark-highlight.js";

const postsDirectory = path.join(process.cwd(), "courses/javascript");

// export function getSortedPostsData() {
//     const fileNames = fs.readdirSync(postsDirectory);
//     const allPostsData = fileNames.map(fileName => {
//         const id = fileName.replace(/\.md$/, '');

//         const fullPath = path.join(postsDirectory, fileName);
//         const fileContents = fs.readFileSync(fullPath, 'utf8');

//         const matterResult = matter(fileContents);

//         return {
//             id,
//             ...matterResult.data
//         }
//     })

//     return allPostsData.sort((a, b) => {
//         if (a.data < b.data) {
//             return 1;
//         } else {
//             return -1;
//         }
//     })
// }

export async function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory);

	return fileNames.map(fileName => {
		return {
			params: {
				id: fileName.replace(/\.md$/, "")
			}
		};
	});
}

export async function getPostData(id) {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	const matterResult = matter(fileContents);

	const processedContent = await remark()
		.use(highlight)
		.use(html)
		.process(matterResult.content);

	const contentHtml = processedContent.toString();
	return {
		id,
		contentHtml,
		...matterResult.data
	};
}
