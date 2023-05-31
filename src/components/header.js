"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathName = usePathname();
    console.log(pathName)
    return (
        <div className="header relative container bg-white flex justify-between h-28 items-center pt-8">
            <Image src={"/image/logo.svg"} width={238} height={110} alt="" priority></Image>
            <div className="flex gap-20">
                <Link href="/" className={pathName === "/" ? "headerMenu active" : "headerMenu"}>
                    Home
                </Link>
                <Link href="/about" className={pathName === "/about" ? "headerMenu active" : "headerMenu"}>
                    About
                </Link>
                <Link href="/service" className={pathName === "/service" ? "headerMenu active" : "headerMenu"}>
                    Service
                </Link>
                <Link href="/contact" className={pathName === "/contact" ? "headerMenu active" : "headerMenu"}>
                    Contact
                </Link>
            </div>
        </div>
    );
}
