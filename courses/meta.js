import axios from "axios";
import { baseUrl } from "../config/config";
let courses = [
  {
    courseId: 1,
    courseName: "JavaScript",
    courseUrl: "javascript",
    chapters: [
      {
        chapterId: 1,
        chapterUrl: "introduction",
        chapterName: "Introduction"
      },
      {
        chapterId: 2,
        chapterUrl: "hello-world",
        chapterName: "Hello World"
      },
      {
        chapterId: 3,
        chapterUrl: "variables",
        chapterName: "Variables"
      },
      {
        chapterId: 4,
        chapterUrl: "datatypes",
        chapterName: "Datatypes"
      },
      {
        chapterId: 5,
        chapterUrl: "logical-operators",
        chapterName: "Logical Operators"
      },
      {
        chapterId: 6,
        chapterUrl: "if-condition",
        chapterName: "If Condition"
      },
      {
        chapterId: 7,
        chapterUrl: "switch-statement",
        chapterName: "The switch Statement"
      },
      {
        chapterId: 8,
        chapterUrl: "arithmetic-operators",
        chapterName: "Arithmetic Operators"
      },
      {
        chapterId: 9,
        chapterUrl: "comparisons",
        chapterName: "Comparisons"
      },
      {
        chapterId: 10,
        chapterUrl: "objects",
        chapterName: 'Objects'
      },
      {
        chapterId: 11,
        chapterUrl: "prototypes",
        chapterName: "Prototypes"
      },
      {
        chapterId: 12,
        chapterUrl: "function",
        chapterName: "Function"
      },
      {
        chapterId: 13,
        chapterUrl: "type-conversion",
        chapterName: "Type Conversion"
      },
      {
        chapterId: 14,
        chapterUrl: "arrow-functions",
        chapterName: "Arrow Functions"
      },
      {
        chapterId: 15,
        chapterUrl: "asynchronous-behaviour-and-event-loop",
        chapterName: "Asynchronous Behaviour And Event Loop"
      },
      {
        chapterId: 16,
        chapterUrl: "foreach-map-filter",
        chapterName: "Foreach vs Map vs Filter"
      }
    ]
  },
  {
    courseId: 2,
    courseName: "Python",
    courseUrl: "python",
    chapters: [
      {
        chapterId: 1,
        chapterUrl: "introduction",
        chapterName: "Introduction"
      },
      {
        chapterId: 2,
        chapterUrl: "hello-world",
        chapterName: "Hello World"
      },
      {
        chapterId: 3,
        chapterUrl: "datatypes",
        chapterName: "Datatypes"
      },
      {
        chapterId: 4,
        chapterUrl: "if-condition",
        chapterName: "If-Condition"
      }
    ]
  },
  {
    courseId: 3,
    courseName: "UI-mastery",
    courseUrl: "ui-mastery",
    chapters: [
      {
        chapterId: 1,
        chapterUrl: "introduction",
        chapterName: "Introduction"
      },
      {
        chapterId: 2,
        chapterUrl: "html",
        chapterName: "HTML"
      },
      {
        chapterId: 3,
        chapterUrl: "html-accessibility",
        chapterName: "HTML Accessibility"
      },
      {
        chapterId: 4,
        chapterUrl: "css",
        chapterName: "CSS"
      },
      {
        chapterId: 5,
        chapterUrl: "naming-standard-bem",
        chapterName: "Naming Standard-BEM"
      },
      {
        chapterId: 6,
        chapterUrl: "js-basics",
        chapterName: "JS Basics"
      },
      {
        chapterId: 7,
        chapterUrl: "learn-css-flexbox-and-media-queries",
        chapterName: "Learn CSS Flexbox And Media Queries"
      },
      {
        chapterId: 8,
        chapterUrl: "bootstrap-basics",
        chapterName: "Bootstrap Basics"
      },
      {
        chapterId: 9,
        chapterUrl: "sass",
        chapterName: "SASS"
      },
      {
        chapterId: 10,
        chapterUrl: "scss",
        chapterName: "SCSS"
      },
      {
        chapterId: 11,
        chapterUrl: "ui-debug-tools",
        chapterName: "UI Debug Tools"
      },
      {
        chapterId: 12,
        chapterUrl: "optimization",
        chapterName: "Optimization"
      },
      {
        chapterId: 13,
        chapterUrl: "ui-standards",
        chapterName: "UI Standards"
      },
      {
        chapterId: 14,
        chapterUrl: "progressive-web-apps",
        chapterName: "Progressive Web Apps"
      },
      {
        chapterId: 15,
        chapterUrl: "workshop-practise-1",
        chapterName: "Workshop Practise 1"
      },
      {
        chapterId: 16,
        chapterUrl: "workshop-practise-2",
        chapterName: "Workshop Practise 2"
      },
      {
        chapterId: 17,
        chapterUrl: "workshop-practise-3",
        chapterName: "Workshop Practise 3"
      },
      {
        chapterId: 18,
        chapterUrl: "workshop-practise-4",
        chapterName: "Workshop Practise 4"
      },
      {
        chapterId: 19,
        chapterUrl: "workshop-practise-5",
        chapterName: "Workshop Practise 5"
      },
      {
        chapterId: 20,
        chapterUrl: "workshop-practise-6",
        chapterName: "Workshop Practise 6"
      },
      {
        chapterId: 21,
        chapterUrl: "workshop-practise-7",
        chapterName: "Workshop Practise 7"
      },
      {
        chapterId: 22,
        chapterUrl: "workshop-practise-8",
        chapterName: "Workshop Practise 8"
      }
    ]
  }
];

async function addCourses() {
  // console.log("in add courses");
  axios
    .post(`${baseUrl}/api/v1/courses-chapters`, courses)
    .then((res) => console.log("sent courses", res.data))
    .catch((err) => console.log(err));
}
export { courses, addCourses };
