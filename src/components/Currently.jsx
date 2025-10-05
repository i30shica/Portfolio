// src/components/Currently.jsx

export default function Currently() {
  const items = [
    {
      title: "Job Hunting & Projects",
      value: (
        <>
          Actively applying and building cool projects 💻 –{" "}
          <a
            href="https://github.com/YourUsername"
            target="_blank"
            className="text-pink-500 dark:text-pink-400 underline hover:text-pink-400 dark:hover:text-pink-300"
          >
            Watch me hustle
          </a>
        </>
      ),
    },
    {
      title: "Reading",
      value: "The Friends by Fredrik Backman 📚",
    },
    {
      title: "Binge Watching",
      value: "Modern Family 📺 – laughter guaranteed!",
    },
    {
      title: "Starva Streak",
      value: (
        <>
          Trying very hard to not break my streak 🔥 –{" "}
          <a
            href="https://starva.com/YourProfile"
            target="_blank"
            className="text-red-500 dark:text-red-400 underline hover:text-red-400 dark:hover:text-red-300"
          >
            Check it here
          </a>
        </>
      ),
    },
    {
      title: "Recently Visited",
      value: "Andaman Islands 🌴 – completely in love with it!",
    },
    {
      title: "Personal Growth",
      value: "Learning new things and experimenting daily 🌟",
    },
  ];

  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center font-[Poppins] text-black dark:text-white">
        Currently
      </h2>
      <div className="flex flex-col gap-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-black border border-gray-300 dark:border-white rounded-2xl p-6 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-200 dark:hover:shadow-white/20"
          >
            <h3 className="text-xl font-semibold mb-1 text-black dark:text-white font-[Poppins]">
              {item.title}
            </h3>
            <p className="text-gray-800 dark:text-gray-300 italic">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
