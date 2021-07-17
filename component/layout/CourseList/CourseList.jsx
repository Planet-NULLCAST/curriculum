import CourseItem from "../CourseItem/CourseItem";

export default function CourseList({ courses }) {
  const contents = [
    {
      image: "/images/js.svg",
      alt: "javascript",
      imageWidth: 190,
      imageHeight: 190,
      title: "Learn JavaScript",
      url: "/curriculum/javascript",
      description:
        "Learn JavaScript and Javascript arrays to build interactive websites and pages that adapt to every device.  This curriculum can help designers to upgrade their careers and starting point for front-end engineers.",
      linktext: "Learn more"
    },
    {
      image: "/images/html5.svg",
      alt: "HTML5",
      imageWidth: 143,
      imageHeight: 199,
      title: "Learn HTML",
      url: "/",
      description:
        "HTML Tutorial - HTML stands for HyperText Markup Language, which is the most widely used language on the Web to develop web pages. HTML was created by Berners-Lee in late 1991.",
      linktext: ""
    },
    {
      image: "/images/css3.svg",
      alt: "CSS3",
      imageWidth: 139,
      imageHeight: 196,
      title: "Learn CSS",
      url: "/",
      description:
        "In this CSS curriculum, you’ll set up file structures, beautify text and colors using CSS selectors to create the layouts and webpages.",
      linktext: ""
    }
  ];
  return (
    <section className="pb-10 lg:pb-20" style={{ scrollBehavior: "smooth" }}>
      <div className="container">
        <div
          id="courses"
          className="md:grid gap-3 lg:gap-8 grid-cols-3 pb-10 lg:pb-20"
        >
          {contents.map((content) => (
            <CourseItem key={content.alt} content={content} />
          ))}
        </div>
      </div>
    </section>
  );
}
