import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "LUMI: Digital Companion",
      description:
        "AI-powered chat assistant for Alzheimer's patients, integrating emotion recognition and cognitive engagement.",
      tech: ["React", "Flask", "OpenCV", "SQLite"],
      github: "https://github.com/i30shica/LUMI-Mobile-App",
      live: "https://drive.google.com/file/d/1D3r1FJNsSq1__cn4G4ylTVURSSTKx-VB/view?usp=drive_link",
      notion:
        "https://www.notion.so/LUMI-29b983d258fb80e39188cd32cf8f95a1?source=copy_link",
    },
    {
      title: "Brain Tumor Detection",
      description:
        "Machine learning model for detecting brain tumors using MRI scans with CNN-based image classification.",
      tech: ["Python", "TensorFlow", "OpenCV"],
      github: "https://github.com/i30shica/BrainTumorDetection",
      live: "#",
      notion: "#",
    },
    {
      title: "BARC Internship Project: U-Net Architecture",
      description:
        "Deep learning project at BARC focused on image segmentation using U-Net architecture for scientific data analysis.",
      tech: ["Python", "Keras", "U-Net"],
      github: "https://github.com/i30shica/UNET_ARCH",
      live: "#",
      notion: "#",
    },
    {
      title: "Home Lock System using Arduino",
      description:
        "A smart security system built using Arduino Uno for real-time home safety monitoring and control.",
      tech: ["Arduino", "C++", "Sensors"],
      github: "https://github.com/i30shica/Home-Lock-System-using-Arduino",
      live: "#",
      notion:
        "https://www.notion.so/Home-Lock-System-using-Arduin-295983d258fb8020aed9ddf8809e6150?source=copy_link",
    },
    {
      title: "Sign Language Recognition System",
      description:
        "A real-time gesture detection system translating sign language into text using deep learning and OpenCV.",
      tech: ["Python", "OpenCV", "TensorFlow"],
      github: "#",
      live: "#",
      notion: "#",
    },
    {
      title: "Hospital Management System",
      description:
        "Full-stack MERN application developed during my in-house internship to manage patient and staff data efficiently.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "#",
      live: "#",
      notion: "#",
    },
    {
      title: "Fun Portfolio",
      description:
        "An interactive, animated personal portfolio with a clean design, showcasing my creative experiments with React.",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "#",
      live: "#",
      notion: "#",
    },
  ];

  const [showMore, setShowMore] = useState(false);

  // Show only first 3 initially
  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-start justify-center bg-white text-black dark:bg-black dark:text-white px-6 py-20 font-sans"
    >
      {/* Section title with | */}
      <h2 className="text-4xl font-bold mb-10 flex items-center font-[Poppins]">
        <span className="text-pink-500 mr-3">|</span> Projects
      </h2>

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl w-full">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-gray-300 rounded-xl flex flex-col justify-between
                       hover:border-pink-400 hover:shadow-lg transition-all duration-300"
          >
            {/* Title & description */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 border border-gray-400 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:border-pink-400 hover:text-pink-500 dark:hover:text-white transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 mt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-white flex items-center gap-1 transition"
                  title="View on GitHub"
                >
                  <FaGithub className="h-5 w-5" /> Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-white flex items-center gap-1 transition"
                  title="Visit Website"
                >
                  <FaExternalLinkAlt className="h-4 w-4" /> Site
                </a>
              )}
              {project.notion && (
                <a
                  href={project.notion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-white flex items-center gap-1 transition"
                  title="View Research Notes"
                >
                  <SiNotion className="h-5 w-5" /> Notion
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* More Projects Button */}
      <div className="mt-10 flex justify-center w-full">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-2 text-sm md:text-base border border-pink-400 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300"
        >
          {showMore ? "Show Less" : "More Projects"}
        </button>
      </div>
    </section>
  );
}
