import Link from "next/link";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#DDECEB] pt-32 pb-12 mt-20 overflow-hidden">
     
      <div className="absolute top-0 left-0 w-full h-[150px] bg-white rounded-b-[50%] scale-[1.5] -translate-y-1/2 border-b-[1px] border-gray-400/30 z-10"></div>


      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="#000"
            strokeWidth="1"
          />
          <circle
            cx="200"
            cy="200"
            r="140"
            fill="none"
            stroke="#000"
            strokeWidth="1"
          />
          <circle
            cx="200"
            cy="200"
            r="100"
            fill="none"
            stroke="#000"
            strokeWidth="1"
          />
          <path
            d="M0 200 Q 100 100 200 0"
            fill="none"
            stroke="#000"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
    
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Onlearning" className="h-10 w-auto" />
            </Link>

            <div className="flex flex-col gap-4 text-sm text-teal-900/80 font-medium mt-2">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 flex-shrink-0 text-teal-800" />
                <div>
                  <p className="font-bold text-teal-800 mb-1">Address:</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 flex-shrink-0 text-teal-800" />
                <p>Tel : +9229341037</p>
              </div>
              <div className="flex gap-3 items-center">
                <Clock className="w-5 h-5 flex-shrink-0 text-teal-800" />
                <p>Response hours: 8 to 20</p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 flex-shrink-0 text-teal-800" />
                <p>Email: info@onlearn.com</p>
              </div>
            </div>
          </div>

         
          <div>
            <h3 className="text-xl font-bold text-teal-900 mb-6">Categories</h3>
            <ul className="flex flex-col gap-4 text-teal-900/80 font-medium">
              <li>
                <Link
                  href="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Counseling
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Health and fitness
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Individual development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  more
                </Link>
              </li>
            </ul>
          </div>

     
          <div>
            <h3 className="text-xl font-bold text-teal-900 mb-6">Links</h3>
            <ul className="flex flex-col gap-4 text-teal-900/80 font-medium">
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-500 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-orange-500 transition-colors"
                >
                  blog
                </Link>
              </li>
            </ul>
          </div>

        
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <h3 className="text-gray-600 mb-4 w-full">
              Stay up to date with the latest courses
            </h3>
            <form className="w-full bg-white p-1.5 rounded-full flex items-center shadow-md border border-gray-100 max-w-sm">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow bg-transparent px-4 py-2 outline-none text-gray-700 w-full"
                required
              />
              <button
                type="submit"
                className="bg-teal-700 text-white px-8 py-2.5 rounded-full font-semibold hover:bg-teal-800 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
