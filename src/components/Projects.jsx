export default function Projects() {
  const projects = [
    {
      title: "Lumi: Digital Companion",
      description: "A chat-based assistant to support Alzheimer's patients and caregivers.",
      tech: ["React", "Flask", "OpenCV", "SQLite"],
      link: "https://github.com/RaY8118/LUMI-Mobile-App",
    },
    {
      title: "Wellnest App",
      description: "Age-wise wellness tracking with steps, calories, and personalized tips.",
      tech: ["Flutter", "Firebase", "PWA"],
      link: "#",
    },
    {
      title: "Forest Fire AI Simulator",
      description: "ISRO hackathon project: cellular automata + LSTM weather for spread modeling.",
      tech: ["Python", "PyTorch", "NumPy"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-start justify-center bg-gray-50 text-gray-900 dark:bg-black dark:text-white px-6 py-20"
    >
      {/* Section title with | */}
      <h2 className="text-4xl font-bold mb-10 flex items-center">
        <span className="text-white mr-3">|</span> Projects
      </h2>

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-gray-500 rounded-xl flex flex-col justify-between hover:border-white transition"
          >
            {/* Title & description */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 border border-gray-400 rounded-full text-sm text-gray-200 hover:border-white hover:text-white transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* View link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white flex items-center gap-1"
            >
              View{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
