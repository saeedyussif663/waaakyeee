import WaakyeCard from "./ui/waakye";

export default function RelatedJoints() {
  return (
    <section className="my-10 w-full space-y-4">
      <h4 className="text-2xl font-semibold text-[#414141]">Related Joints</h4>
      <article className="mt-10 flex w-full flex-wrap items-center justify-center gap-6 sm:justify-start xl:gap-12">
        <WaakyeCard />
        <WaakyeCard />
        <WaakyeCard />
        <WaakyeCard />
      </article>
    </section>
  );
}
