import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { FiTrash2 } from "react-icons/fi";

interface DropzoneProps {
  onChange: (files: File[]) => void;
  files: File[];
  placeholder?: string;
  maxFileLength: number; // Max file length from parent (required and dynamic)
}

const Dropzone: React.FC<DropzoneProps> = ({
  onChange,
  files: externalFiles = [], // Files passed from parent
  placeholder = "Drag & drop your files here, or click to browse",
  maxFileLength,
}) => {
  const [files, setFiles] = useState<File[]>(externalFiles); // Local state for files
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (maxFileLength > 0 && files.length > maxFileLength) {
      const trimmedFiles = files.slice(0, maxFileLength);

      if (files.length !== trimmedFiles.length) {
        setFiles(trimmedFiles);
        onChange(trimmedFiles);
        setErrorMessage(null);
      }
    }
  }, [maxFileLength, files]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const newFiles = [...files, ...acceptedFiles];

      if (maxFileLength > 0 && newFiles.length > maxFileLength) {
        setErrorMessage(`You can only upload up to ${maxFileLength} files.`);
        return;
      }

      setErrorMessage(null); // Clear errors
      setFiles(newFiles); // Update local state
      onChange(newFiles); // Propagate changes to the parent
    },
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"], // Accept only image files
    },
    maxFiles: maxFileLength > 0 ? maxFileLength : undefined, // Enforce max file length only if greater than 0
  });

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles); // Update local state
    onChange(updatedFiles); // Propagate changes
    if (maxFileLength > 0 && updatedFiles.length < maxFileLength) {
      setErrorMessage(null); // Clear errors if under max length
    }
  };

  return (
    <div className="rounded-lg border border-[#d8d8d8] p-3">
      {/* Dropzone */}
      <div
        {...getRootProps()}
        className="p-4 border-dashed border-2 rounded-lg cursor-pointer"
      >
        <Input className="shad-input border-0" {...getInputProps()} />
        <p className="text-sm text-gray-600">{placeholder}</p>
      </div>

      {/* Display selected files */}
      {files.length > 0 && (
        <div className="mt-4">
          <p className="font-bold">Selected File{files.length > 1 && "s"}:</p>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-sm text-gray-600 border-b pb-2"
              >
                <span>
                  {file.name} ({(file.size / 1024).toFixed(2)} KB)
                </span>
                {/* Delete icon */}
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => {
                    handleRemoveFile(index);
                  }}
                  aria-label="Remove file"
                >
                  <FiTrash2 size={16} />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display error message */}
      {errorMessage && (
        <p className="text-red-500 mt-2 text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default Dropzone;