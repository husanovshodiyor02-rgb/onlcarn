// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Careers", path: "/careers" },
//     { name: "Blog", path: "/blog" },
//     { name: "About Us", path: "/about" },
//   ];

//   return (
   
//     <header className="relative z-50 bg-[#c3dde7] w-full">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-4">
//         <div className="flex justify-between items-center">
     
//           <Link
//             href="/"
//             className="flex items-center gap-2 text-teal-800 font-bold text-2xl z-50"
//           >
//             <img
//               src="/logo.png"
//               alt="Onlearning Logo"
//               className="h-10 w-auto"
//             />
//           </Link>

  
//           <nav className="hidden md:flex gap-8">
//             {navLinks.map((link) => {
//               const isActive = pathname === link.path;

//               return (
//                 <Link
//                   key={link.name}
//                   href={link.path}
//                   className={`${
//                     isActive
//                       ? "text-[#FA742B] font-bold"
//                       : "text-gray-700 hover:text-teal-800"
//                   } transition-colors`}
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}
//           </nav>

      
//           <div className="hidden md:flex items-center gap-4">
//             <Link
//               href="/login"
//               className="px-6 py-2 bg-white text-teal-800 font-medium rounded-lg shadow-sm hover:bg-gray-50 transition"
//             >
//               LOG IN
//             </Link>
//             <Link
//               href="/signup"
//               className="px-6 py-2 bg-teal-700 text-white font-medium rounded-lg shadow-sm hover:bg-teal-800 transition"
//             >
//               SIGN UP
//             </Link>
//           </div>

       
//           <button
//             className="md:hidden text-teal-800 z-50 p-1"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
//           </button>
//         </div>

       
//         {isOpen && (
//           <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-6 px-4 flex flex-col gap-5 z-50 animate-in slide-in-from-top-2 duration-200">
//             {navLinks.map((link) => {
//               const isActive = pathname === link.path;

//               return (
//                 <Link
//                   key={link.name}
//                   href={link.path}
//                   onClick={() => setIsOpen(false)}
//                   className={`text-lg transition-colors border-b border-gray-50 pb-2 ${
//                     isActive
//                       ? "text-[#FA742B] font-bold"
//                       : "text-gray-800 font-medium hover:text-[#FA742B]"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}
//             <div className="flex flex-col gap-3 mt-2">
//               <Link
//                 href="/login"
//                 onClick={() => setIsOpen(false)}
//                 className="w-full text-center px-6 py-3 bg-gray-100 text-teal-800 font-medium rounded-lg"
//               >
//                 LOG IN
//               </Link>
//               <Link
//                 href="/signup"
//                 onClick={() => setIsOpen(false)}
//                 className="w-full text-center px-6 py-3 bg-teal-700 text-white font-medium rounded-lg shadow-md"
//               >
//                 SIGN UP
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }


"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about" },
  ];

  // Sahifa faol ekanligini tekshirish uchun funksiya
  const checkActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    // Vercelda /about va /about/ turlicha bo'lishi mumkin,
    // shuning uchun startsWith va slashlarni tozalashdan foydalanamiz
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className="relative z-50 bg-[#c3dde7] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-4">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 text-teal-800 font-bold text-2xl z-50"
          >
            <img
              src="/logo.png"
              alt="Onlearning Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => {
              const isActive = checkActive(link.path);

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`${
                    isActive
                      ? "text-[#FA742B] font-bold"
                      : "text-gray-700 hover:text-teal-800"
                  } transition-colors`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* AUTH BUTTONS */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="px-6 py-2 bg-white text-teal-800 font-medium rounded-lg shadow-sm hover:bg-gray-50 transition"
            >
              LOG IN
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-teal-700 text-white font-medium rounded-lg shadow-sm hover:bg-teal-800 transition"
            >
              SIGN UP
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-teal-800 z-50 p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-6 px-4 flex flex-col gap-5 z-50 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = checkActive(link.path);

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg transition-colors border-b border-gray-50 pb-2 ${
                    isActive
                      ? "text-[#FA742B] font-bold"
                      : "text-gray-800 font-medium hover:text-[#FA742B]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="flex flex-col gap-3 mt-2">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-6 py-3 bg-gray-100 text-teal-800 font-medium rounded-lg"
              >
                LOG IN
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-6 py-3 bg-teal-700 text-white font-medium rounded-lg shadow-md"
              >
                SIGN UP
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}