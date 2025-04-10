'use client';
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import add_square_white from './../public/icons/add_square_white.png';
import ads_speaker from './../public/icons/ads_speaker.svg';
import arrow_left_blue from './../public/icons/arrow_left_blue.png';
import line from './../public/icons/line_dark.png';
import search from './../public/icons/search.png';
import eye from './../public/icons/eye_dark.png';
import verify from './../public/icons/verify.png';
import ad_image2 from './../public/images/ad_image2.png';

interface Post {
    id: number;
    content: string;
}

export const AdComponent = () => {
    const blogPost = [
        { id: 1, image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, description: 'description description description', views: '30k', verify: verify, clicks: '10k' },
        { id: 2, image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, description: 'description description description', views: '30k', verify: verify, clicks: '10k' },
        { id: 3, image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, description: 'description description description', views: '30k', verify: verify, clicks: '10k' },
        { id: 4, image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, description: 'description description description', views: '30k', verify: verify, clicks: '10k' },
        { id: 5, image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, description: 'description description description', views: '30k', verify: verify, clicks: '10k' },
        { id: 6, image: ad_image2, title: 'Brand Flyer', category: 'Category', url: 'https://lakers.com', eye: eye, description: 'description description description', views: '30k', verify: verify, clicks: '10k' }
    ]

    const [posts, setPosts] = useState<Post[]>([]);

    const addPost = () => {
        const newPost = { id: posts.length + 1, content: `Post ${posts.length + 1}` };
        setPosts([...posts, newPost]);
    };

    return (
        <div>
            {posts.length === 0 ? (
                <div className="md:ml-44 lg:ml-44 mt-32 bg-white lg:w-62 rounded">
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="pt-24 font-bold text-black text-base text-center">
                            You don&apos;t have any ads yet
                        </h3>
                        <div className="flex -ml-20">
                            <button
                                onClick={addPost}
                                className="mt-6 pl-5 py-2 w-36 ml-0 text-sm bg-blue-950 text-white rounded hover:bg-blue-900"
                            >
                                Post Ad
                            </button>
                            <Image src={add_square_white} alt="" className="mt-8 -ml-28 h-4 w-4" />
                        </div>
                        <div className="mt-7 bg-gray-light w-80 h-32 pt-6">
                            <Image src={ads_speaker} alt="" className="mt-3 ml-36 h-14 w-14" />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="bg-white md:ml-64 lg:ml-64 mt-24 lg:w-62 lg:h-11 rounded">
                        <Link href="/sponsors"><Image src={arrow_left_blue} alt="" className="relative pt-0.1 ml-2" />
                            <h3 className="text-sm text-left font-bold text-blue ml-12 -mt-8">Back</h3>
                        </Link>
                    </div>

                    <div className="lg:mt-0 md:ml-64 lg:ml-64 lg:h-67 lg:w-full bg-white rounded">
                        <div className="flex">
                            <h3 className="text-blue-900 lg:font-medium text-base text-left pt-5 ml-2 lg:ml-6">Brand Flyer</h3>
                            <Link href="/blog-post"><button className="text-black lg:font-normal text-base text-left mt-5 ml-4 lg:ml-6">Blog Post</button></Link>
                        </div>
                        <Image src={line} alt="" className="pt-1 ml-2 lg:ml-5 w-24 lg:h-1.5" />

                        <div className="flex flex-col lg:flex-row md:gap-6 lg:gap-16 ml-4">
                            <h3 className="pt-6 text-sm text-black text-left text-nowrap">Ad history</h3>

                            <div>
                                <input className="mt-5 md:mt-0 lg:mt-5 pl-6 py-2 w-22 text-sm border rounded" placeholder="search" />
                                <Image src={search} alt="" className="relative -mt-6 ml-2 h-3 w-3" />
                            </div>

                            {/* <a
                                target='_blank'
                                rel='noopener noreferrer' href="https://hosoptima.com/advertise-with-us">
                                <div>
                                    <div className="mt-8 md:mt-4">
                                        <button className="mt-1 mx-auto pl-5 py-2 w-32 text-sm bg-blue-950 text-white rounded hover:bg-blue-900">
                                            Post Ad
                                        </button>
                                        <Image src={add_square_white} alt="" className="-mt-7 ml-6 h-4 w-4" />
                                    </div>
                                </div>
                            </a> */}
                            <Link href="/advertise-with-us">
                                <div className="mt-8 md:mt-4">
                                    <button className="mt-1 mx-auto pl-5 py-2 w-32 text-sm bg-blue-950 text-white rounded hover:bg-blue-900">
                                        Post Ad
                                    </button>
                                    <Image src={add_square_white} alt="" className="-mt-7 ml-6 h-4 w-4" />
                                </div>
                            </Link>
                        </div>

                        {/* <ul className="space-y-4">
                            {posts.map((post) => (
                                <li key={post.id} className="p-4 border rounded-md shadow">
                                    {post.content}
                                </li>
                            ))}
                        </ul> */}

                        <div className="flex gap-6 lg:gap-10 flex-wrap pb-8">
                            {blogPost.map((post) => (
                                <div
                                    key={post.id}
                                >
                                    <div className="mt-7 ml-4 min-h-[350px] w-80 p-2 rounded border">
                                        <Image src={post.image} alt="history" className="rounded" />
                                        <h3 className="mt-3 text-sm font-bold text-left">{post.title}</h3>
                                        <label className="text-gray mt-1 text-xs font-medium text-left">Category</label>
                                        <Image src={line} alt="" className="mt-2 pt-1.2 h-0.5" />
                                        <h3 className="mt-3 text-sm font-bold text-left">{post.url}</h3>
                                        <label className="text-gray mt-0.5 text-xs font-medium text-left">Ad url</label>
                                        <Image src={line} alt="" className="mt-2 pt-1.2 ml-1.2 h-0.5" />
                                        <h3 className="text-gray ml-1.2 mt-2 text-xs font-bold text-left w-full">{post.description}</h3>
                                        <Image src={eye} alt="" className="absolute mt-2 ml-1.2 w-4" />
                                        <h3 className="text-left text-xs ml-6 mt-2">Total Views - <span className="font-bold">{post.views}</span></h3>
                                        <Image src={verify} alt="" className="absolute mt-2 ml-1.2 w-4" />
                                        <h3 className="text-left text-xs ml-6 mt-2">Total Clicks - <span className="font-bold">{post.clicks}</span></h3>
                                        <Link href="/see-more">
                                            <button className="mt-4 h-8 w-full text-blue-900 font-semibold text-sm rounded border hover:bg-gray-light">
                                                See More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}