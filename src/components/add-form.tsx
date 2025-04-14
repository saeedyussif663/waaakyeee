"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  img: z.any().optional(),
  name: z.string().min(1, { message: "name is required" }),
  number: z.string().min(1, { message: "number is required" }),
  region: z.string().min(1, { message: "region is required" }),
  city: z.string().min(1, { message: "city is required" }),
  location: z.string().min(1, { message: "location is required" }),
  description: z.string().min(1, { message: "description is required" }),
});

export default function AddForm() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      img: "",
      name: "",
      number: "",
      region: "",
      city: "",
      location: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const handleImageChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (file: File | null) => void,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file) {
      onChange(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPreviewImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="img"
          render={({ field: { onChange, ...field } }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-[#101928]">
                Image
              </FormLabel>
              <FormControl>
                <div className="flex flex-col items-center">
                  {previewImage ? (
                    <div className="relative mb-2 w-full max-w-md">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="h-48 w-full rounded-md object-cover"
                      />
                      <Button
                        type="button"
                        onClick={() => {
                          setPreviewImage(null);
                          onChange("");
                        }}
                        className="absolute top-2 right-2 h-8 w-8 rounded-full bg-red-500 p-1 text-white"
                      >
                        X
                      </Button>
                    </div>
                  ) : (
                    <div
                      className="w-full cursor-pointer rounded-md border-2 border-dashed border-[#D0D5DD] p-8 text-center text-[#8C94A6] transition-colors hover:bg-[#8C94A6]/5"
                      onClick={() =>
                        document.getElementById("image-upload")?.click()
                      }
                    >
                      <img src="/upload.png" alt="upload" className="mx-auto" />
                      <p className="mt-2">
                        Drop or capture images of the place
                      </p>
                      <p className="text-[8px]">
                        Supports JPG, JPEG, PNG, and GIF
                      </p>
                    </div>
                  )}
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageChange(e, onChange)}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-[#101928]">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter name on place e.g. Auntie Hawa Waakye"
                  {...field}
                  className="rounded-[6px] border border-[#D0D5DD] p-4 placeholder:text-[#98A2B3] focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-[#101928]">
                Phone number
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Phone number (055 014 1002)"
                  {...field}
                  className="rounded-[6px] border border-[#D0D5DD] p-4 placeholder:text-[#98A2B3] focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="region"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-[#101928]">
                  Region
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="greater-accra">Greater Accra</SelectItem>
                    <SelectItem value="ashanti">Ashanti</SelectItem>
                    <SelectItem value="eastern">Eastern</SelectItem>
                    <SelectItem value="western">Western</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-[#101928]">
                  City{" "}
                  <span className="text-xs font-normal text-[#929292]">
                    (Optional)
                  </span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="accra">Accra</SelectItem>
                    <SelectItem value="kumasi">Kumasi</SelectItem>
                    <SelectItem value="takoradi">Takoradi</SelectItem>
                    <SelectItem value="tamale">Tamale</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-[#101928]">
                Location
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter exact location e.g. Near the big tree at Atomic Junction"
                  {...field}
                  className="rounded-[6px] border border-[#D0D5DD] p-4 placeholder:text-[#98A2B3] focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-[#101928]">
                Description
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Add description here"
                  {...field}
                  className="rounded-[6px] border border-[#D0D5DD] p-4 placeholder:text-[#98A2B3] focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="mt-4 w-full bg-[#F06225] py-4 text-white hover:bg-[#F06225]"
        >
          Submit joint{" "}
        </Button>
      </form>
    </Form>
  );
}
