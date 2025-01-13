import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className='footer text-center px-4 lg:px-40 py-4 h-12 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center space-y-3 sm:mb-0 mb-3 border-gray-200'>
        <div className='flex space-x-4 pb-4 sm:pb-0'></div>
        <hr className='border-white/10' />
        <div className='md:flex md:items-center md:justify-between md:gap-6'>
          <div className='flex flex-wrap items-center gap-5'>
            <a
              href='/author/danny-postma'
              title='About us'
              className='text-base font-normal text-white transition-all duration-150 hover:opacity-80'
            >
              Home
            </a>
            <a
              href='/blog'
              title='Blog'
              className='text-base font-normal text-white transition-all duration-150 hover:opacity-80'
            >
              Packs
            </a>
            <a
              href='/jobs'
              title='Jobs'
              className='text-base font-normal text-white transition-all duration-150 hover:opacity-80'
            >
              Get Credits
            </a>
          </div>{' '}
          <p className='mt-12 text-base font-normal text-white md:mt-0'>
            © 2024 - 2025, All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
