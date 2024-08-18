import { RiLinkedinFill, RiGithubFill, RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Solomon Sala */}
        <div >
          <h3 className="ml-4 md:ml-0 mb-0 md;mb-2">Solomon Sala</h3>
          <p className="mb-2 md:mb-0">Full-Stack Developer</p>
        </div>

        {/* Addis Abeba, Ethiopia */}
        <div>
          <h3 className=" mb-2">Addis Abeba, Ethiopia</h3>
        </div>

        {/* gggee */}
        <div className="flex items-center gap-x-5 text-lg ">
          <Link
            href={"https://www.linkedin.com/in/solomon-sala-b86577323/"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all duration-300  "
          >
            <RiLinkedinFill />
          </Link>
          <Link
            href={"https://github.com/solarios777"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all duration-300 "
          >
            <RiGithubFill />
          </Link>

          <Link
            href={"https://wa.me/+251938838999"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-all duration-300 "
          >
            <RiWhatsappFill />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
