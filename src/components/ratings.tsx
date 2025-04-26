import { Star } from "lucide-react";

export default function Ratings() {
  return (
    <section className="mt-10 w-full border-y border-[#CACACA] px-2 py-4">
      <article className="flex flex-wrap items-center justify-center gap-8 md:justify-between">
        <Rate title="Overall Ratings" rate={4.53} />

        <Rate title="Overall Ratings" rate={4.53} />
        <Rate title="Overall Ratings" rate={3.53} />
        <Rate title="Overall Ratings" rate={2.53} />
        <Rate title="Overall Ratings" rate={5} />
      </article>
    </section>
  );
}

function Rate({ title, rate }: { title: string; rate: number }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-[#414141]">
      <h5 className="text-lg font-medium">{title}</h5>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            fill={rate >= index + 1 ? "#373737" : "rgba(155, 155, 155, 0.2)"}
            strokeWidth={0}
          />
        ))}
      </div>
      <h1 className="text-[40px] font-semibold">{rate}</h1>
    </div>
  );
}
