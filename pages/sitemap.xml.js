import fs from "fs";
import prettier from "prettier";
// import initServices from '../initialize-services';
import UserService from "../services/UserService";
import PostService from "../services/PostService";
import EventService from "../services/EventService";
import { courses } from "../courses/meta";


// eslint-disable-next-line @typescript-eslint/no-var-requires
// require('dotenv').config();

const Sitemap = () => { };

export const getServerSideProps = async ({ res }) => {
  const siteMap = await generateSitemap();
  res.setHeader("Content-Type", "text/xml");
  res.write(siteMap);
  res.end();

  return {
    props: {}
  };
};

export default Sitemap;

//Function to fetch all users
async function getAllUserNames() {
  try {
    const { data } = await UserService.getAllUsers();
    return data;
  } catch (err) {
    console.log(err);
  }
}

//Function to fetch all posts
async function getAllPosts() {
  try {
    const { data } = await PostService.getAllPosts();
    return data;
  } catch (err) {
    console.log(err);
  }
}

//Function to fetch all events
async function getAllEvents() {
  try {
    const { data } = await EventService.getAllEventsSlug();
    return data;
  } catch (err) {
    console.log(err);
  }
}


//Function to fetch all events
async function getAllCourses() {
return courses
}



// //Function to fetch all courses and their respective chapters from db
// async function getAllCoursesAndChapters() {
//   try {
//     const postgresClient: Client = (globalThis as any).postgresClient as Client;

//     const getCoursesAndChaptersQuery: QueryConfig = {
//       text: `SELECT courses.id, courses.name, courses.slug,
//               JSON_AGG(JSON_BUILD_OBJECT('name', cc.name, 'slug', cc.slug)) as chapters
//               from ${COURSE_TABLE} AS courses
//               LEFT JOIN ${CHAPTER_TABLE} AS cc ON cc.course_id = courses.id
//               GROUP BY courses.id;`
//     };
//     const courses = await postgresClient.query(getCoursesAndChaptersQuery);
//     return courses.rows;
//   } catch (err) {
//     throw err;
//   }
// }

