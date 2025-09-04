export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 dark:bg-black dark:text-gray-400 text-center py-6 mt-20">
      <p className="text-sm">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
      <p className="text-xs mt-2">
        Built with ❤️ using React & Tailwind
      </p>
    </footer>
  );
}
