import resumePDF from "../assets/resume.pdf";

export default function ResumeModal({ show, onClose }) {
  if (!show) return null; // Render nothing if modal not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 h-3/4 p-4 flex flex-col font-sans">
        
        {/* Header with Close Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black dark:text-white font-[Poppins]">
            My Resume
          </h2>
          <button
            onClick={onClose}
            className="text-black dark:text-white hover:text-pink-500 text-2xl font-bold transition"
          >
            &times;
          </button>
        </div>

        {/* Resume Viewer */}
        <iframe
          src={resumePDF}
          title="Resume"
          className="flex-grow w-full h-full border border-gray-300 dark:border-gray-700 rounded"
        ></iframe>

        {/* Download Button */}
        <a
          href={resumePDF}
          download="Ishica_Resume.pdf"
          className="mt-4 bg-pink-500 text-white dark:bg-white dark:text-black py-2 px-4 rounded-lg self-end hover:bg-pink-600 dark:hover:bg-gray-200 transition"
        >
          Download
        </a>
      </div>
    </div>
  );
}
