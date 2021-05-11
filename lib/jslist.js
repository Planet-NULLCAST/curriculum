import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import highlight from "remark-highlight.js";

//TO DO: get folder names
const courseDirectory = path.join(process.cwd(), "courses");

export async function getAllChapterIds() {
  const folderNames = fs.readdirSync(courseDirectory);
  let index = folderNames.indexOf("meta.js");
  folderNames.splice(index, 1);

  const arayPath = [];

  folderNames.forEach((elem) => {
    let chapterDirectory = path.join(courseDirectory, elem);
    const fileNames = fs.readdirSync(chapterDirectory);

    fileNames.forEach((files) => {
      arayPath.push({
        courseName: elem,
        chapterName: files.replace(/\.md$/, "")
      });
    });
  });
  return arayPath.map((fileName) => {
    return {
      params: fileName
    };
  });
}

export async function getChapterData({ courseName, chapterName }) {
  const courseDir = path.join(courseDirectory, courseName);
  const fullPath = path.join(courseDir, `${chapterName}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(highlight)
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  return {
    courseName: courseName,
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
