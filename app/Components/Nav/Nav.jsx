import Link from 'next/link';
import React from 'react'

const Nav = () => {

  const navList = [
    {
        key: 0,
        name:"Home",
        href: "/"
    },
    {   key:1,
        name:"About",
        href: "#about"
    },
    {   key: 2,
        name:"Gallery",
        href: "#gallery"
    },
    {   key: 3,
        name:"Contact",
        href: "#contact"
    }
  ]

  return (
    <div className='Nav flex justify-around items-center p-4 fixed w-full'>
        <div className="logo text-2xl font-bold">MN_</div>
        <div className="navLinks grid grid-cols-4 gap-4">
            {navList.map((link) => (
                <Link className="link hover:text-red-600" key={link.key} href={link.href}>{link.name}</Link>
            ))}
        </div>
    </div>
  )
}

export default Nav;