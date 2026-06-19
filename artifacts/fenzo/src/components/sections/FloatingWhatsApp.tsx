import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6383213966"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
    </a>
  );
}
