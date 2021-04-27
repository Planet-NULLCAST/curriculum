import Link from "next/link";

export default function SideBar({ onToggle, toggle }) {
  function handleClick(e) {
    onToggle();
  }

  //TODO: Should be made dynamic later
  let titles = [
    {
      id: 1,
      url: "introduction",
      linkTitle: "Introduction",
    },
    {
      id: 2,
      url: "datatypes",
      linkTitle: "Datatypes",
    },
    {
      id: 3,
      url: "interaction",
      linkTitle: "Interaction",
    },
  ];

  return (
    <aside
      className={`transform top-0 ${
        toggle ? "left-0" : "-left-64"
      } w-64 bg-gray-100 fixed h-full overflow-auto ease-in-out transition-all delay-200 duration-500 z-20 translate-x-0`}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        className="h-4 absolute top-20 right-6 cursor-pointer hover:text-purple-700"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352 512"
        onClick={handleClick}
      >
        <path
          fill="#33475b"
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
        ></path>
      </svg>

      <ul className="text-black flex flex-col mt-28 h-80">
        {titles.map((title) => (
          <li
            key={title.id}
            className={`text-center text-gray-700 border-l-8 border-gray-700 hover:border-purple-700 hover:text-purple-700 hover:bg-gray-200 p-4`}
          >
            <Link href={`/javascript/${title.url}`}>
              <a onClick={handleClick}>{title.linkTitle}</a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
