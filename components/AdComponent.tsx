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

interface Post {
    id: number;
    content: string;
}

export const AdComponent = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const addPost = () => {
        const newPost = { id: posts.length + 1, content: `Post ${posts.length + 1}` };
        setPosts([...posts, newPost]);
    };

    return (
        <div>
            {posts.length === 0 ? (
                <div className="relative ss:ml-3 ss:mt-12 ss:w-19.5 ss:h-29 sm:ml-3 sm:mt-12 sm:w-21.5 sm:h-29 md:ml-17 lg:ml-20 lg:mt-12 bg-white lg:w-62 lg:h-29 xl:ml-23 rounded">
                    <h3 className="ss:pt-5 ss:text-center sm:pt-5 sm:text-center lg:pt-7 lg:font-bold lg:text-dark lg:text-base lg:text-center">
                        You don&apos;t have any ads yet
                    </h3>
                    <div className="flex">
                        <button
                            onClick={addPost}
                            className="ss:mt-5 ss:pl-5 ss:h-6 ss:w-13 ss:ml-10 sm:mt-5 sm:pl-5 sm:h-6 sm:w-13 sm:ml-11 lg:mt-5 lg:pl-5 lg:h-6 lg:w-19 lg:ml-24 text-sm bg-blue text-white rounded hover:bg-light-blue"
                        >
                            Post Ad
                        </button>
                        <Image src={add_square_white} alt="" className="ss:mt-5.4 ss:-ml-11.5 ss:h-4.4 ss:w-4.4 sm:mt-5.4 sm:-ml-11.5 sm:h-4.4 sm:w-4.4 lg:mt-5.4 lg:-ml-14.5 lg:h-4 lg:w-4" />
                    </div>
                    <div className="ss:ml-3 ss:mt-7 ss:w-19.2 ss:h-16 ss:pt-3 sm:ml-3 sm:mt-7 sm:w-19.9 sm:h-16 sm:pt-3 lg:ml-19.2 lg:mt-7 bg-gray-light lg:w-30 lg:h-16 lg:pt-3">
                        <Image src={ads_speaker} alt="" className="ss:h-10 ss:w-10 ss:mt-6 ss:ml-10.5 sm:h-10 sm:w-10 sm:mt-6 sm:ml-11.5 lg:mt-3 lg:ml-15.3 lg:h-13 lg:w-13" />
                    </div>
                </div>
            ) : (
                <div>
                    <div className="relative ss:ml-0 ss:mt-10 ss:w-20 ss:h-7 sm:ml-3 sm:mt-10 sm:w-21.5 sm:h-7 md:w-46 bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-7 rounded">
                        <Link href="/sponsors"><Image src={arrow_left_blue} alt="" className="relative lg:pt-0.1 lg:ml-2" />
                            <h3 className="relative ss:ml-7 ss:-mt-5.3 sm:ml-7 sm:-mt-5.3 text-sm text-left font-bold text-blue lg:ml-8 lg:-mt-5.3">Back</h3>
                        </Link>
                    </div>

                    <div className="relative ss:mt-5 ss:ml-0 ss:h-185 ss:w-20 sm:mt-5 sm:ml-3 sm:h-185 sm:w-21.5 md:w-46 md:h-98 lg:mt-5 lg:ml-20 lg:h-67 lg:w-62 bg-white rounded">
                        <div className="flex">
                            <h3 className="relative ss:pt-5 ss:ml-4 ss:text-sm sm:pt-5 sm:ml-4 sm:text-sm text-light-blue lg:font-bold lg:text-base lg:text-left lg:pt-5 lg:ml-6">Brand Flyer</h3>
                            <Link href="/blog-post"><button className="relative ss:mt-5 ss:ml-6 ss:text-sm sm:mt-5 sm:ml-6 sm:text-sm text-dark lg:font-medium lg:text-base lg:text-left lg:mt-5 lg:ml-6">Blog Post</button></Link>
                        </div>
                        <Image src={line} alt="" className="relative ss:pt-1 ss:ml-3 ss:w-9.5 ss:h-1.5 sm:pt-1 sm:ml-3 sm:w-9.5 sm:h-1.5 lg:pt-1 lg:ml-6 lg:w-10.5 lg:h-1.5" />

                        <div className="flex gap-16.3 lg:ml-4">
                            <h3 className="relative ss:pt-6 ss:ml-3 ss:text-nowrap sm:pt-6 sm:ml-3 sm:text-nowrap lg:pt-6 text-sm text-dark lg:text-left">Ad history</h3>

                            <div>
                                <input className="relative ss:mt-5 ss:-ml-16 ss-5 ss:h-6 ss:w-13 sm:mt-5 sm:-ml-16 sm-5 sm:h-6 sm:w-13 lg:mt-5 lg:ml-0.1 pl-5 lg:h-6 lg:w-22 text-sm border rounded" placeholder="search" />
                                <Image src={search} alt="" className="absolute ss:-mt-4.51 ss:-ml-15.9 ss:h-1.5 ss:w-1.5 sm:-mt-4.51 sm:-ml-15.9 sm:h-1.5 sm:w-1.5 lg:-mt-4.51 lg:ml-1 lg:h-1.5 lg:w-1.5" />
                            </div>

                            <a
                                target='_blank'
                                rel='noopener noreferrer' href="https://hosoptima.com/advertise-with-us"><div>
                                    <button className="relative ss:mt-5 ss:pl-0 ss:h-6 ss:w-10 ss:-ml-19.1 sm:mt-5 sm:-ml-18 sm:pl-0 sm:h-6 sm:w-10 md:ml-48 lg:-mt-7 lg:ml-0.1 lg:pl-5 lg:h-6 lg:min-w-12 text-sm bg-blue text-white rounded hover:bg-light-blue">
                                        Post Ad
                                    </button>
                                    <Image src={add_square_white} alt="" className="relative lg:-mt-5 lg:ml-4.7 lg:h-4 lg:w-4 z-50" />
                                </div>
                            </a>
                        </div>

                        {/* <ul className="space-y-4">
                            {posts.map((post) => (
                                <li key={post.id} className="p-4 border rounded-md shadow">
                                    {post.content}
                                </li>
                            ))}
                        </ul> */}

                        {posts.map((post) => (<div key={post.id} className="flex ss:flex-col sm:flex-col md:flex-row lg:flex-row flex-wrap">
                            <div className="relative ss:mt-7 ss:ml-1 ss:h-26.5 ss:w-19.7 sm:mt-7 sm:ml-4.51 sm:h-26.5 sm:w-19.7 lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                                <div className="relative ss:ml-1.2 ss:mt-1.2 ss:h-14 ss:w-19.3 sm:ml-1.2 sm:mt-1.2 sm:h-14 sm:w-19.3 lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                                <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                                <h3 className="relative ss:ml-1.2 ss:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                                <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                                <h3 className="relative ss:ml-1.2 ssm:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                                <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <Image src={eye} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                                <Image src={verify} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                                <Link href="/see-more"><button className="relative ss:mt-4 ss:ml-1.5 ss:h-6 ss:w-19.3 sm:mt-4 sm:ml-1.5 sm:h-6 sm:w-19.3 lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                            </div>

                            <div className="relative ss:mt-7 ss:ml-1 ss:h-26.5 ss:w-19.7 sm:mt-7 sm:ml-4.51 sm:h-26.5 sm:w-19.7 lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                                <div className="relative ss:ml-1.2 ss:mt-1.2 ss:h-14 ss:w-19.3 sm:ml-1.2 sm:mt-1.2 sm:h-14 sm:w-19.3 lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                                <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                                <h3 className="relative ss:ml-1.2 ss:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                                <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                                <h3 className="relative ss:ml-1.2 ssm:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                                <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <Image src={eye} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                                <Image src={verify} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                                <Link href="/see-more"><button className="relative ss:mt-4 ss:ml-1.5 ss:h-6 ss:w-19.3 sm:mt-4 sm:ml-1.5 sm:h-6 sm:w-19.3 lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                            </div>

                            <div className="relative ss:mt-7 ss:ml-1 ss:h-26.5 ss:w-19.7 sm:mt-7 sm:ml-4.51 sm:h-26.5 sm:w-19.7 lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                                <div className="relative ss:ml-1.2 ss:mt-1.2 ss:h-14 ss:w-19.3 sm:ml-1.2 sm:mt-1.2 sm:h-14 sm:w-19.3 lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                                <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                                <h3 className="relative ss:ml-1.2 ss:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                                <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                                <h3 className="relative ss:ml-1.2 ssm:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                                <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <Image src={eye} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                                <Image src={verify} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                                <Link href="/see-more"><button className="relative ss:mt-4 ss:ml-1.5 ss:h-6 ss:w-19.3 sm:mt-4 sm:ml-1.5 sm:h-6 sm:w-19.3 lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                            </div>

                            <div className="relative ss:mt-7 ss:ml-1 ss:h-26.5 ss:w-19.7 sm:mt-7 sm:ml-4.51 sm:h-26.5 sm:w-19.7 lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                                <div className="relative ss:ml-1.2 ss:mt-1.2 ss:h-14 ss:w-19.3 sm:ml-1.2 sm:mt-1.2 sm:h-14 sm:w-19.3 lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                                <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                                <h3 className="relative ss:ml-1.2 ss:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                                <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                                <h3 className="relative ss:ml-1.2 ssm:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                                <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <Image src={eye} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                                <Image src={verify} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                                <Link href="/see-more"><button className="relative ss:mt-4 ss:ml-1.5 ss:h-6 ss:w-19.3 sm:mt-4 sm:ml-1.5 sm:h-6 sm:w-19.3 lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                            </div>

                            <div className="relative ss:mt-7 ss:ml-1 ss:h-26.5 ss:w-19.7 sm:mt-7 sm:ml-4.51 sm:h-26.5 sm:w-19.7 lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                                <div className="relative ss:ml-1.2 ss:mt-1.2 ss:h-14 ss:w-19.3 sm:ml-1.2 sm:mt-1.2 sm:h-14 sm:w-19.3 lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                                <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                                <h3 className="relative ss:ml-1.2 ss:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                                <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                                <h3 className="relative ss:ml-1.2 ssm:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                                <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <Image src={eye} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                                <Image src={verify} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                                <Link href="/see-more"><button className="relative ss:mt-4 ss:ml-1.5 ss:h-6 ss:w-19.3 sm:mt-4 sm:ml-1.5 sm:h-6 sm:w-19.3 lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                            </div>

                            <div className="relative ss:mt-7 ss:ml-1 ss:h-26.5 ss:w-19.7 sm:mt-7 sm:ml-4.51 sm:h-26.5 sm:w-19.7 lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                                <div className="relative ss:ml-1.2 ss:mt-1.2 ss:h-14 ss:w-19.3 sm:ml-1.2 sm:mt-1.2 sm:h-14 sm:w-19.3 lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                                <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                                <h3 className="relative ss:ml-1.2 ss:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                                <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <h3 className="relative ss:ml-1.2 ss:mt-3 sm:ml-1.2 sm:mt-3 lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                                <h3 className="relative ss:ml-1.2 ssm:mt-0.5 sm:ml-1.2 sm:mt-0.5 text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                                <Image src={line} alt="" className="relative ss:mt-1 ss:pt-1.2 ss:ml-1.2 ss:w-19.3 ss:h-1.5 sm:mt-1 sm:pt-1.2 sm:ml-1.2 sm:w-19.3 sm:h-1.5 lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <Image src={eye} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                                <Image src={verify} alt="" className="absolute ss:mt-2 ss:ml-1.2 ss:w-4 sm:mt-2 sm:ml-1.2 sm:w-4 lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative ss:ml-6 ss:mt-3.5 sm:ml-6 sm:mt-3.5 text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                                <Link href="/see-more"><button className="relative ss:mt-4 ss:ml-1.5 ss:h-6 ss:w-19.3 sm:mt-4 sm:ml-1.5 sm:h-6 sm:w-19.3 lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}