import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Reviews() {
  return (
    <section className="mt-10 w-full space-y-6">
      <h3 className="text-2xl font-semibold text-[#414141]">Reviews</h3>
      <article className="flex flex-wrap items-center justify-center gap-6 md:justify-start">
        <Review />
        <Review />
        <Review />
        <Review />
      </article>
      <div className="mx-auto w-fit cursor-pointer rounded-[12px] border border-[#242424] px-5 py-4">
        Show all reviews
      </div>
    </section>
  );
}

function Review() {
  return (
    <div className="w-full space-y-3 rounded-2xl border border-[#F5F5F5] p-2 md:max-w-[566px]">
      <Avatar className="size-10">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <h1 className="text-2xl font-semibold text-[#1A1A1A]">Miles, Esther</h1>

      <p className="text-sm text-[#333333] md:text-base">
        It's a very peaceful location, and the food is perfect for lunch and
        supper. Since I found this place I haven't prepared lunch ever. Their
        delivery is the best.{" "}
      </p>
    </div>
  );
}
