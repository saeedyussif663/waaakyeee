import WaakyeDetailHeader from "@/components/detail-header";
import Details from "@/components/details";
import Ratings from "@/components/ratings";
import Reviews from "@/components/reviews";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import React from "react";
import { useParams } from "react-router";

export default function Waakyedetail() {
  const params = useParams();

  async function getWaakye() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/vendors/${params.id}`,
      );
      const data = await response.json();

      if (data.data.error) {
        throw Error(data.data.error);
      }

      return data;
    } catch (error) {
      throw Error(error instanceof Error ? error.message : String(error));
    }
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["waakye_detail"],
    queryFn: getWaakye,
  });

  console.log(data.data);

  return (
    <React.Fragment>
      <WaakyeDetailHeader />
      <main className="mx-auto mt-40 mb-20 max-w-7xl min-w-full px-4 sm:mt-50 md:px-6">
        {isLoading && <Loader className="mx-auto animate-spin" />}
        {isError && <div className="text-red-500/50">{error.message}</div>}

        {!isLoading && data?.data && (
          <div>
            {/* details */}

            <Details {...data?.data} />
            {/* stars */}
            <Ratings {...data?.data} />

            {/* reviews */}
            <Reviews />
          </div>
        )}

        {/* related joints */}
        {/* <RelatedJoints /> */}
      </main>
    </React.Fragment>
  );
}
