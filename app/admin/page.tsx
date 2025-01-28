import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import imgBlog from "/public/video_tutorial.png";
import imgDelete from "/public/delete.png";

export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import UploadImage from '../../components/UploadImage';


export default async function Admin({
    searchParams,
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {


    return (
        <>
            <div className='flex flex-col lg:flex-row items-center gap-8 w-full pt-8 lg:px-40 md:px-10'>

                <div className="lg:w-1/2 md:w-full items-center justify-start space-x-4 text-center p-8">
                    <div className='w-full'>
                        <UploadImage />
                    </div>
                    <div className="w-full py-4">
                        <div className="w-full">
                            <div className="mb-1 flex flex-col items-start justify-between space-y-0.5">
                                <div className="flex justify-between w-full items-center">
                                    <label className="block text-md font-medium leading-5 text-gray-900">
                                        Title
                                    </label>
                                </div>
                            </div>
                            <div className="relative rounded-md shadow-sm py-4">
                                <input id="" type="text" max="999999999" placeholder="How Much Does a Headshot Cost in 2024?" className="form-input block w-full rounded border p-2 sm:text-sm sm:leading-5 border-black/20 opacity-100 bg-dark/10 border-black/20 text-black" />
                            </div>
                            <div className="mb-1 flex flex-col items-start justify-between space-y-0.5">
                                <div className="flex justify-between w-full items-center">
                                    <label className="block text-md font-medium leading-5 text-gray-900">
                                        Content
                                    </label>
                                </div>
                            </div>
                            <div className="relative rounded-md shadow-sm py-4">
                                <textarea placeholder="My name is X and I'm a..." className="w-full h-[250px] bg-white  border border-gray-300 text-gray-700"></textarea>
                            </div>
                        </div>

                    </div>
                    <Button className='lg:w-full py-6 px-2 md:px-8 shadow-md text-xl flex w-full md:w-auto  md:inline-flex justify-center items-center rounded-full  font-semibold bg-[#20aca0] focus:ring-2 focus:ring-offset-2 transition-all'>
                        SUBMIT
                    </Button>
                </div>
                <div className="lg:w-1/2 md:w-full items-center justify-start space-x-4 text-center p-8">
                    <div className="w-full h-[500px]">
                        <div className="w-full flex mb-[20px]">
                            <img src={imgDelete.src} alt="" style={{cursor:"pointer"}} className='w-[40px] h-[40px] mr-[10px]'/>
                            <div className="w-[100px]">
                                <img src={imgBlog.src} alt="" className="object-cover w-full" />
                            </div>
                            <div className="w-full text-left px-4">
                                <p className="text-base font-bold sm:text-lg text-primary-500 tracking-[-0.3px]">
                                    The Best AI Headshot Generator (No Affiliate Links)
                                    M/</p>
                                <hr />
                                <p className="text-sm tracking-[-0.3px] font-medium text-[#474368]">
                                    June 25, 2024
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex mb-[20px]">
                            <img src={imgDelete.src} alt="" style={{cursor:"pointer"}} className='w-[40px] h-[40px] mr-[10px]'/>
                            <div className="w-[100px]">
                                <img src={imgBlog.src} alt="" className="object-cover w-full" />
                            </div>
                            <div className="w-full text-left px-4">
                                <p className="text-base font-bold sm:text-lg text-primary-500 tracking-[-0.3px]">
                                    The Best AI Headshot Generator (No Affiliate Links)
                                    M/</p>
                                <hr />
                                <p className="text-sm tracking-[-0.3px] font-medium text-[#474368]">
                                    June 25, 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
