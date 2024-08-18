import { FaPhone, FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
  const handleEmailOpen = () => {
    window.location.href = "mailto:tsegasolomon635@gmail.com";
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+251938838999";
  };

  return (
    <div className="flex justify-center items-center text-center bg-[rgba(28,20,54,0.15)] text-white pt-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">
          Ready to elevate your
          <span className="text-accent"> online </span>impact?
        </h1>
        <p className="text-gray-400 mb-8 max-w-[700px] mx-auto">
          I&apos;m all ears! Please don&apos;t hesitate to get in touch with me. I&apos;m here
          to answer any of your questions, address your comments, or discuss any
          inquiries you may have.
        </p>
        <div className="shadow-md rounded-lg p-8">
          <button
            className="px-4 py-2 flex items-center  gap-x-8 rounded-md bg-gray-800 text-white hover:bg-gray-900 font-medium transition-colors mx-auto border-2 border-[#9088af] border-opacity-90 "
            onClick={handleEmailOpen}
          >
            let&apos;s get in touch
            <FaPaperPlane />
          </button>

          <div className="font-medium mx-auto mt-6 flex items-center justify-center gap-x-8 flex-col md:flex-row">
            Phone: +251 938 838
            999
            <button
              className="px-4 py-2 flex rounded-md text-white hover:bg-gray-900 font-medium transition-colors border-2 border-[#9088af] border-opacity-90 lg:border-none"
              onClick={handlePhoneCall}
            >
              <FaPhone className="text-[#25D366] mr-3" />
              Call Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
