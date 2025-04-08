export default function Footer() {
  return (
    <footer className="text-center p-4 bg-black text-white">
      <div className="flex justify-center space-x-4 mb-2">
        {/* GitHub Icon */}
        <a
          href="https://github.com/dovushman"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2 rounded-full bg-transparent transition hover:text-gray-400"
        >
          <i className="devicon-github-original text-2xl"></i>
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/dov-ushman/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-2 rounded-full bg-transparent transition hover:text-gray-400"
        >
          <i className="devicon-linkedin-plain text-2xl"></i>
        </a>
      </div>
      <p>© 2025 Dov Ushman</p>
    </footer>
  );
}