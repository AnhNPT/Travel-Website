"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathName = usePathname();
    return (
        <div className="header relative container bg-white flex justify-between h-28 items-center pt-8">
            <Image src={"/image/logo.svg"} width={238} height={110} alt="" priority></Image>
            <div className="flex gap-20">
                <Link href="/" className={pathName === "/" ? "font-semibold text-[22px] leading-7" : "text-[22px] leading-7"}>
                    Home
                </Link>
                <Link href="/about" className={pathName === "/about" ? "text-[22px] leading-7 font-semibold" : "text-[22px] leading-7"}>
                    About
                </Link>
                <Link href="/service" className={pathName === "/service" ? "text-[22px] leading-7 font-semibold" : "text-[22px] leading-7"}>
                    Service
                </Link>
                <Link href="/contact" className={pathName === "/contact" ? "text-[22px] leading-7 font-semibold" : "text-[22px] leading-7"}>
                    Contact
                </Link>
            </div>
        </div>
    );
}
