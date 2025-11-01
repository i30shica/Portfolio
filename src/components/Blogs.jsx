export default function Blogs() {
  const blogs = [
    {
      title: "From Building to Protecting: My First Step into Cybersecurity",
      subtitle: "How my curiosity for technology led me to explore the world of cybersecurity.",
      date: "Oct 2025",
      link: "https://medium.com/@ishicab205/from-building-to-protecting-my-first-step-into-cybersecurity-d156d486031a",
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
          <a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-gray-300 rounded-xl flex justify-between items-start
                       hover:border-pink-400 dark:hover:border-white transition-colors shadow-sm hover:shadow-lg"
          >
            <div>
              <h3 className="text-lg font-semibold mb-1 text-black dark:text-white">
                {blog.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {blog.subtitle}
              </p>
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">
              {blog.date}
            </span>
          </a>
        ))}
      </div>

      {/* Substack Section */}
      <div className="mt-16 border-t border-gray-700 pt-8 w-full max-w-6xl">
        <h3 className="text-2xl font-semibold mb-2 font-[Poppins]">
          Personal Writings on Substack
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Beyond tech, I share thoughts about life, growth, and small reflections that inspire me.
        </p>
        <a
          href="https://halfwrittenthoughts.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-pink-500 hover:bg-pink-600 
                     text-white rounded-lg transition-colors font-medium"
        >
          Visit My Substack →
        </a>
      </div>
    </section>
  );
}
