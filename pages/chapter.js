
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import CourseSpotlight from "../component/layout/CourseSpotlight/CourseSpotlight";
import ChapterOverview from "../component/layout/ChapterOverview/ChapterOverview";
import ChapterList from "../component/layout/ChapterList/ChapterList";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";

export default function Chapter() {

    const contents = {
        "title": "Learn JS?",
        "buttonText": "Start",
        "image": "/images/illustration-1.svg",
        "alt": "Want to be Web Ninja?",
        "imageWidth": 482,
        "imageHeight": 377,
        "bgcolor": "#083644",
        "bgimage": "bg2"
    }
    return (
        <>
            <SiteHeader />
            <CourseSpotlight contents={contents} />
            <ChapterOverview />
            <ChapterList />
            <SectionSwag />
            <SiteFooter />
        </>
    );
}