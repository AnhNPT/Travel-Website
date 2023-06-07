"use client";

import "@fontsource/jua";
import "@fontsource-variable/outfit";
import Header from "@/components/header.js";
import Banner from "@/components/homepage/banner.js";
import ReadyToTravel from "@/components/homepage/readyToTravel";
import PopularTrip from "@/components/homepage/popularTrip";
import { useState } from "react";
import OurExperience from "@/components/homepage/ourExperience";

export default function Homepage() {
    const tripType = {
        HOT_DEAL: 0,
        HONEYMOON: 1,
        BACKPACKING: 2,
        EUROPE: 3,
        ASIA: 4,
        MORE: 5,
    };
    const [tripname, changeTripName] = useState(tripType.HOT_DEAL);

    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <ReadyToTravel></ReadyToTravel>
            <PopularTrip tripType={tripname} changeTrip={changeTripName}></PopularTrip>
            <OurExperience></OurExperience>
        </>
    );
}
