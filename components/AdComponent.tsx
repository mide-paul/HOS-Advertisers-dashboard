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
import { Postad } from "@/components/postAd";

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
                <div className="relative lg:ml-20 lg:mt-12 bg-white lg:w-62 lg:h-29 xl:ml-23 rounded">
                    <h3 className="lg:pt-7 lg:font-bold lg:text-dark lg:text-base lg:text-center">
                        You don&apos;t have any ads yet
                    </h3>
                    <div className="flex">
                        <button
                            onClick={addPost}
                            className="lg:mt-5 lg:pl-5 lg:h-6 lg:w-19 lg:ml-24 text-sm bg-blue text-white rounded hover:bg-light-blue"
                        >
                            Post Ad
                        </button>
                        <Image src={add_square_white} alt="" className="lg:mt-5.4 lg:-ml-14.5 lg:h-4 lg:w-4" />
                    </div>
                    <div className="lg:ml-19.2 lg:mt-7 bg-gray-light lg:w-30 lg:h-16 lg:pt-3">
                        <Image src={ads_speaker} alt="" className="lg:mt-3 lg:ml-15.3 lg:h-13 lg:w-13" />
                    </div>
                </div>
            ) : (
                <div>
                    <div className="relative bg-white lg:ml-20 lg:mt-12 lg:w-62 lg:h-7 rounded">
                        <Link href="/sponsors"><Image src={arrow_left_blue} alt="" className="relative lg:pt-0.1 lg:ml-2" />
                            <h3 className="relative text-sm text-left font-bold text-blue lg:ml-8 lg:-mt-5.3">Back</h3>
                        </Link>
                    </div>

                    <div className="relative lg:mt-5 lg:ml-20 lg:h-67 lg:w-62 bg-white rounded">
                        <div className="flex">
                            <h3 className="relative text-light-blue lg:font-bold text-base lg:text-left lg:pt-5 lg:ml-6">Brand Flyer</h3>
                            <Link href="/blog-post"><button className="relative text-dark lg:font-medium text-base lg:text-left lg:mt-5 lg:ml-6">Blog Post</button></Link>
                        </div>
                        <Image src={line} alt="" className="relative lg:pt-1 lg:ml-6 lg:w-10.5 lg:h-1.5" />

                        <div className="flex gap-16.3 lg:ml-4">
                            <h3 className="relative lg:pt-6 text-sm text-dark lg:text-left">Ad history</h3>

                            <div>
                                <input className="relative lg:mt-5 pl-5 lg:h-6 lg:w-22 text-sm border rounded" placeholder="search" />
                                <Image src={search} alt="" className="relative lg:-mt-4.51 lg:ml-1 lg:h-1.5 lg:w-1.5" />
                            </div>

                            <div>
                                <Postad />
                            </div>
                        </div>

                        {/* <ul className="space-y-4">
                            {posts.map((post) => (
                                <li key={post.id} className="p-4 border rounded-md shadow">
                                    {post.content}
                                </li>
                            ))}
                        </ul> */}

                        {posts.map((post) => (<div key={post.id} className="flex flex-wrap">
                            <div className="relative lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                                <div className="relative lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                                <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                                <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                                <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                                <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                                <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <Image src={eye} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                                <Image src={verify} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                                <Link href="/see-more"><button className="relative lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                            </div>

                            <div className="relative lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                                <div className="relative lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                                <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                                <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                                <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                                <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                                <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <Image src={eye} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                                <Image src={verify} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                                <Link href="/see-more"><button className="relative lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                            </div>

                            <div className="relative lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                                <div className="relative lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                                <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                                <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                                <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                                <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                                <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <Image src={eye} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                                <Image src={verify} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                                <Link href="/see-more"><button className="relative lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                            </div>

                            <div className="relative lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                                <div className="relative lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                                <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                                <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                                <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                                <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                                <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <Image src={eye} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                                <Image src={verify} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                                <Link href="/see-more"><button className="relative lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                            </div>

                            <div className="relative lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                                <div className="relative lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                                <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                                <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                                <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                                <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                                <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <Image src={eye} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                                <Image src={verify} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                                <Link href="/see-more"><button className="relative lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                            </div>

                            <div className="relative lg:mt-7 lg:ml-4 lg:h-26.5 lg:w-19.7 rounded border">
                                <div className="relative lg:ml-1.2 lg:mt-1.2 lg:h-14 lg:w-19.3 bg-gray-light rounded"></div>
                                <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">Brand Flyer</h3>
                                <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Category</h3>
                                <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <h3 className="relative lg:ml-1.2 lg:mt-3 text-sm font-bold text-left">https://lakers.com</h3>
                                <h3 className="relative text-gray lg:ml-1.2 lg:mt-0.5 text-x font-bold text-left">Ad url</h3>
                                <Image src={line} alt="" className="relative lg:mt-1 lg:pt-1.2 lg:ml-1.2 lg:w-19.3 lg:h-1.5" />
                                <Image src={eye} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Views - <span className="font-bold">30k</span></h3>
                                <Image src={verify} alt="" className="absolute lg:mt-2 lg:ml-1.2 lg:w-4" />
                                <h3 className="relative text-left text-x lg:ml-6 lg:mt-3.5">Total Clicks - <span className="font-bold">10k</span></h3>
                                <Link href="/see-more"><button className="relative lg:mt-4 lg:ml-1.5 lg:h-6 lg:w-19.3 text-light-blue font-bold text-sm rounded border hover:bg-gray-light">See More</button></Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}