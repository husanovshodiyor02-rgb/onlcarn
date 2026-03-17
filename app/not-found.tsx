import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-[#E8F1F1] p-6 rounded-full mb-6">
        <SearchX className="w-20 h-20 text-teal-800" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
        Oops! Sahifa topilmadi
      </h2>
      <p className="text-gray-600 max-w-md mb-8 text-lg">
        Siz qidirayotgan sahifa (Careers, Blog yoki boshqa) hozircha ishlab
        chiqilmoqda yoki boshqa manzilga ko'chirilgan.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-[#FA742B] text-white font-semibold rounded-lg hover:bg-[#e06524] transition shadow-lg inline-flex items-center gap-2"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
