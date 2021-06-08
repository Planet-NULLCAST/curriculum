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
        "Our online program is an amazing way for children to learn coding from the comfort of your home.",
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
        "Our online program is an amazing way for children to learn coding from the comfort of your home.",
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
        "Our online program is an amazing way for children to learn coding from the comfort of your home.",
      linktext: ""
    }
  ];
  return (
    <section className="pb-10 lg:pb-20" style={{ scrollBehavior: "smooth" }}>
      <div className="container">
        <div id="courses" className="md:grid gap-3 lg:gap-8 grid-cols-3 pb-10 pb-4 lg:pb-20">
          {contents.map((content) => (
            <CourseItem key={content.alt} content={content} />
          ))}
        </div>
      </div>
    </section>
  );
}
