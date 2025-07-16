import { RiLinkedinFill, RiGithubFill, RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white py-8 bg-gray-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Name and Title */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-1">Solomon Sala</h3>
          <p className="text-gray-400">Full-Stack Developer</p>
        </div>

        {/* Location */}
        <div className="text-center">
          <h3 className="text-gray-400">Addis Ababa, Ethiopia</h3>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-2xl">
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all duration-300 text-gray-400 hover:text-blue-500"
            aria-label="LinkedIn"
          >
            <RiLinkedinFill />
          </Link>
          <Link
            href="https://github.com/solarios777"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all duration-300 text-gray-400 hover:text-white"
            aria-label="GitHub"
          >
            <RiGithubFill />
          </Link>
          <Link
            href="https://wa.me/251938838999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all duration-300 text-gray-400 hover:text-green-500"
            aria-label="WhatsApp"
          >
            <RiWhatsappFill />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;