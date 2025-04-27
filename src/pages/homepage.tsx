import Header from "@/components/header";
import LocationOverlay from "@/components/location-overlay";
import WaakyeCard from "@/components/ui/waakye";
import { useGlobalContext } from "@/context/context";
import { Vendor } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import React from "react";

export default function Homepage() {
  const { location } = useGlobalContext();
  async function getWaakyes() {
    if (!location?.latitude || !location?.longitude) {
      throw new Error("Location coordinates are not available");
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/vendors/nearby?lat=${location.latitude}&lng=${location.longitude}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error(error instanceof Error ? error.message : String(error));
    }
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["waakye"],
    queryFn: getWaakyes,
    enabled: Boolean(location?.latitude && location?.longitude),
  });

  return (
    <React.Fragment>
      <LocationOverlay />
      <Header />
      <main className="mx-auto mt-64 mb-20 max-w-[1520px] min-w-full px-4 sm:mt-50 md:px-6 xl:px-0">
        <h1 className="mx-auto max-w-[568px] text-center text-3xl font-medium text-[#3D3D3D] sm:text-[40px]">
          Find the best waakye plug anywhere
        </h1>

        <article className="mt-10 flex w-full flex-wrap items-center justify-center gap-6 px-4 sm:justify-start xl:gap-12">
          {isLoading && <Loader className="mx-auto animate-spin" />}
          {isError && <div className="text-red-500/50">{error.message}</div>}
          {data?.data?.length === 0 && (
            <p className="mx-auto text-lg text-[#1A1A1A]">
              No vendors at the moment
            </p>
          )}

          {data?.data?.length > 0 &&
            data?.data.map((waakye: Vendor, index: React.Key) => (
              <WaakyeCard key={index} {...waakye} />
            ))}
        </article>

        {/* <div className="flex w-full">
          <Button className="mx-auto mt-10 cursor-pointer rounded-[12px] border border-[#242424] bg-transparent px-7 py-6 font-medium text-[#1A1A1A] hover:bg-transparent">
            Continue exploring
          </Button>
        </div> */}
      </main>
    </React.Fragment>
  );
}
