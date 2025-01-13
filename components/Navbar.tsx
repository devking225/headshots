import { AvatarIcon } from '@radix-ui/react-icons';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import Link from 'next/link';
import { Button } from './ui/button';
import React from 'react';
import { Database } from '@/types/supabase';
import ClientSideCredits from './realtime/ClientSideCredits';

import arrow from '/public/arrow.png';
import product_use_avatar from '/public/product_use_avatar.png';

export const dynamic = 'force-dynamic';

const stripeIsConfigured = process.env.NEXT_PUBLIC_STRIPE_IS_ENABLED === 'true';

const packsIsEnabled = process.env.NEXT_PUBLIC_TUNE_TYPE === 'packs';

export const revalidate = 0;

export default async function Navbar() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: credits } = await supabase
    .from('credits')
    .select('*')
    .eq('user_id', user?.id ?? '')
    .single();

  return (
    <>
      <div className='fixed w-full total'>
        <div className='topbar w-full px-4 lg:px-20'>
          <div className='w-full flex flex-col lg:flex-row items-center'>
            <div className='lg:w-3/4 w-full  md:px-4'>
              <div
                className='overflow-hidden'
                dangerouslySetInnerHTML={{
                  __html: `
            <marquee>Get your entire team matching professional headshots for as little as $15 per person. 80+ headshots per person, done in 2 hours or less, without the hassle of a physical photo shoot</marquee>
            `,
                }}
              />
            </div>
            <div className='lg:w-1/4 w-full  md:px-4'>
              <span>
                <span className='text-orange-500'>✔</span>17,943+ headshots created
              </span>
            </div>
          </div>
        </div>

        <div className='flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between mynav'>
          <div className='flex gap-2 h-full'>
            <Link href='/'>
              <h1 className='font-bold text-[22px]'>Headshots AI</h1>
            </Link>
          </div>

          <div className='hidden lg:flex flex-row gap-2'>
            <Link href='/overview'>
              <Button variant={'ghost'} className='text-[16px]'>
                Home
              </Button>
            </Link>
            {packsIsEnabled && (
              <Link href='/overview/packs'>
                <Button variant={'ghost'} className='text-[16px]'>
                  Packs
                </Button>
              </Link>
            )}
            {stripeIsConfigured && (
              <Link href='/get-credits'>
                <Button variant={'ghost'} className='text-[16px]'>
                  Get Credits
                </Button>
              </Link>
            )}
          </div>

          <div
            className='flex gap-4 lg:ml-auto'
            style={{ alignItems: 'center', justifyItems: 'center' }}
          >
            {!user && (
              <>
                <Link href='/login'>
                  <Button variant={'ghost'} className='text-[16px]'>
                    Login
                  </Button>
                </Link>
                <Link href='/login'>
                  <Button className='lg:w-full py-6 px-2 md:px-8 shadow-md text-xl flex w-full md:w-auto  md:inline-flex justify-center items-center rounded-full  font-semibold bg-gradient-to-r from-orange-500 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all'>
                    Get Started
                  </Button>
                </Link>
              </>
            )}

            {user && (
              <div className='flex flex-row gap-4 text-center align-middle justify-center'>
                {stripeIsConfigured && <ClientSideCredits creditsRow={credits ? credits : null} />}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className='cursor-pointer'>
                    <AvatarIcon height={24} width={24} className='text-primary' />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='w-56'>
                    <DropdownMenuLabel className='text-primary text-center overflow-hidden text-ellipsis'>
                      {user.email}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <form action='/auth/sign-out' method='post'>
                      <Button type='submit' className='w-full text-left' variant={'ghost'}>
                        Log out
                      </Button>
                    </form>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
