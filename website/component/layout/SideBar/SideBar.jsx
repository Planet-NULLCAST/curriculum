import Link from "next/link";

export default function SideBar({ onToggle }) {
	//TODO: Should be made dynamic later
	let titles = [
		{
			id: 1,
			url: "introduction",
			linkTitle: "Introduction"
		},
		{
			id: 2,
			url: "datatypes",
			linkTitle: "Datatypes"
		},
		{
			id: 3,
			url: "interaction",
			linkTitle: "Interaction"
		}
	];

	function handleClick(e) {
		onToggle();
	}

	return (
		<aside className="transform top-0 left-0 w-64 bg-gray-100 fixed h-full overflow-auto ease-in-out transition-all duration-3000 z-30 translate-x-0">
			<svg
				aria-hidden="true"
				focusable="false"
				className="h-4 absolute top-6 right-6 cursor-pointer hover:text-purple-700"
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

			<ul className="text-black flex flex-col mt-20 h-80">
				{titles.map(title => (
					<li
						key={title.id}
						className="text-center text-gray-700 hover:text-black border-l-8 border-gray-700 hover:border-purple-700 focus:border-purple-700 p-4"
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
