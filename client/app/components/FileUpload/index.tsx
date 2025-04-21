"use client";

// React Import
import React, { FC } from "react";

// Npm package Import
import { Upload } from "lucide-react";

type Props = {};

const FileUpload: FC = (props: Props) => {
  const handleUploadPDF = () => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.setAttribute("accept", ".pdf");
    el.addEventListener("change", (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      console.log(file);
    });
    el.click();
  };
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl flex justify-center items-center p-6 rounded-xl border-2 border-opacity-50 border-blue-400 hover:border-blue-300 transition-all duration-300 hover:shadow-blue-900/20">
      <button
        className="flex flex-col justify-center items-center gap-5 cursor-pointer group"
        onClick={handleUploadPDF}
      >
        <h3 className="text-xl font-semibold text-blue-100">Upload PDF File</h3>
        <div className="p-4 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-all duration-300">
          <Upload className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <p className="text-sm text-blue-200/60">
          Drag and drop or click to upload
        </p>
      </button>
    </div>
  );
};

export default FileUpload;
