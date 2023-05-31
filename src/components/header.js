import Image from "next/image"
import { Router } from "next/navigation" 


export default function Header(){
    return(
        <div className="header relative container bg-white flex justify-between h-28 items-center pt-8">
            <Image src={"/image/logo.svg"} width={238} height={110} alt="" priority></Image>
            <div className="headerMenu flex gap-20">
                <span className="">Home</span>
                <span className="">About</span>
                <span className="">Service</span>
                <span className="">Contact</span>
            </div>
        </div>
    )
}