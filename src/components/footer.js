import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <div className="mt-20 bg-5 py-[100px]">
            <div className="container flex justify-between">
                <Image className="" alt="" width={238} height={1} src={'/image/logo-dark.svg'}></Image>
                <div className="footer-menu flex gap-20">
                    <div className="flex flex-col gap-7">
                        <span className="text-lg text-1 font-bold">About us</span>
                        <div className="flex flex-col gap-4 text-1 text-base font-medium">
                            <Link href={'/'}>About us</Link>
                            <Link href={'/'}>Creators</Link>
                            <Link href={'/'}>Philosophy</Link>
                            <Link href={'/'}>Contact us</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-7">
                        <span className="text-lg text-1 font-bold">Company</span>
                        <div className="flex flex-col gap-4 text-1 text-base font-medium">
                            <Link href={'/'}>Our team</Link>
                            <Link href={'/'}>Terms</Link>
                            <Link href={'/'}>How it works</Link>
                            <Link href={'/'}>Blog</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-7">
                        <span className="text-lg text-1 font-bold">Services</span>
                        <div className="flex flex-col gap-4 text-1 text-base font-medium">
                            <Link href={'/'}>Flights</Link>
                            <Link href={'/'}>Planning</Link>
                            <Link href={'/'}>Hotels</Link>
                            <Link href={'/'}>Booking</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-7">
                        <span className="text-lg text-1 font-bold">Check us out</span>
                        <div className="flex gap-4">
                            <Image className="" alt="" src={'/image/facebook.svg'} width={24} height={1}></Image>
                            <Image className="" alt="" src={'/image/instagram.svg'} width={24} height={1}></Image>
                            <Image className="" alt="" src={'/image/linkedin.svg'} width={24} height={1}></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}