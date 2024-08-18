// links
import Link from "next/link";

// icons
import {RiLinkedinFill,RiGithubFill,RiWhatsappFill} from 'react-icons/ri'


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg ">
      <Link
        href={"https://www.linkedin.com/in/solomon-sala-b86577323/"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300 lg:text-2xl "
      >
        <RiLinkedinFill className="text-[#0A66C2]" />
      </Link>
      <Link
        href={"https://github.com/solarios777"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300 lg:text-2xl"
      >
        <RiGithubFill className="text-[#fff]" />
      </Link>

      <Link
        href={"https://wa.me/+251938838999"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300 lg:text-2xl"
      >
        <RiWhatsappFill className="text-[#25D366]" />
      </Link>
    </div>
  );
};

export default Socials;
