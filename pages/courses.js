
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import CourseSpotlight from "../component/layout/CourseSpotlight/CourseSpotlight";
import CourseList from "../component/layout/CourseList/CourseList";
import CourseJourney from "../component/layout/CourseJourney/CourseJourney";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import { useEffect } from "react";

export default function Courses() {
    useEffect(function mount() {
        function onScroll() {
            anim();
        }

        window.addEventListener("scroll", onScroll);

        return function unMount() {
            window.removeEventListener("scroll", onScroll);
        };
    });

    // anim();
    const contents = {
        "title": "Want to be Web Ninja?",
        "buttonText": "Get Started for free",
        "image": "/images/illustration-1.svg",
        "alt": "Want to be Web Ninja?",
        "imageWidth": 482,
        "imageHeight": 377,
    }
    return (
        <>
            <SiteHeader />
            <CourseSpotlight contents={contents} />
            <CourseList />
            <CourseJourney />
            <SectionSwag />
            <SiteFooter />
        </>
    );
}

const anim = () => {

        const screen_height = document.documentElement.clientHeight;
        const svg1 = document.getElementById('path_1');
        const mask1 = document.getElementById('box_1');
        const pathLength = svg1.getTotalLength();


        const svg2 = document.getElementById('path_2');
        const mask2 = document.getElementById('box_2');

        const svg3 = document.getElementById('path_3');
        const mask3 = document.getElementById('box_3');

        animatepath(svg1, mask1, pathLength, screen_height, 50, 400);
        animatepath(svg2, mask2, pathLength, screen_height, 50, 400);
        animatepath(svg3, mask3, pathLength, screen_height, 50, 400);
        

}

const findScrollPercent = (container, screen_height, distance1, distance2) => {
    let block_bounds = container.getBoundingClientRect();

    let scroll1percent = (document.documentElement.clientHeight - block_bounds.y - distance1) / (block_bounds.height + screen_height - distance2) * 100;

    return scroll1percent;
}

const animatepath = (svgElement, maskElent, pathLength, screen_height, distance1, distance2) => {

        let u = findScrollPercent(svgElement, screen_height, distance1, distance2);
        if (u < 0) { u = 0; }
        else if (u > 100) { u = 1; }
        else { u /= 100; }
        
        let p = svgElement.getPointAtLength(u * pathLength);
        let x = p.x - 10, y = p.y - 10;
        maskElent.setAttribute("transform", `translate(${x}, ${y})`);

} 