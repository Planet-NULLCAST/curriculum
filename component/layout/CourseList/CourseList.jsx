import CourseItem from "../CourseItem/CourseItem";

export default function CourseList({ courses }) {
  const contents = [
    {
      image: "/images/css3.svg",
      alt: "ui-mastery",
      imageWidth: 139,
      imageHeight: 196,
      title: "UI Mastery",
      url: "/curriculum/ui-mastery",
      description:
        "Kick things off with Javascript to learn the basic fundamentals of programming and achieve JS mastery. Add life, colours and style to the contents of the website you created by practising alongside the best way to learn CSS. This guide is suitable for anyone eager to pave a path towards maintaining complex web pages with ease.",
      linktext: "Learn more"
    },
    {
      image: "/images/js.svg",
      alt: "javascript",
      imageWidth: 190,
      imageHeight: 190,
      title: "Learn JavaScript",
      url: "/curriculum/javascript",
      description:
        "Once the foundation is set, it’s time to step up your game and create the interactive side of your website. Kick things off with Javascript to learn the basic fundamentals of programming and achieve JS mastery.",
      linktext: "Learn more"
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
