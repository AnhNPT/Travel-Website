export default function PopularTrip() {
    return (
        <div className="container mt-11">
            <div className="text-center flex flex-col">
                <span className="text-2 font-jua text-2xl mb-3">Popular Trips</span>
                <span className="text-1 text-[60px] leading-[76px] font-semibold font-outfit">Our Most Popular Trips</span>
            </div>
            <div className="flex items-center justify-between mt-20 mb-20">
                <span className="font-outfit text-[24px] leading-8 text-1 cursor-pointer">Hot Deals</span>
                <div className="w-[2px] bg-3 h-8"></div>
                <span className="font-outfit text-[24px] leading-8 text-1 cursor-pointer">Honeymoon</span>
                <div className="w-[2px] bg-3 h-8"></div>
                <span className="font-outfit text-[24px] leading-8 text-1 cursor-pointer">Backpacking</span>
                <div className="w-[2px] bg-3 h-8"></div>
                <span className="font-outfit text-[24px] leading-8 text-1 cursor-pointer">Europe</span>
                <div className="w-[2px] bg-3 h-8"></div>
                <span className="font-outfit text-[24px] leading-8 text-1 cursor-pointer">Asia</span>
                <div className="w-[2px] bg-3 h-8"></div>
                <span className="font-outfit text-[24px] leading-8 text-1 cursor-pointer">More</span>
            </div>
        </div>
    );
}
