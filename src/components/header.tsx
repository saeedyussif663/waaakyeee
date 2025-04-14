"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Search, SlidersHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  query: z
    .string()
    .min(2, {
      message: "input should be more than two characters",
    })
    .max(50),
});

export default function Header() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <article className="fixed top-20 z-10 min-w-screen bg-white">
      <section className="flex items-center justify-between gap-4 border-b border-[#DBDBDB] px-2 py-5 md:px-6">
        {/* search */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative flex"
          >
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Search for a joint "
                      className="h-[54px] rounded-[12px] border-[0.5px] border-[#CDCDCD] p-2 text-[#A7A7A7] placeholder:text-[#A7A7A7] focus-visible:ring-0 md:w-[500px]"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="inset-shadow-custom absolute top-1.5 right-1.5 flex cursor-pointer items-center justify-center rounded-[8px] bg-[#1A1A1A] px-4 py-2 hover:bg-[#1A1A1A]"
            >
              <Search fill="white" size={30} />
            </Button>
          </form>
        </Form>

        {/* location */}
        <article className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="flex items-center justify-center gap-2 rounded-[8px] border-[0.5px] border-[#BEBEBE] px-4 py-3 text-sm text-[#3D3D3D] sm:text-base">
            <SlidersHorizontal size={16} className="rotate-90" />
            <p>Filter</p>
          </div>

          <div className="size-1 rounded-full bg-[#A8A8A8]"></div>

          <div className="flex items-center justify-center gap-2 text-sm text-[#3D3D3D] sm:text-base">
            <MapPin size={20} />
            <p>Allow location</p>
          </div>
        </article>
      </section>
    </article>
  );
}
