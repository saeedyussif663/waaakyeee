import WaakyeDetailHeader from "@/components/detail-header";
import Details from "@/components/details";
import Ratings from "@/components/ratings";
import Reviews from "@/components/reviews";
import React from "react";

export default function Waakyedetail() {
  return (
    <React.Fragment>
      <WaakyeDetailHeader />
      <main className="mx-auto mt-64 mb-20 max-w-7xl min-w-full px-4 sm:mt-50 md:px-6">
        {/* details */}
        <Details />
        {/* stars */}
        <Ratings />

        {/* reviews */}
        <Reviews />

        {/* related joints */}
        {/* <RelatedJoints /> */}
      </main>
    </React.Fragment>
  );
}
