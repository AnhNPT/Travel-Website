import Image from "next/image";

export default function EndBanner() {
    return (
        <div className="mt-[120px] container bg-4 rounded-[120px] relative h-[400px] flex">
            <Image className="ml-16 absolute bottom-0 left-0 right-0 top-[-100px]" alt="" src={"/image/Group 26.svg"} width={596} height={1}></Image>
            <div className="absolute flex flex-col items-center right-[240px] top-[70px]">
                <span className="block font-outfit font-semibold text-[60px] leading-[76px] text-1 text-center">
                    See the world, <br></br>It’s yours to explore.
                </span>
                <div className="mt-10 cursor-pointer bg-white w-fit py-4 px-14 rounded-full font-outfit text-xl font-semibold">Get started</div>
            </div>
        </div>
    );
}
