import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import WaakyeCard from "@/components/ui/waakye";
import React from "react";

export default function Homepage() {
  return (
    <React.Fragment>
      <Header />
      <main className="mx-auto mt-64 mb-20 max-w-7xl min-w-full px-4 sm:mt-50 md:px-6">
        <h1 className="mx-auto max-w-[568px] text-center text-3xl font-medium text-[#3D3D3D] sm:text-[40px]">
          Find the best waakye plug anywhere
        </h1>

        <article className="mt-10 flex w-full flex-wrap items-center justify-center gap-6 sm:justify-start">
          <WaakyeCard />
          <WaakyeCard />
          <WaakyeCard />
          <WaakyeCard />
          <WaakyeCard />
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
