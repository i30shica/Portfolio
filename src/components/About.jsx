export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white px-12 py-20 font-sans"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left column - About text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 flex items-center">
            <span className="text-black dark:text-white mr-3">|</span> About
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a developer who enjoys building helpful, minimal products. My recent
            work spans conversational UIs, wellness apps, and simulation models.  
            I care about <span className="font-semibold">clean UX</span>, reliable systems, 
            and humane technology.
          </p>
        </div>

        {/* Right column - Skills & Interests */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Python",
                "Flask",
                "SQL",
                "Firebase",
                "Flutter",
                "Tailwind",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 border border-gray-500 rounded-full text-sm 
                             text-black dark:text-gray-200 
                             hover:border-gray-700 dark:hover:border-white 
                             hover:text-black dark:hover:text-white 
                             transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Interests</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "ML for healthcare",
                "Assistive tech",
                "Clean UI",
                "Systems thinking",
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-1 border border-gray-500 rounded-full text-sm 
                             text-black dark:text-gray-200 
                             hover:border-gray-700 dark:hover:border-white 
                             hover:text-black dark:hover:text-white 
                             transition"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
