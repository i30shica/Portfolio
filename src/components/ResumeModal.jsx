import React from "react";

export default function ResumeModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      {/* Resume Container */}
      <div className="relative bg-gray-900 p-4 rounded-2xl w-[90%] h-[90vh] shadow-2xl flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-3xl font-bold"
        >
          ×
        </button>

        <h2 className="text-white text-2xl font-semibold mb-3 text-center">
          My Resume
        </h2>

        {/* PDF Viewer (Google Drive Embed) */}
        <iframe
          src="https://drive.google.com/file/d/1b5ptDy9sBevy-NE8WBayptY9CXIwZHxl/preview"
          className="flex-1 w-full rounded-md"
          style={{
            border: "none",
            height: "100%",
          }}
          allow="autoplay"
        ></iframe>

        {/* Download Button */}
        <div className="flex justify-center mt-4">
          <a
            href="https://drive.google.com/uc?export=download&id=1b5ptDy9sBevy-NE8WBayptY9CXIwZHxl"
            className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-pink-200 transition-colors"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
