import me1 from "../assets/me1.jpg"; // 👈 main photo
import chill1 from "../assets/chill1.jpg"; // 👈 lifestyle photo 1
import chill2 from "../assets/chill2.jpg"; // 👈 lifestyle photo 2
import chill3 from "../assets/chill3.jpg"; // 👈 lifestyle photo 3
// import chill4 from "../assets/chill4.jpg";
// import chill5 from "../assets/chill5.jpg";
// import chill6 from "../assets/chill6.jpg";
// import chill7 from "../assets/chill7.jpg";
// import chill8 from "../assets/chill8.jpg";
// import chill9 from "../assets/chill9.jpg";
// import chill10 from "../assets/chill10.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white px-8 py-20 font-sans"
    >
      <div className="max-w-6xl w-full space-y-24">
        {/* ---------- First Row: About Engineering + Image ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 flex items-center font-[Poppins]">
              <span className="text-pink-500 dark:text-white mr-3">|</span> About Me
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
              I’m a 2025 engineering graduate passionate about building intuitive and
              impactful projects — especially those that make a real difference in
              people’s lives. Most of my work focuses on healthcare and assistive
              technologies, where I love combining technical problem-solving with
              human-centered design. As a fresher, I’m eager to keep exploring ideas
              that bridge innovation and empathy through code.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 flex items-center font-[Poppins]">
              <span className="text-pink-500 dark:text-white mr-3">|</span> Off the Clock
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                I love trying out new things and slowly building hobbies — learning to
                enjoy the process instead of expecting to be instantly good at
                everything. It’s been a quiet reminder to stay curious, patient, and
                kind to myself while I grow beyond just projects.
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                You can catch glimpses of what I’m exploring in my Currently section or
                occasionally on social media — I don’t post often, but I’m always up for
                a good conversation about what I’m learning or obsessed with lately.
              </p>
            </div>
          </div>

          {/* Hover-changing Image Section */}
          <div className="flex justify-center">
            <div className="relative w-80 h-96 rounded-3xl overflow-hidden border-2 border-gray-300 dark:border-gray-500 shadow-lg group">
              <img
                src={chill1}
                alt="Lifestyle 1"
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-700"
              />
              <img
                src={chill2}
                alt="Lifestyle 2"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"
              />
              <img
                src={chill3}
                alt="Lifestyle 3"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-500"
              />
              {/* <img src={chill4} alt="Lifestyle 4" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-700" /> */}
              {/* <img src={chill5} alt="Lifestyle 5" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-900" /> */}
              {/* <img src={chill6} alt="Lifestyle 6" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-1100" /> */}
              {/* <img src={chill7} alt="Lifestyle 7" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-1300" /> */}
              {/* <img src={chill8} alt="Lifestyle 8" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-1500" /> */}
              {/* <img src={chill9} alt="Lifestyle 9" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-1700" /> */}
              {/* <img src={chill10} alt="Lifestyle 10" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-1900" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
