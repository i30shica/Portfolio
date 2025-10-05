import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Currently from "./components/Currently";
import About from "./components/About";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Currently/>
      <About />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
