/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Banner() {
    return (
        <div className="container flex items-center justify-between">
            <div className="flex flex-col">
                <span className="font-jua text-1 text-7xl leading-[94px]">
                    Experience the <br></br> world, one <br></br>adventure at a time
                </span>
                <span className="mt-9 text-1 opacity-50">Whether you're looking for a relaxing beach vacation or an adventurous trip to a new city, we have something for everyone. </span>
            </div>
            <Image alt="" src={"/image/illust.svg"} width={720} height={1}></Image>
        </div>
    );
}
