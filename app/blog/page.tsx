import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import imgBlog from "/public/video_tutorial.png";

export const dynamic = 'force-dynamic';

export default async function Blog({
    searchParams,
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {


    return (
        <>
            <div className='flex flex-col items-center pt-16 px-20'>
                <div className="mx-auto text-left md:text-center">
                    <h1 className="mt-3 text-2xl py-3 font-bold tracking-[-1.05px] sm:text-3xl lg:text-[42px] text-primary-500 lg:leading-[48px]">
                        Latest Instant Headshots Blog
                    </h1>
                    <p className="mt-3 text-base font-medium sm:text-lg text-[#474368]">
                        Insights, ideas, and inspiration for headshot photography.
                    </p>
                </div>
                <div className="w-full pb-3">
                    <div className="p-6 relative bg-white border rounded-lg border-primary-500/15 shadow-[0px_0px_75px_0px_rgba(0,0,0,0.07)] flex flex-col justify-between">
                        <div className="flex-1 space-y-2 flex">
                            <div className='w-[300px]'>
                                <a href="/blog-detail" className="">
                                    <img src={imgBlog.src} alt="" className="object-cover w-full" />
                                </a>
                            </div>
                            <div className='w-full px-8'>
                                <p className="text-base font-bold sm:text-lg text-primary-500 tracking-[-0.3px]">
                                    The Best AI Headshot Generator (No Affiliate Links)
                                    <a href="/blog-detail" className="">
                                        <span aria-hidden="true" className="absolute inset-0"></span></a>
                                </p>
                                <hr />
                                <p className="text-sm tracking-[-0.3px] font-medium text-[#474368]">
                                    June 25, 2024
                                </p>
                                <p className="text-sm font-normal tracking-[-0.3px] text-paragraph">
                                    A professional photoshoot costs hundreds of dollars, your existing photos aren't professional enough, and even the most perfect selfies you've taken at home feel too amateur for the workplace.
                                    A professional photoshoot costs hundreds of dollars, your existing photos aren't professional enough, and even the most perfect selfies you've taken at home feel too amateur for the workplace.
                                </p>
                                <div className="mt-3">
                                    <a href="/blog-detail" className="text-base flex items-center justify-center w-[300px] font-medium text-[#240D0D] border border-[#E6E6E6] hover:opacity-80 transition-all duration-150 bg-[#EEEEEE] rounded-lg px-4 pt-2 pb-2.5 h-10" role="button">
                                        Read article
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="w-full pb-3">
                    <div className="p-6 relative bg-white border rounded-lg border-primary-500/15 shadow-[0px_0px_75px_0px_rgba(0,0,0,0.07)] flex flex-col justify-between">
                        <div className="flex-1 space-y-2 flex">
                            <div className='w-[300px]'>
                                <a href="/blog-detail" className="">
                                    <img src={imgBlog.src} alt="" className="object-cover w-full" />
                                </a>
                            </div>
                            <div className='w-full px-8'>
                                <p className="text-base font-bold sm:text-lg text-primary-500 tracking-[-0.3px]">
                                    The Best AI Headshot Generator (No Affiliate Links)
                                    <a href="/blog-detail" className="">
                                        <span aria-hidden="true" className="absolute inset-0"></span></a>
                                </p>
                                <hr />
                                <p className="text-sm tracking-[-0.3px] font-medium text-[#474368]">
                                    June 25, 2024
                                </p>
                                <p className="text-sm font-normal tracking-[-0.3px] text-paragraph">
                                    A professional photoshoot costs hundreds of dollars, your existing photos aren't professional enough, and even the most perfect selfies you've taken at home feel too amateur for the workplace.
                                    A professional photoshoot costs hundreds of dollars, your existing photos aren't professional enough, and even the most perfect selfies you've taken at home feel too amateur for the workplace.
                                </p>
                                <div className="mt-3">
                                    <a href="/blog-detail" className="text-base flex items-center justify-center w-[300px] font-medium text-[#240D0D] border border-[#E6E6E6] hover:opacity-80 transition-all duration-150 bg-[#EEEEEE] rounded-lg px-4 pt-2 pb-2.5 h-10" role="button">
                                        Read article
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                
            </div></>

    );
}
