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
        "Once the foundation is set, it’s time to step up your game and create the interactive side of your website. Kick things off with Javascript to learn the basic fundamentals of programming and achieve advanced JS mastery.",
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
        "A step-by-step guide to understanding the how-to's of HTML rather than hovering around the why's. Learn the practical skills needed to master the basics of HTML and start building your website.",
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
        "Add life, colours and style to the contents of the website you created by practising alongside the best way to learn CSS. This guide is suitable for anyone eager to pave a path towards maintaining complex web pages with ease.",
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
