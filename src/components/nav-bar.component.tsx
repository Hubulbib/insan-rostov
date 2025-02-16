"use client"

import {usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NavBarComponent = () => {

    const pathname = usePathname()

    return <nav className='w-full flex flex-row items-center py-12 p-10'>
        <Link href='/'><Image className='items-start' src='./logo.svg' alt='Инсан' width={200} height={60}/></Link>
        <ul className='w-full flex flex-row justify-evenly'>
            <li><Link className={pathname === '/programs' ? 'nav-link active' : 'nav-link'} href={'/programs'}>Программы фонда</Link></li>
            <li><Link className={pathname === '/zakat' ? 'nav-link active' : 'nav-link'} href={'/zakat'}>Выплата закята</Link></li>
            <li><Link className={pathname === '/help-me' ? 'nav-link active' : 'nav-link'} href={'/help-me'}>Мне нужна помощь</Link></li>
        </ul>
    </nav>
}

export default NavBarComponent