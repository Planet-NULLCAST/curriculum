import Head from 'next/head';
import Link from 'next/link'

import Layout from '../../component/layout/Layout'
import { getAllPostIds, getPostData } from '../../lib/jslist'

import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';

export async function getStaticPaths() {
    const paths = await getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData
        }
    }
}
export default function Javascript({ postData }) {
    console.log(postData);
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className="grid grid-cols-3 h-screen">
                <div className="bg-gray-50 px-4 py-4">
                    <div className="py-3">
                        <a href="#" className=" text-sm py-1 px-2 uppercase rounded-full border border-gray-500 tracking-wider font-medium">Learn</a>
                    </div>
                    <div className="text-lg font-bold my-3 uppercase">
                        <h1 className="text-lg">{postData.title}</h1>
                    </div>
                    <div className="text-md mt-5 mb-3">
                        {postData.subheading}
                    </div>
                    <div className="text-sm font-light codeClass" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </div>
                <div></div>
                <div></div>
            </div>
            <div className="flex justify-around space-x-52 h-12 bg-gray-900 items-center py-6 sticky bottom-0">
                <Link href={`/Javascript/${postData.prev}`}>
                    <a className="text-white"><ArrowCircleLeftIcon className={`h-12 w-12 inline-block ${postData.prev ? "text-yellow-500" : "text-white"}`} />Previous</a>
                </Link>
                <Link href={`/Javascript/${postData.next}`}>
                    <a className="text-white">Next<ArrowCircleRightIcon className={`h-12 w-12 inline-block ${postData.next ? "text-yellow-500" : "text-white"}`} /></a>
                </Link>
            </div>
        </Layout>
    )
}