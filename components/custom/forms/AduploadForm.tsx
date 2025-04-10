import React, { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { addDays, differenceInDays, parseISO } from "date-fns";
import { AdFormValues } from "@/app/advertise-with-us/upload-ad/page";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import { SelectItem } from "@/components/ui/select";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

interface AdUploadFormProps {
  onPreview: () => void;
  form: UseFormReturn<AdFormValues>;
}

const BANNER_PRICES: Record<string, Record<string, number>> = {
  Marketplace: { Large: 3500, Medium: 2450, Small: 1000 },
  "Urgency and Scarcity": { Large: 3500 },
  "Enterprise Training/Single Drivers": { Large: 3500 },
  "Enterprise Training/Companies": { Large: 3500 },
  Recommendation: { Large: 2500 },
  Leaderboard: { Large: 3500 },
  "E-books": { Large: 2500 },
  "E-Courses": { Large: 2500 },
  Manual: { Large: 2500 },
  Guidelines: { Large: 2500 },
};

const SIZE_DIMENSIONS: Record<string, string> = {
  Large: "1920x480",
  Medium: "728x90",
  Small: "300x250",
};

const AdUploadForm: React.FC<AdUploadFormProps> = ({ onPreview, form }) => {
  const { control, handleSubmit, watch, setValue } = form;

  const numberOfAds = watch("numberOfAds");
  const banner = watch("banner");
  const size = watch("adSize");
  const startDate = watch("startDate");
  const endDate = watch("endDate");

  useEffect(() => {
    let selectedSize = size;

    // If not Marketplace, force Large size
    if (banner !== "Marketplace") {
      selectedSize = "Large";
      setValue("adSize", "Large");
    }

    // Set dimensions based on size
    const selectedDimension = SIZE_DIMENSIONS[selectedSize];
    setValue("dimensions", selectedDimension);

    if (startDate) {
      const parsedStartDate = parseISO(startDate);
      const minEndDate = addDays(parsedStartDate, 7);
      if (!endDate || parseISO(endDate) < minEndDate) {
        setValue("endDate", minEndDate.toISOString().split("T")[0]);
      }
    }

    // Calculate ad duration
    let adDuration = 7; // Default to one week
    if (startDate && endDate) {
      const parsedStartDate = parseISO(startDate);
      const parsedEndDate = parseISO(endDate);
      adDuration = Math.max(
        differenceInDays(parsedEndDate, parsedStartDate) + 1,
        0
      );
    }

    const durationMultiplier = adDuration / 7;
    const basePrice = BANNER_PRICES[banner]?.[selectedSize] || 0;
    const total = basePrice * durationMultiplier * (Number(numberOfAds) || 1);
    setValue("price", String(total.toFixed(2)));
  }, [numberOfAds, banner, size, startDate, endDate, setValue]);

  const onSubmit = (data: AdFormValues) => {
    console.log(data, "data");
  };

  return (
    <div className="space-y-4 bg-white p-6">
      <h2 className="text-2xl font-bold">Upload your Ad Now</h2>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={control}
            name="title"
            label="Title"
            placeholder="Enter Title"
          />
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={control}
            name="description"
            label="Description"
            placeholder="What is your ad about?"
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={control}
            name="numberOfAds"
            label="Number of Ads"
            placeholder="Number of Ads"
          />

          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={control}
            name="banner"
            label="Ad Location"
            placeholder="Choose where your ad appears"
          >
            {Object.keys(BANNER_PRICES).map((banner) => (
              <SelectItem key={banner} value={String(banner)}>
                {banner}
              </SelectItem>
            ))}
          </CustomFormField>

          {banner === "Marketplace" && (
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={control}
              name="adSize"
              label="Size"
              placeholder="Choose the size of your ad"
            >
              {["Large", "Medium", "Small"].map((size) => (
                <SelectItem key={size} value={String(size)}>
                  {size}
                </SelectItem>
              ))}
            </CustomFormField>
          )}

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={control}
            name="dimensions"
            label="Dimensions"
            readonly={true}
          />

          <CustomFormField
            fieldType={FormFieldType.FILE_INPUT}
            control={control}
            name="adFile"
            label="Upload ad"
            placeholder="Choose ad file"
            maxFileLength={Number(numberOfAds)}
          />

          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            control={control}
            label="Start Date *"
            name="startDate"
            placeholder="Start Date"
          />
          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            control={control}
            label="End Date *"
            name="endDate"
            placeholder="End Date"
          />

          <CustomFormField
            fieldType={FormFieldType.AMOUNT_INPUT}
            control={control}
            label="Price *"
            placeholder="10000"
            name="price"
            readonly={true}
          />

          <Button
            type="button"
            onClick={onPreview}
            className="bg-primary text-white h-12 px-8"
          >
            Preview
          </Button>
          <Button type="submit" className="bg-green-500 text-white h-12 w-full">
            Pay Now
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AdUploadForm;