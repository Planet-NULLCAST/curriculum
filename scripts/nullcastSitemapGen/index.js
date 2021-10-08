import Prisma from '@prisma/client'
const {
  PrismaClient
} = Prisma

const prisma = new PrismaClient(); // setting up mongodb cred in prisma use the ./prisma/schema.prisma

import fs from 'fs';
import prettier from 'prettier';
const path = import('path');

import courses from "../../courses/courses.mjs"; // used .mjs to avoid type in package.json

async function getAllUserNames() { //get all user profile names
  const usernames = await prisma.users.findMany({
    select: {
      username: true
    }
  });
  return usernames;
}

async function getAllPosts() { //get all post list
  const posts = await prisma.posts.findMany({
    where: {
      status: "published"
    },
    select: {
      canonicalUrl: true
    }
  });
  return posts;
}

async function main() {
  const mainSitemap = []; // this array is used for the root sitemap.
  const dirname = '../../'; // The project directory.
  const APP_URL = process.env.APP_URL || 'https://nullcast.dev/'; // configure the app url.
  const formatted = sitemap => prettier.format(sitemap, {
    parser: "html"
  });

  const getDate = new Date().toISOString();

  const AllUserNames = await getAllUserNames();
  const AllPosts = await getAllPosts();


  /* sitemap-user-profiles-[number].xml section*/
  const siteMapUserNameData = AllUserNames
    .map(username => {
      return `
    <url>
      <loc>${APP_URL}u/${username.username}</loc>
      <lastmod>${getDate}</lastmod>
    </url>`;
    }); // Generating user profile urls for sitemap if anything wrong in user profile urls please look it this.

  for (let i = 0; i < siteMapUserNameData.length; i += 1000) { // This is where the main sitemap for userprofile is created and spilt into 1000 entry for each.
    let generatedSitemapSlice1 = '';
    let sitemapSlice = '';
    if (i + 1000 > siteMapUserNameData.length) {
      console.log(siteMapUserNameData.slice(i, siteMapUserNameData.length).length)
      sitemapSlice = `${siteMapUserNameData.slice(i, siteMapUserNameData.length).join("")}`;
      generatedSitemapSlice1 = `<?xml version="1.0" encoding="UTF-8"?>
                                <urlset
                                xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
                                >
                                ${sitemapSlice}
                                </urlset>`;
    } else {
      console.log(siteMapUserNameData.slice(i, i + 1000).length)
      sitemapSlice = `${siteMapUserNameData.slice(i, i+1000).join("")}`;
      generatedSitemapSlice1 = `<?xml version="1.0" encoding="UTF-8"?>
                                <urlset
                                xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
                                >
                                ${sitemapSlice}
                                </urlset>`;
    }
    const formattedSitemap2 = formatted(generatedSitemapSlice1);
    fs.writeFileSync(`${dirname}/public/sitemap-user-profiles-${(i/1000)+1}.xml`, formattedSitemap2, "utf8"); // Configure the user profile sitemap here.
    mainSitemap.push(`${APP_URL}sitemap-user-profiles-${(i/1000)+1}.xml`); // Pushing the created sitemap to main sitemap entry.
  }

  /* sitemap-posts-[number].xml section */
  const siteMapPostsData = AllPosts
    .map(post => {
      return `
      <url>
        <loc>${post.canonicalUrl}</loc>
        <lastmod>${getDate}</lastmod>
      </url>`;
    }); // Generating Posts urls for sitemap if anything wrong in user Pots Urls please look it this.

  for (let i = 0; i < siteMapPostsData.length; i += 1000) {
    let generatedSitemapSlice1 = '';
    let sitemapSlice = '';
    if (i + 1000 > siteMapPostsData.length) {
      console.log(siteMapPostsData.slice(i, siteMapPostsData.length).length)
      sitemapSlice = `${siteMapPostsData.slice(i, siteMapPostsData.length).join("")}`;
      generatedSitemapSlice1 = `<?xml version="1.0" encoding="UTF-8"?>
                                  <urlset
                                  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
                                  >
                                  ${sitemapSlice}
                                  </urlset>`;
    } else {
      console.log(siteMapPostsData.slice(i, i + 1000).length)
      sitemapSlice = `${siteMapPostsData.slice(i, i+1000).join("")}`;
      generatedSitemapSlice1 = `<?xml version="1.0" encoding="UTF-8"?>
                                  <urlset
                                  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
                                  >
                                  ${sitemapSlice}
                                  </urlset>`;
    }
    const formattedSitemap2 = formatted(generatedSitemapSlice1);
    fs.writeFileSync(`${dirname}/public/sitemap-posts-${(i/1000)+1}.xml`, formattedSitemap2, "utf8"); // Configure the posts sitemap here.
    mainSitemap.push(`${APP_URL}sitemap-posts-${(i/1000)+1}.xml`); // Pushing the created sitemap to main sitemap entry.
  }

  //The courses section.
  let course = [];

  for (let i = 0; i < courses.length; i++) {
    // This is where sitemap-[coursename].xml is created.
    let chapters = [];
    for (let j = 0; j < courses[i].chapters.length; j++) {
      chapters.push(`${APP_URL}curriculum/${courses[i].courseUrl}/${courses[i].chapters[j].chapterUrl}`)
    }
    const siteMapCoursesData = chapters
      .map(cou => {
        return `
    <url>
      <loc>${cou}</loc>
      <lastmod>${getDate}</lastmod>
    </url>`;
      });
    let generatedSitemapSlice = `<?xml version="1.0" encoding="UTF-8"?>
                                  <urlset
                                  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
                                  >
                                  ${siteMapCoursesData}
                                  </urlset>`;
    const formattedSitemap = formatted(generatedSitemapSlice);
    fs.writeFileSync(`${dirname}/public/sitemap-${courses[i].courseUrl}.xml`, formattedSitemap, "utf8");
    course.push(courses[i].courseUrl); // Pushing the created sitemap into sitemap-courses.xml 
  }

  // sitemap-courses.xml Section.
  const siteMapCoursesList = course
    .map(couLis => {
      return `
    <url>
      <loc>${APP_URL}sitemap-${couLis}.xml</loc>
      <lastmod>${getDate}</lastmod>
    </url>`;
    });
  let generatedSitemapCourseList = `<?xml version="1.0" encoding="UTF-8"?>
                                  <urlset
                                  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
                                  >
                                  ${siteMapCoursesList}
                                  </urlset>`;
  const formattedSitemap = formatted(generatedSitemapCourseList);
  fs.writeFileSync(`${dirname}/public/sitemap-courses.xml`, formattedSitemap, "utf8");
  mainSitemap.push(`${APP_URL}sitemap-courses.xml`); // Pushing the created sitemap to main sitemap entry.

  let pages = ['blog', 'login', 'signup']; // Please add common pages here.

  const commonPageSitemap = `
  ${pages
      .map(path => {
        return `
    <url>
      <loc>${APP_URL}${path}</loc>
      <lastmod>${getDate}</lastmod>
    </url>`;
      })
      .join("")}
  `;


  const generatedCommonPageSitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >
  ${commonPageSitemap}
  </urlset>
  `;

  const formattedCommonPageSitemap = formatted(generatedCommonPageSitemap);

  fs.writeFileSync(`${dirname}/public/sitemap-common.xml`, formattedCommonPageSitemap, "utf8"); // Configure the common sitemap directory here.
  mainSitemap.push(`${APP_URL}sitemap-common.xml`); // Pushing the created sitemap to main sitemap entry.


  /* Root Sitemap(sitemap.xml) section*/
  const mainSitemapData = `
  ${mainSitemap
      .map(path => {
        return `
    <url>
      <loc>${path}</loc>
      <lastmod>${getDate}</lastmod>
    </url>`;
      })
      .join("")}
  `;


  const generatedMainSitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >
  ${mainSitemapData}
  </urlset>
  `;

  const formattedMainSitemap = formatted(generatedMainSitemap);
  fs.writeFileSync(`${dirname}/public/sitemap.xml`, formattedMainSitemap, "utf8"); // Configure root sitemap directory here.
};

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })