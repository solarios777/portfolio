// next image
import Image from "next/image";

// next link
import Link from "next/link";

import { RiLinkedinFill, RiGithubFill, RiWhatsappFill } from "react-icons/ri";

// components
import Socials from "../components/Socials";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let observer;

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    };

    if (headerRef.current) {
      observer = new IntersectionObserver(handleObserver, {
        rootMargin: "-1px 0px 0px 0px",
      });
      observer.observe(headerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <header
        className="absolute z-30 w-full top-0 flex items-center px-16 xl:px-0 xl:h-[90px]"
        ref={headerRef}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-0 xl:py-8">
            {/* logo */}
            <Link href={"#home"}>
              <Image
                src={"/removebg-preview.svg"}
                width={220}
                height={28}
                alt=""
                property={true}
              />
            </Link>
            {/* Socials */}
            <Socials />
          </div>
        </div>
      </header>

      {showButton && (
        <>
          <Link
            href={"#home"}
            className="fixed top-4 left-4 lg:left-24 px-4  rounded-md z-40"
          >
            <Image
              src={"/removebg-preview.svg"}
              width={120}
              height={48}
              alt=""
              property={true}
              className="hidden lg:block"
            />
            <Image
              src={"/removebg-preview.svg"}
              width={70}
              height={28}
              alt=""
              property={true}
              className="lg:hidden"
            />
          </Link>
          <div className="flex items-center gap-x-5 text-lg fixed top-4 lg:top-6 right-4 lg:right-24 z-50 px-4 py-2 rounded-md z-40">
            <Link
              href={"https://www.linkedin.com/in/solomon-sala-b86577323/"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-all duration-300 lg:text-2xl"
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
        </>
      )}
    </>
  );
};
export default Header;
