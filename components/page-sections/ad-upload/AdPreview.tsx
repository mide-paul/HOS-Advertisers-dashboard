import React, { useEffect, useRef } from "react";

interface AdPreviewProps {
  previewUrl: string;
  adImageUrl: string | null;
  dimensions: string;
}

const AdPreview: React.FC<AdPreviewProps> = ({
  previewUrl,
  adImageUrl,
  dimensions,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!adImageUrl || !iframeRef.current) return;

    const iframe = iframeRef.current;
    const iframeDocument =
      iframe.contentDocument ?? iframe.contentWindow?.document;

    if (iframeDocument) {
      // Replace all images in the iframe with the uploaded ad image
      // Replace all <img> elements with the id "ad-image" in the iframe
      const images = iframeDocument.querySelectorAll("img#ad-image");

      images.forEach((img) => {
        const imageElement = img as HTMLImageElement; // Explicitly cast to HTMLImageElement
        imageElement.src = adImageUrl;

        console.log("Original width:", imageElement.width);
        console.log("Original height:", imageElement.height);

        console.log("Intrinsic width:", imageElement.naturalWidth);
        console.log("Intrinsic height:", imageElement.naturalHeight);

        // Set dimensions based on the selected option
        const [width, height] = dimensions.split("x").map(Number);
        imageElement.style.width = `${width}px`;
        imageElement.style.height = `${height}px`;
      });
    }
  }, [adImageUrl, dimensions]);

  return (
    <div className="border rounded-lg min-h-screen">
      <iframe
        ref={iframeRef}
        src={previewUrl}
        className="w-full h-full rounded"
        title="Ad Preview"
      />
    </div>
  );
};

export default AdPreview;