"use client";
import AddForm from "@/components/add-form";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useNavigate } from "react-router";

export default function AddWaakye() {
  const navigate = useNavigate();
  return (
    <Dialog open>
      <DialogTrigger className="cursor-pointer rounded-[8px] border-[0.5px] border-[#BEBEBE] px-4 py-3 text-[#3D3D3D]">
        Submit a waakye joint
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-scroll rounded-3xl p-10 md:w-[718px]">
        <div className="flex items-center justify-between">
          <DialogTitle className="text-2xl font-medium text-[#3D3D3D]">
            Submit a new joint
          </DialogTitle>

          <X onClick={() => navigate(-1)} className="cursor-pointer" />
        </div>
        <AddForm />
      </DialogContent>
    </Dialog>
  );
}
