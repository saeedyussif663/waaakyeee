"use client";

import { useGlobalContext } from "@/context/context";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Search } from "lucide-react";
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
  const { location, setShowOverlay } = useGlobalContext();

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
    <article className="fixed top-20 z-10 w-full bg-white">
      <section className="flex max-w-[1520px] flex-col-reverse justify-between gap-4 border-b border-[#DBDBDB] px-2 py-5 md:flex-row md:items-center md:px-6">
        {/* search */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative flex w-full md:w-auto"
          >
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Search for a joint "
                      className="h-[54px] w-full rounded-[12px] border-[0.5px] border-[#CDCDCD] p-2 text-[#A7A7A7] placeholder:text-[#A7A7A7] focus-visible:ring-0 md:w-[500px]"
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
        <article className="flex w-full flex-row items-center justify-between gap-4 md:w-auto">
          <div className="flex items-center justify-center gap-2 text-sm text-[#3D3D3D] sm:text-base">
            <MapPin size={20} />
            {location.town ? (
              <p>{location.town}</p>
            ) : (
              <p
                className="cursor-pointer"
                onClick={() => setShowOverlay(true)}
              >
                Allow access
              </p>
            )}
          </div>
        </article>
      </section>
    </article>
  );
}
