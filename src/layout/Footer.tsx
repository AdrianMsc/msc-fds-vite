interface FooterProps {
  toggleModal: () => void;
}

const Footer = ({ toggleModal }: FooterProps) => {
  return (
    <footer className="flex flex-col md:flex-row items-center w-full py-4 px-6 md:px-15 xl:px-20 bg-white justify-between md:items-end h-fit">
      <button
        className="msc-btn msc-btn-sm msc-btn-blue-outline md:order-2"
        onClick={toggleModal}
      >
        Give Feedback
      </button>
      <div className="flex flex-row text-center content-center mt-2">
        <p className="text-xs text-gray-500 text-nowrap self-center">
          All Rights Reserved
        </p>
        <div className="border-l mx-3 border-gray-400"></div>
        <p className="text-xs text-gray-500 self-center">
          © 2000 - 2025 MSC Industrial Direct Co., Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
