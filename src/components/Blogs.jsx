export default function Blogs() {
  const blogs = [
    {
      title: "How I designed the Lumi chat room backend",
      subtitle: "From slow face detection to Linux migration—notes from the trenches.",
      date: "Aug 2025",
    },
    {
      title: "Forest-fire spread: lessons from cellular automata",
      subtitle: "Why simple rules can build surprisingly good simulators.",
      date: "Aug 2025",
    },
  ];

  const hobbies = [
    "Reading contemporary fiction",
    "UI experiments in Figma",
    "Photography on evening walks",
    "Writing reflective blog posts",
  ];

  return (
    <section
      id="blogs"
      className="min-h-screen flex flex-col items-start justify-center 
                 bg-white text-black dark:bg-black dark:text-white 
                 px-12 py-20 font-sans"
    >
      {/* Section heading */}
      <h2 className="text-4xl font-bold mb-10 flex items-center">
        <span className="text-black dark:text-white mr-3">|</span> Blog & Hobbies
      </h2>

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Blog posts (2/3 width) */}
        <div className="md:col-span-2 space-y-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="p-6 border border-gray-400 rounded-xl flex justify-between items-start 
                         hover:border-gray-700 dark:hover:border-white transition"
            >
              <div>
                <h3 className="text-lg font-semibold mb-1">{blog.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{blog.subtitle}</p>
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">
                {blog.date}
              </span>
            </div>
          ))}
        </div>

        {/* Hobbies card */}
        <div className="p-6 border border-gray-400 rounded-xl h-fit 
                        hover:border-gray-700 dark:hover:border-white transition"
        >
          <h3 className="text-lg font-semibold mb-3">Hobbies</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            {hobbies.map((hobby, idx) => (
              <li key={idx}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
