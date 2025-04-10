"use client";
import AdUploadForm from "@/components/custom/forms/AduploadForm";
import AdPreview from "@/components/page-sections/ad-upload/AdPreview";
import { adSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type AdFormValues = z.infer<typeof adSchema>;

const UploadAd = () => {
  const form = useForm<AdFormValues>({
    resolver: zodResolver(adSchema),
    defaultValues: {
      title: "",
      description: "",
      adSize: "Large",
      price: "1000",
      banner: "",
      numberOfAds: "1",
      dimensions: "728x90", // Default dimensions
    },
  });

  const [previewUrl, setPreviewUrl] = useState("/leaderboard"); // Default iframe URL
  const [adImageUrl, setAdImageUrl] = useState<string | null>(null); // Image URL for the ad file

  const banner = form.watch("banner");
  const dimensions = form.watch("dimensions");
  const handlePreview = () => {
    const adFile = form.getValues("adFile");

    // Ensure adFile exists and is of the correct type
    if (adFile && adFile.length > 0) {
      const fileUrl = URL.createObjectURL(adFile[0]); // Create URL from the file
      setAdImageUrl(fileUrl);
    } else {
      console.error("Invalid ad file: ", adFile);
    }

    // Update the iframe preview URL
    const formattedBanner = banner.trim().toLowerCase();

    const previewPath = !banner
      ? "https://hosoptima.com/leaderboard"
      : formattedBanner.includes("enterprise")
        ? "https://hosoptima.com/enterprise-training"
        : formattedBanner.includes("guidelines")
          ? "https://hosoptima.com/hos-guidelines"
          : `/${formattedBanner}`;

    setPreviewUrl(previewPath);
  };

  return (
    <div className="main-padding py-6 grid lg:grid-cols-2 gap-6 p-6">
      <AdUploadForm form={form} onPreview={handlePreview} />
      <AdPreview
        previewUrl={previewUrl}
        adImageUrl={adImageUrl}
        dimensions={dimensions}
      />
    </div>
  );
};

export default UploadAd;