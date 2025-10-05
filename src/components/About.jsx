import me1 from "../assets/me1.jpg"; // 👈 main photo
import chill1 from "../assets/chill1.jpg"; // 👈 first lifestyle photo
import chill2 from "../assets/chill2.jpg"; // 👈 second lifestyle photo

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white px-8 py-20 font-sans"
    >
      <div className="max-w-6xl w-full space-y-16">
        {/* ---------- First Row: About Engineering + Image ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 flex items-center font-[Poppins]">
              <span className="text-pink-500 dark:text-white mr-3">|</span> About Me
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
              I’m currently pursuing my engineering in{" "}
              <span className="font-semibold">Electronics and Computer Science</span>. My journey has been driven by curiosity—how things connect, how systems work, and how technology can create meaningful change. I enjoy bringing together logic and creativity to design solutions that feel both human and efficient.
            </p>
          </div>

          {/* Rounded-rectangle Image */}
          <div className="flex justify-center">
            <img
              src={me1}
              alt="Ishica"
              className="w-80 h-96 object-cover rounded-3xl border-2 border-gray-300 dark:border-gray-500 shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* ---------- Second Row: Beyond 9–5 ---------- */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 flex items-center font-[Poppins]">
            <span className="text-pink-500 dark:text-white mr-3">|</span> Beyond 9–5
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text Section */}
            <div className="space-y-6">
              <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                Outside of coding and engineering, I love exploring the creative side of life — designing presentations, reading heart-touching stories, and finding beauty in little moments. My evenings usually involve music, reflections, and jotting down ideas that someday might become projects or poems.
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                I believe in building a lifestyle that balances passion and peace — where technology meets art, and work blends with meaning. Whether it’s Marvel, BTS, or a cup of coffee with a new idea, I enjoy things that inspire curiosity and connection.
              </p>
            </div>

            {/* Hover-changing Image Section */}
            <div className="flex justify-center">
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden border-2 border-gray-300 dark:border-gray-500 shadow-lg">
                <img
                  src={chill1}
                  alt="Lifestyle 1"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 hover:opacity-0"
                />
                <img
                  src={chill2}
                  alt="Lifestyle 2"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
