"use client";
import AddForm from "@/components/add-form";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AddWaakye() {
  return (
    <Dialog open>
      <DialogTrigger className="cursor-pointer rounded-[8px] border-[0.5px] border-[#BEBEBE] px-4 py-3 text-[#3D3D3D]">
        Submit a waakye joint
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-scroll rounded-3xl p-10 md:w-[718px]">
        <DialogTitle className="text-2xl font-medium text-[#3D3D3D]">
          Submit a new joint
        </DialogTitle>
        <AddForm />
      </DialogContent>
    </Dialog>
  );
}
