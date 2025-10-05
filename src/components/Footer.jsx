export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 dark:bg-black dark:text-gray-400 text-center py-6 mt-20 font-sans">
      <p className="text-sm text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Ishica B. All rights reserved.
      </p>
      <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
        Built with <span className="text-pink-500">❤️</span> using React & Tailwind
      </p>
    </footer>
  );
}
