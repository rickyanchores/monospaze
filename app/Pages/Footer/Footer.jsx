import Link from 'next/link';
import React from 'react'

const Footer = () => {

  const directLinks = [
    {
      key: 0,
      name: "FB",
      href: ""
    },
    {
      key: 1,
      name: "IG",
      href: ""
    },
    {
      key: 2,
      name: "GMAIL",
      href: ""
    },
  ]

  return (
    <div className='Footer grid justify-center items-center h-screen' id='gallery'>
        <div className='Contact' id='contact'>
        <h1 className='title text-8xl font-extrabold hover:bg-white hover:p-4 hover:text-black transform transition-transform hover:scale-105'>MN_</h1>
          <div className="direct-contacts grid gap-4 mt-5">
            {directLinks.map((link) => (
              <Link key={link.key} href={link.href} target='_blank' className='link hover:text-red-600'>
               {link.name}
              </Link>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Footer;