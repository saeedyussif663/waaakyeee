import { Rating, Vendor } from "@/lib/utils";
import { PlusCircle, X } from "lucide-react";
import { useState } from "react";
import AddReviewForm from "./add-review";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export default function Reviews({ ratings }: Vendor) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mt-10 w-full space-y-6">
      <div className="flex justify-between">
        <h3 className="text-2xl font-semibold text-[#414141]">Reviews</h3>

        <Dialog open={isOpen}>
          <DialogTrigger asChild>
            <Button
              className="flex items-center justify-center gap-2 rounded-[8px] bg-[#171717] px-3 py-2 text-white"
              onClick={() => setIsOpen(true)}
            >
              <PlusCircle size={16} />
              <span>Leave a review</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[95vh] overflow-y-scroll">
            <div className="flex justify-between">
              <div className="space-y-2 text-[#3D3D3D]">
                <h4 className="text-2xl font-semibold md:text-4xl">
                  Leave a review
                </h4>
                <p className="text-sm md:text-base">
                  Review and rate the seller based on your experience.
                </p>
              </div>

              <X size={18} color="#3D3D3D" onClick={() => setIsOpen(false)} />
            </div>

            <AddReviewForm setIsOpen={setIsOpen} />
          </DialogContent>
        </Dialog>
      </div>

      <article className="flex flex-wrap items-center justify-center gap-6 md:justify-start">
        {ratings === null && <p>No ratings</p>}
        {ratings?.map((rate) => <Review key={rate.ID} {...rate} />)}
      </article>
    </section>
  );
}

function Review({ Comment }: Rating) {
  const show = Comment.trim().length > 0;

  if (show) {
    return (
      <div className="w-full space-y-3 rounded-md border border-[#F5F5F5] p-4 md:max-w-[566px]">
        <p className="text-sm text-[#333333] md:text-base">{Comment}</p>
      </div>
    );
  }
}
