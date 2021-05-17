import CourseItem from '../CourseItem/CourseItem';
import Image from 'next/image';

export default function CourseList() {
    const content = [
        {
            "image": "/images/js.svg",
            "alt": "Javascript",
            "imageWidth": 190,
            "imageHeight": 190,
            "title": "Learn JS",
            "description": "Our online program is an amazing way for children to learn coding from the comfort of your home.",
            "linktext": "Learn more"
        },
        {
            "image": "/images/html5.svg",
            "alt": "HTML5",
            "imageWidth": 143,
            "imageHeight": 199,
            "title": "Learn HTML",
            "description": "Our online program is an amazing way for children to learn coding from the comfort of your home.",
            "linktext": ""
        },
        {
            "image": "/images/css3.svg",
            "alt": "CSS3",
            "imageWidth": 139,
            "imageHeight": 196,
            "title": "Learn CSS",
            "description": "Our online program is an amazing way for children to learn coding from the comfort of your home.",
            "linktext": ""
        }
    ];
    return (
        <section className="pb-10 lg:pb-20">
            <div className="container">
                <div className="w-8/12">
                    <h2 className="font-darker font-extrabold text-64 mb-10 text-gray-01">The Best Way to Start Kids’ Coding Journey</h2>
                    <p className="font-bold text-18 text-gray-800">Our online program is an amazing way for children to learn coding from the comfort of your home. The convenience and attentiveness you love about drop-in programs is combined with the extensive coding curriculum of Mighty Coders.</p>
                </div>
                <div className="md:grid gap-8 grid-cols-3 py-20">

                    <CourseItem content={content[0]} />
                    <CourseItem content={content[1]} />
                    <CourseItem content={content[2]} />

                </div>
            </div>
        </section>
    );
}