import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import imgBlog from "/public/video_tutorial.png";

export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { Button } from '../../components/ui/button';


export default async function Blog({
    searchParams,
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {


    return (
        <>
            <div className='flex flex-col items-center pt-16 px-40  w-full max-w-[1200px]'>
                <Link href='/blog'>
                  <Button className='lg:w-full py-6 px-2 md:px-8 shadow-md text-xl flex w-full md:w-auto  md:inline-flex justify-center items-center rounded-full  font-semibold bg-[#20aca0] focus:ring-2 focus:ring-offset-2 transition-all'>
                    To List
                  </Button>
                </Link>
                <div className="mx-auto text-left md:text-center w-full">
                    <h1 className="mt-3 text-2xl font-bold tracking-[-1.05px] sm:text-3xl lg:text-[42px] text-primary-500 lg:leading-[48px]">
                        This is the article title
                    </h1>
                    <p className="mt-3 text-base font-medium sm:text-lg text-[#474368]">
                        Here you can add the small title and date
                    </p>
                    <img src={imgBlog.src} alt="" className="w-full" />
                    <p>In celebration of HeadshotPro's recent birthday, we’re opening up the curtain behind-the-scenes to reveal what the average AI headshot customer looks like, where they come from, and why they chose our AI-generated headshots instead of a local photographer.</p>
                </div>

            </div></>

    );
}