//Main function for sitemap generation
export async function generateSitemap(courses) {
  // await initServices(); //To connect to postgres
  try {
    const mainSitemap = []; // This array is used for the root sitemap.
    const dirname = "."; // The project directory.
    const CLIENT_URL = process.env.CLIENT_URL || "https://nullcast.dev/"; // Configure the app url.
    const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });
    const getDate = new Date().toISOString();

    const AllUserNames = await getAllUserNames();
    const AllPosts = await getAllPosts();
    const AllEvents = await getAllEvents();
    const courses = await getAllCourses();

    /* sitemap-user-profiles-[number].xml section*/
    const siteMapUserNameData = AllUserNames.map(
      (user) => `
      <url>
        // <loc>${CLIENT_URL}/u/${user.user_name}</loc>
        <lastmod>${getDate}</lastmod>
      </url>`
    ); // Generating user profile urls for sitemap if anything wrong in user profile urls please look at this.

    for (let i = 0; i < siteMapUserNameData.length; i += 1000) {
      // This is where the main sitemap for userprofile is created and split into 1000 entry for each.
      let generatedSitemapSlice1 = "";
      let sitemapSlice = "";
      if (i + 1000 > siteMapUserNameData.length) {
        console.log(
          siteMapUserNameData.slice(i, siteMapUserNameData.length).length
        );
        sitemapSlice = `${siteMapUserNameData
          .slice(i, siteMapUserNameData.length)
          .join("")}`;
        generatedSitemapSlice1 = `<?xml version="1.0" encoding="UTF-8"?>
                                  <urlset
                                  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
                                  >
                                  ${sitemapSlice}
                                  </urlset>`;
      } else {
        console.log(siteMapUserNameData.slice(i, i + 1000).length);
        sitemapSlice = `${siteMapUserNameData.slice(i, i + 1000).join("")}`;
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
      fs.writeFileSync(
        `${dirname}/public/sitemap-user-profiles-${i / 1000 + 1}.xml`,
        formattedSitemap2,
        "utf8"
      ); // Configure the user profile sitemap here.
      mainSitemap.push(
        `${CLIENT_URL}/sitemap-user-profiles-${i / 1000 + 1}.xml`
      ); // Pushing the created sitemap to main sitemap entry.
    }

    /* sitemap-posts-[number].xml section */
    const siteMapPostsData = AllPosts.map(
      (post) => `
        <url>
          <loc>${CLIENT_URL}/${post.slug}</loc>
          <lastmod>${getDate}</lastmod>
        </url>`
    ); // Generating Posts urls for sitemap if anything wrong in user Pots Urls please look at this.

    for (let i = 0; i < siteMapPostsData.length; i += 1000) {
      let generatedSitemapSlice1 = "";
      let sitemapSlice = "";
      if (i + 1000 > siteMapPostsData.length) {
        console.log(siteMapPostsData.slice(i, siteMapPostsData.length).length);
        sitemapSlice = `${siteMapPostsData
          .slice(i, siteMapPostsData.length)
          .join("")}`;
        generatedSitemapSlice1 = `<?xml version="1.0" encoding="UTF-8"?>
                                    <urlset
                                    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
                                    >
                                    ${sitemapSlice}
                                    </urlset>`;
      } else {
        console.log(siteMapPostsData.slice(i, i + 1000).length);
        sitemapSlice = `${siteMapPostsData.slice(i, i + 1000).join("")}`;
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
      fs.writeFileSync(
        `${dirname}/public/sitemap-posts-${i / 1000 + 1}.xml`,
        formattedSitemap2,
        "utf8"
      ); // Configure the posts sitemap here.
      mainSitemap.push(`${CLIENT_URL}/sitemap-posts-${i / 1000 + 1}.xml`); // Pushing the created sitemap to main sitemap entry.
    }
    /* sitemap-events-[number].xml section */
    const siteMapEventsData = AllEvents.map(
      (event) => `
        <url>
          <loc>${CLIENT_URL}/e/${event.slug}</loc>
          <lastmod>${getDate}</lastmod>
        </url>`
    ); // Generating Events urls for sitemap if anything wrong in user Events Urls please look at this.

    for (let i = 0; i < siteMapEventsData.length; i += 1000) {
      let generatedSitemapSlice1 = "";
      let sitemapSlice = "";
      if (i + 1000 > siteMapEventsData.length) {
        console.log(
          siteMapEventsData.slice(i, siteMapEventsData.length).length
        );
        sitemapSlice = `${siteMapEventsData
          .slice(i, siteMapEventsData.length)
          .join("")}`;
        generatedSitemapSlice1 = `<?xml version="1.0" encoding="UTF-8"?>
                                    <urlset
                                    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
                                    >
                                    ${sitemapSlice}
                                    </urlset>`;
      } else {
        console.log(siteMapEventsData.slice(i, i + 1000).length);
        sitemapSlice = `${siteMapEventsData.slice(i, i + 1000).join("")}`;
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
      fs.writeFileSync(
        `${dirname}/public/sitemap-events-${i / 1000 + 1}.xml`,
        formattedSitemap2,
        "utf8"
      ); // Configure the events sitemap here.
      mainSitemap.push(`${CLIENT_URL}/sitemap-events-${i / 1000 + 1}.xml`); // Pushing the created sitemap to main sitemap entry.
    }

    // The courses section.
    const course = [];
    console.log(course);

    for (let i = 0; i < courses.length; i++) {
      // This is where sitemap-[coursename].xml is created.
      let chapters = [];
      for (let j = 0; j < courses[i].chapters.length; j++) {
        chapters.push(`${CLIENT_URL}/curriculum/${courses[i].courseUrl}/${courses[i].chapters[j].chapterUrl}`)
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
        <loc>${CLIENT_URL}/sitemap-${couLis}.xml</loc>
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
    mainSitemap.push(`${CLIENT_URL}/sitemap-courses.xml`); // Pushing the created sitemap to main sitemap entry.
    const pages = ["blog", "login", "signup", "events", "whats-new"]; // Please add common pages here.

    const commonPageSitemap = `
    ${pages
        .map(
          (path) => `
      <url>
        <loc>${CLIENT_URL}/${path}</loc>
        <lastmod>${getDate}</lastmod>
      </url>`
        )
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

    fs.writeFileSync(
      `${dirname}/public/sitemap-common.xml`,
      formattedCommonPageSitemap,
      "utf8"
    ); // Configure the common sitemap directory here.
    mainSitemap.push(`${CLIENT_URL}/sitemap-common.xml`); // Pushing the created sitemap to main sitemap entry.

    /* Root Sitemap(sitemap.xml) section*/
    const mainSitemapData = `
    ${mainSitemap
        .map(
          (path) => `
      <url>
        <loc>${path}</loc>
        <lastmod>${getDate}</lastmod>
      </url>`
        )
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
    // fs.writeFileSync(`${dirname}/public/sitemap.xml`, formattedMainSitemap, 'utf8'); // Configure root sitemap directory here.
    console.log("sitemap generated");
    return formattedMainSitemap;
  } catch (err) {
    throw err;
  }
}
// generateSitemap();
