import Navbar from "../../component/layout/NavBar/NavBar";
import Head from "next/head";
import Link from "next/link";
import { courses, addCourses } from "../../courses/meta";

export default function Courses() {
	// addCourses();
	return (
		<div>
			<Head>
				<title> Courses | Curriculum</title>
			</Head>
			<Navbar showMenuIcon={false} showTitle={false} />
			<div className="bg-gray-50 flex flex-col items-center text-gray-700 pb-14">
				<h1 className="text-center text-gray-700 text-4xl uppercase tracking-wider p-8">
					Courses
				</h1>
				<div className="text-xl w-2/3">
					{courses.map((course) => (
						<div
							key={course.courseUrl}
							className="p-8 shadow-xl bg-white my-4 hover:shadow-2xl "
						>
							<Link href={`/curriculum/${course.courseUrl}`}>
								<a className="p-4 text-3xl hover:text-purple-800">
									{course.courseName}
								</a>
							</Link>
							<div className="border-t border-gray-300 m-4 py-4">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Laudantium atqu explicabo quam odio ducimus nobis labore
								architecto. Explicabo cumque culpa impedit magni dignissimos
								ipsa omnis eius! Tempora facilis dolor qui?
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
