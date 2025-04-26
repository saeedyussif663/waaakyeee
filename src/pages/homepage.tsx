import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import WaakyeCard from "@/components/ui/waakye";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import React from "react";

export default function Homepage() {
  async function getWaakyes() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/vendors?lat=5.636096&lng=-0.2162688`,
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
  });

  return (
    <React.Fragment>
      <Header />
      <main className="mx-auto mt-64 mb-20 max-w-[1520px] min-w-full px-4 sm:mt-50 md:px-6 xl:px-0">
        <h1 className="mx-auto max-w-[568px] text-center text-3xl font-medium text-[#3D3D3D] sm:text-[40px]">
          Find the best waakye plug anywhere
        </h1>

        <article className="mt-10 flex w-full flex-wrap items-center justify-center gap-6 sm:justify-start xl:gap-12">
          {isLoading && <Loader className="mx-auto animate-spin" />}
          {isError && <div className="text-red-500/50">{error.message}</div>}
          {data.data.length === 0 && (
            <p className="mx-auto text-lg text-[#1A1A1A]">
              No vendors at the moment
            </p>
          )}

          {data.data.length > 0 &&
            data?.data.map((waakye: unknown, index: React.Key) => (
              <WaakyeCard key={index} />
            ))}
        </article>

        <div className="flex w-full">
          <Button className="mx-auto mt-10 cursor-pointer rounded-[12px] border border-[#242424] bg-transparent px-7 py-6 font-medium text-[#1A1A1A] hover:bg-transparent">
            Continue exploring
          </Button>
        </div>
      </main>
    </React.Fragment>
  );
}
