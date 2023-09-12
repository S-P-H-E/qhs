"use client"
import Link from 'next/link'
import { BiSolidBook } from 'react-icons/bi'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname()

  const handleContactClick = () => {
    const email = 'example@email.com';
    const subject = 'Inquiry to Read A Lot';
    const body = 'Hello, I would like to get in touch with Queensburgh High School about Read A Lot.';

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const routes = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Resources',
      href: '/resources'
    },
  ]

  return (
    <div className="p-8 flex justify-between items-center">
      <div className='w-full'>
        <BiSolidBook size={30} />
      </div>
      <div className='flex justify-center items-center gap-8 w-full'>
        {routes.map((route) => (
          <Link href={route.href} key={route.href} className="flex flex-col group">
            <button className="font-medium">{route.label}</button>
            <div className={clsx("bg-[var(--highlight)] h-[1px] transition-all scale-x-0 group-hover:scale-x-100", pathname === route.href ? 'scale-x-100' : '')} />
          </Link>
        ))}
      </div>

      <div className='w-full flex justify-end'>
        <button
          className='px-3 py-2 rounded-xl bg-[--highlight] text-white text-base'
          onClick={handleContactClick}
        >
          Contact Us
        </button>
      </div>
    </div>
  )
}
