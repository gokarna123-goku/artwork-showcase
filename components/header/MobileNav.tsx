"use client";

import { FaX } from "react-icons/fa6";

interface MobileNavProps {
  onClose: () => void;
}

export default function MobileNav({ onClose }: MobileNavProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white">
          <FaX className="h-6 w-6" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 gap-8">
        <button
          className="text-white text-base hover:text-cyan-400 hover:bg-transparent"
          onClick={onClose}
        >
          Explore
        </button>
        <button
          className="text-white text-base hover:text-purple-500 hover:bg-transparent"
          onClick={onClose}
        >
          Artists
        </button>
        <button
          className="text-white text-base hover:text-pink-500 hover:bg-transparent"
          onClick={onClose}
        >
          Collections
        </button>
        <div className="h-8"></div>
        <button
          className="border-2 border-cyan-400 bg-cyan-400/10 text-white hover:bg-cyan-400/10 px-8 py-2 text-base rounded-lg"
          onClick={onClose}
        >
          Sign In
        </button>
      </div>

      <div className="p-6 text-center text-gray-500">© 2025 Art Gallery</div>
    </div>
  );
}
