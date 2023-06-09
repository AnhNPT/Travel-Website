import CountUp from "react-countup";
import Image from "next/image";
export default function OurExperience() {
    return (
        <div className="bg-4 pt-[71px] pb-[110px]">
            <div className="container flex gap-11">
                <div className="flex flex-col w-[45%]">
                    <span className="font-jua text-white text-2xl uppercase">Our experience</span>
                    <span className="text-black text-[56px] leading-[68px] font-outfit mt-2 ">
                        Trusted for years, <br></br>by travelers like you.
                    </span>
                    <span className="text-xl text-1 opacity-50 mt-9">
                        Travel with piece of mind with one of our customized travel <br></br>
                        packages to fit your specific needs and interests.
                    </span>
                    <div className="flex gap-10">
                        <div className="flex flex-col mt-12">
                            <span className="text-1 opacity-50 text-sm font-medium">Happy Customers</span>
                            <CountUp className="text-black font-outfit text-[50px] leading-[62px] mt-2" end={100} suffix="m+"></CountUp>
                        </div>
                        <div className="flex flex-col mt-12">
                            <span className="text-1 opacity-50 text-sm font-medium">Years of Experience</span>
                            <CountUp className="text-black font-outfit text-[50px] leading-[62px] mt-2" end={22} suffix="+"></CountUp>
                        </div>
                        <div className="flex flex-col mt-12">
                            <span className="text-1 opacity-50 text-sm font-medium">Awards Won</span>
                            <CountUp className="text-black font-outfit text-[50px] leading-[62px] mt-2" end={50} suffix="+"></CountUp>
                        </div>
                    </div>
                </div>
                <div className="w-[55%] flex justify-between ">
                    <div className="relative inline-block">
                        <Image alt="" src={"/image/Rectangle 43.png"} width={400} height={1} className="h-[420px]"></Image>
                        <div className="bg-linear flex items-center absolute w-full h-full top-0 bottom-0 left-0 rounded-[30px]">
                            <span className="absolute bottom-3 left-6 text-white font-jua text-2xl">Thailand</span>
                            <div className="absolute bottom-5 right-4 flex gap-1">
                                <Image alt="" src={"/image/Star.svg"} width={25} height={1}></Image>
                                <Image alt="" src={"/image/Star.svg"} width={25} height={1}></Image>
                                <Image alt="" src={"/image/Star.svg"} width={25} height={1}></Image>
                                <Image alt="" src={"/image/Star.svg"} width={25} height={1}></Image>
                                <Image alt="" src={"/image/h-star.svg"} width={25} height={1}></Image>
                            </div>
                        </div>
                    </div>
                    <div className="relative inline-block">
                        <Image alt="" src={"/image/Rectangle 47.png"} width={400} height={1} className="h-[420px]"></Image>
                        <div className="bg-linear flex items-center absolute w-full h-full top-0 bottom-0 left-0 rounded-[30px]">
                            <span className="absolute bottom-3 left-6 text-white font-jua text-2xl">Joshua Tree</span>
                            <div className="absolute bottom-5 right-4 flex gap-1">
                                <Image alt="" src={"/image/Star.svg"} width={25} height={1}></Image>
                                <Image alt="" src={"/image/Star.svg"} width={25} height={1}></Image>
                                <Image alt="" src={"/image/Star.svg"} width={25} height={1}></Image>
                                <Image alt="" src={"/image/Star.svg"} width={25} height={1}></Image>
                                <Image alt="" src={"/image/h-star.svg"} width={25} height={1}></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
