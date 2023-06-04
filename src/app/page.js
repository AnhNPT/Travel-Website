import '@fontsource/jua';
import '@fontsource-variable/outfit';
import Header from "@/components/header.js";
import Banner from "@/components/homepage/banner.js";
import ReadyToTravel from '@/components/homepage/readyToTravel';
import PopularTrip from '@/components/homepage/popularTrip';

export default function Homepage() {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <ReadyToTravel></ReadyToTravel>
            <PopularTrip></PopularTrip>
        </>
    );
}
