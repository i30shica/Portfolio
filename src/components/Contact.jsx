import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center 
                 bg-white text-black dark:bg-black dark:text-white 
                 px-6 py-20"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 w-full text-left border-l-4 border-black dark:border-white pl-4">
        Contact
      </h2>

      {/* Contact Container */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Left Side - Form */}
        <div className="border border-gray-400 rounded-2xl p-6">
          <form className="flex flex-col space-y-6">
            <div className="flex flex-col items-start">
              <label className="mb-2 text-sm">Name</label>
              <input
                type="text"
                className="w-full rounded-lg bg-white dark:bg-black 
                           border border-gray-400 p-3 
                           focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="flex flex-col items-start">
              <label className="mb-2 text-sm">Email</label>
              <input
                type="email"
                className="w-full rounded-lg bg-white dark:bg-black 
                           border border-gray-400 p-3 
                           focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="flex flex-col items-start">
              <label className="mb-2 text-sm">Message</label>
              <textarea
                rows="4"
                className="w-full rounded-lg bg-white dark:bg-black 
                           border border-gray-400 p-3 
                           focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white dark:bg-white dark:text-black 
                         py-3 rounded-lg font-semibold flex justify-center items-center 
                         hover:bg-gray-800 dark:hover:bg-gray-200 transition"
            >
              <FaEnvelope className="mr-2" /> Send
            </button>
          </form>
        </div>

        {/* Right Side - Elsewhere */}
        <div className="border border-gray-400 rounded-2xl p-6 flex flex-col items-start">
          <h3 className="text-sm mb-6">Elsewhere</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border border-gray-400 
                         px-4 py-2 rounded-lg 
                         hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              <FaGithub /> <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border border-gray-400 
                         px-4 py-2 rounded-lg 
                         hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              <FaLinkedin /> <span>LinkedIn</span>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="flex items-center space-x-2 border border-gray-400 
                         px-4 py-2 rounded-lg 
                         hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              <FaEnvelope /> <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
