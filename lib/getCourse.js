import { courses } from "../courses/meta";

export function getCourse(currentCourseName) {
	let currentCourseData = courses.filter((course) => {
		return course.courseUrl === currentCourseName;
	});
	currentCourseData = currentCourseData[0];
	return currentCourseData;
}
