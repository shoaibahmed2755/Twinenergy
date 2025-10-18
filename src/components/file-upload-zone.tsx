import React, { useState, useRef } from "react";
import { Upload, File, X } from "lucide-react";

export default function FileUploadZone({ onFileUpload }) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileUpload({ target: { files: [file] } });
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileUpload({ target: { files: [file] } });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const removeFile = () => setFileName(null);

  return (
    <div className="space-y-4">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
          isDragging
            ? "border-emerald-400 bg-emerald-400/10"
            : "border-slate-600 hover:border-slate-500"
        }`}
        onClick={() => inputRef.current?.click()}
      >
        <Upload className="w-10 h-10 mx-auto mb-3 text-emerald-400" />
        <p className="text-white font-medium mb-1">
          Drag & drop your CSV file here
        </p>
        <p className="text-sm text-slate-400 mb-4">or click to browse</p>
        <input
          ref={inputRef}
          type="file"
          accept=".csv"
          onChange={handleFileSelect}
          className="hidden"
        />
        <button
          type="button"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md font-medium transition"
        >
          Choose File
        </button>
      </div>

      {fileName && (
        <div className="mt-4 flex items-center justify-between bg-emerald-400/10 border border-emerald-400/30 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-emerald-300">
            <File className="w-4 h-4" />
            <span className="text-sm">{fileName}</span>
          </div>
          <button
            onClick={removeFile}
            className="text-red-400 hover:text-red-500 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
