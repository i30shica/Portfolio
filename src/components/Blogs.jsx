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

  return (
    <section
      id="blogs"
      className="min-h-screen flex flex-col items-start justify-center 
                 bg-white text-black dark:bg-black dark:text-white 
                 px-12 py-20 font-sans"
    >
      {/* Section heading */}
      <h2 className="text-4xl font-bold mb-10 flex items-center font-[Poppins]">
        <span className="text-pink-500 dark:text-white mr-3">|</span> My Blogs
      </h2>

      {/* Blog posts */}
      <div className="grid grid-cols-1 gap-8 w-full max-w-6xl">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="p-6 border border-gray-300 rounded-xl flex justify-between items-start
                       hover:border-pink-400 dark:hover:border-white transition-colors shadow-sm hover:shadow-lg"
          >
            <div>
              <h3 className="text-lg font-semibold mb-1 text-black dark:text-white">{blog.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{blog.subtitle}</p>
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">
              {blog.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
