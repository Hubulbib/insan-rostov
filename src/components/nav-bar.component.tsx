"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const NavBarComponent = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const openBurger = () => {
    setIsOpen((prev) => !prev);
    document.body.classList.toggle("lock");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="nav w-full flex flex-row items-center py-12 p-10">
      <Link href="/" className="nav-logo">
        <Image
          className="items-start"
          src="./logo.svg"
          alt="Инсан"
          width={200}
          height={60}
        />
      </Link>
      <button className="nav-burger-button" onClick={openBurger}>
        {isOpen ? (
          <X color="white" size={30} />
        ) : (
          <Menu color="#123d74" size={30} />
        )}
      </button>
      <ul className={isOpen ? `nav-menu active` : "nav-menu"}>
        <li>
          <Link
            className={
              pathname === "/programs" ? "nav-link active" : "nav-link"
            }
            href={"/programs"}
          >
            Программы фонда
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/zakat" ? "nav-link active" : "nav-link"}
            href={"/zakat"}
          >
            Выплата закята
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/help-me" ? "nav-link active" : "nav-link"}
            href={"/help-me"}
          >
            Мне нужна помощь
          </Link>
        </li>
      </ul>
      <ul className={"nav-items w-full flex flex-row justify-evenly"}>
        <li>
          <Link
            className={
              pathname === "/programs" ? "nav-link active" : "nav-link"
            }
            href={"/programs"}
          >
            Программы фонда
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/zakat" ? "nav-link active" : "nav-link"}
            href={"/zakat"}
          >
            Выплата закята
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/help-me" ? "nav-link active" : "nav-link"}
            href={"/help-me"}
          >
            Мне нужна помощь
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarComponent;
