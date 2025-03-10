
import Image from "next/image";

const CertificateModal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-lg p-4 max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-2xl"
        >
          &times;
        </button>
        <Image
          src={image.path}
          width={800}
          height={600}
          alt={image.title}
          className="object-contain w-full h-full"
        />
        <div className="text-center mt-4 text-black">{image.title}</div>
      </div>
    </div>
  );
};

export default CertificateModal;