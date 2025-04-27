"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Upload } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";

import { useGlobalContext } from "@/context/context";
import uploadImage from "@/lib/upload-image";
import { useNavigate } from "react-router";
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

const ghanaRegions = [
  "Greater Accra",
  "Ashanti",
  "Eastern",
  "Western",
  "Western North",
  "Central",
  "Volta",
  "Oti",
  "Northern",
  "Savannah",
  "North East",
  "Upper East",
  "Upper West",
  "Bono",
  "Ahafo",
  "Bono East",
];

const formSchema = z.object({
  img: z.any().optional(),
  name: z.string().min(1, { message: "name is required" }),
  number: z.string().min(1, { message: "number is required" }),
  region: z.string().min(1, { message: "region is required" }),
  city: z.string().min(1, { message: "city is required" }),
  location: z.string().min(1, { message: "location is required" }),
  description: z.string().min(1, { message: "description is required" }),
  operating_hours: z
    .string()
    .min(1, { message: "operating hours is required" }),
  street_address: z.string().min(1, { message: "street address is required" }),
});

export default function AddForm() {
  const [previewImage, setPreviewImage] = useState(null);
  const { location, setShowOverlay } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

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
      operating_hours: "",
      street_address: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!location.latitude || !location.longitude) {
      setShowOverlay(true);
    }
    setIsLoading(true);
    const imageUrl = await uploadImage(values.img);
    const body = {
      image_url: imageUrl,
      description: values.description,
      phone_number: values.number,
      name: values.name,
      operating_hours: values.operating_hours,
      location: {
        city: values.city,
        latitude: location.latitude,
        longitude: location.longitude,
        region: values.region,
        street_address: values.street_address,
      },
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/vendors`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      );

      if (response.status === 200 || response.status === 201) {
        const data = await response.json();
        alert(data.message);
        navigate("/");
      } else {
        alert("An error occured creating vendor");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  // @ts-expect-error - "escape callback types"
  const handleImageChange = (e, onChange) => {
    const file = e.target.files[0];
    if (file) {
      onChange(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        // @ts-expect-error - "escape callback types"
        setPreviewImage(reader.result);
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
          render={({ field: { value, onChange, ...field } }) => (
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
                      className="w-full cursor-pointer rounded-md border-2 border-dashed border-[#D0D5DD] p-8 text-center transition-colors hover:bg-gray-50"
                      onClick={() =>
                        document.getElementById("image-upload")?.click()
                      }
                    >
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500">
                        Click to upload an image
                      </p>
                      <p className="text-xs text-gray-400">
                        JPG, PNG, GIF up to 10MB
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
                <FormLabel>Region</FormLabel>
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
                    {ghanaRegions.map((region, index) => (
                      <SelectItem key={index} value={region}>
                        {region}
                      </SelectItem>
                    ))}
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
                <FormLabel>City</FormLabel>

                <FormControl>
                  <Input
                    placeholder="Enter city"
                    {...field}
                    className="rounded-[6px] border border-[#D0D5DD] p-4 placeholder:text-[#98A2B3] focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="operating_hours"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-[#101928]">
                Operating hours
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="8:00am to 10:00pm"
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
          name="street_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-[#101928]">
                Street address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="waakye street"
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
          {isLoading ? "Submitting.." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
