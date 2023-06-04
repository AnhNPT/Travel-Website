import Image from "next/image";

export default function PopularTrip(props) {
    return (
        <div className="container mt-11 mb-20">
            {/* Text */}
            <div className="text-center flex flex-col">
                <span className="text-2 font-jua text-2xl mb-3">Popular Trips</span>
                <span className="text-1 text-[60px] leading-[76px] font-semibold font-outfit">Our Most Popular Trips</span>
            </div>
            {/* Menu */}
            <div className="flex items-center justify-between mt-20 mb-16">
                <span className={`font-outfit text-[24px] leading-8 text-1 cursor-pointer ${props.tripType === 0 ? "font-semibold" : ""}`} onClick={() => props.changeTrip(0)}>
                    Hot Deals
                </span>
                <div className="w-[2px] bg-3 h-8"></div> {/* Horizontal line */}
                <span className={`font-outfit text-[24px] leading-8 text-1 cursor-pointer ${props.tripType === 1 ? "font-semibold" : ""}`} onClick={() => props.changeTrip(1)}>
                    Honeymoon
                </span>
                <div className="w-[2px] bg-3 h-8"></div> {/* Horizontal line */}
                <span className={`font-outfit text-[24px] leading-8 text-1 cursor-pointer ${props.tripType === 2 ? "font-semibold" : ""}`} onClick={() => props.changeTrip(2)}>
                    Backpacking
                </span>
                <div className="w-[2px] bg-3 h-8"></div> {/* Horizontal line */}
                <span className={`font-outfit text-[24px] leading-8 text-1 cursor-pointer ${props.tripType === 3 ? "font-semibold" : ""}`} onClick={() => props.changeTrip(3)}>
                    Europe
                </span>
                <div className="w-[2px] bg-3 h-8"></div>
                <span className={`font-outfit text-[24px] leading-8 text-1 cursor-pointer ${props.tripType === 4 ? "font-semibold" : ""}`} onClick={() => props.changeTrip(4)}>
                    Asia
                </span>
                <div className="w-[2px] bg-3 h-8"></div> {/* Horizontal line */}
                <span className={`font-outfit text-[24px] leading-8 text-1 cursor-pointer ${props.tripType === 5 ? "font-semibold" : ""}`} onClick={() => props.changeTrip(5)}>
                    More
                </span>
            </div>
            {/* List item */}
            {props.tripType === 0 ? (
                <div className="flex justify-between">
                    <div className="flex flex-col font-outfit">
                        <Image className="drop-shadow-custom-1 rounded-[30px]" alt="" src={"/image/Rectangle 43.png"} width={400} height={1}></Image>
                        <div className="flex justify-between mt-5">
                            <span className="text-[20px] leading-6 text-1 font-medium">7 Days, 6 Nights</span>
                            <span className="text-[20px] leading-6 text-2 font-semibold">$348 /person</span>
                        </div>
                        <span className="text-1 block mt-5 font-semibold text-[24px] leading-8">Explore the beauty of Venice</span>
                        <div className="flex justify-between mt-5 items-center">
                            <div className="flex flex-row items-center">
                                <Image alt="" src={"/image/marker-02.svg"} width={36} height={1}></Image>
                                <span className="text-1 font-medium text-[20px] leading-6">Venice, Italy</span>
                            </div>
                            <div className="cursor-pointer rounded-[50px] bg-3 w-fit py-3 px-8 text-white">Discover</div>
                        </div>
                    </div>
                    <div className="flex flex-col font-outfit">
                        <Image className="drop-shadow-custom-1 rounded-[30px]" alt="" src={"/image/Rectangle 46.png"} width={400} height={1}></Image>
                        <div className="flex justify-between mt-5">
                            <span className="text-[20px] leading-6 text-1 font-medium">3 Days, 2 Nights</span>
                            <span className="text-[20px] leading-6 text-2 font-semibold">$348 /person</span>
                        </div>
                        <span className="text-1 block mt-5 font-semibold text-[24px] leading-8">Seek the elegance of Paris</span>
                        <div className="flex justify-between mt-5 items-center">
                            <div className="flex flex-row items-center">
                                <Image alt="" src={"/image/marker-02.svg"} width={36} height={1}></Image>
                                <span className="text-1 font-medium text-[20px] leading-6">Venice, Italy</span>
                            </div>
                            <div className="cursor-pointer rounded-[50px] bg-3 w-fit py-3 px-8 text-white">Discover</div>
                        </div>
                    </div>
                    <div className="flex flex-col font-outfit">
                        <Image className="drop-shadow-custom-1 rounded-[30px]" alt="" src={"/image/Rectangle 47.png"} width={400} height={1}></Image>
                        <div className="flex justify-between mt-5">
                            <span className="text-[20px] leading-6 text-1 font-medium">4 days, 3 Nights</span>
                            <span className="text-[20px] leading-6 text-2 font-semibold">$348 /person</span>
                        </div>
                        <span className="text-1 block mt-5 font-semibold text-[24px] leading-8">Discover the culture of Agadir</span>
                        <div className="flex justify-between mt-5 items-center">
                            <div className="flex flex-row items-center">
                                <Image alt="" src={"/image/marker-02.svg"} width={36} height={1}></Image>
                                <span className="text-1 font-medium text-[20px] leading-6">Venice, Italy</span>
                            </div>
                            <div className="cursor-pointer rounded-[50px] bg-3 w-fit py-3 px-8 text-white">Discover</div>
                        </div>
                    </div>
                </div>
            ) : (
                <span className="block text-center font-outfit text-[24px] leading-8 text-1">Comming soon!!!</span>
            )}
        </div>
    );
}
