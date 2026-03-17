import Image from "next/image";
import { Star } from "lucide-react";

export default function GiftCardSection() {
  const listItems = [
    "Teachers don't get lost in the grid view and have a dedicated Podium space.",
    "Teachers don't get lost in the grid view and have a dedicated Podium space.",
    "Teachers don't get lost in the grid view and have a dedicated Podium space.",
  ];

  return (
    <section className="py-5 max-w-7xl mx-10 md:mx-35 px-4 sm:px-6 lg:px-8 mt-7">

      <div className="relative bg-[#E51920] rounded-[3rem] p-6 md:p-10 flex flex-col md:flex-row items-center md:min-h-[400px] overflow-visible shadow-2xl">
    
        <div className="absolute inset-0 rounded-[3rem] overflow-hidden pointer-events-none">
          <svg
            className="absolute -bottom-20 -left-10 w-[80%] h-full text-white/10"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 200C100 100 200 300 400 0"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0 180C120 80 220 280 400 -20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0 160C140 60 240 260 400 -40"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className="relative z-10 w-full md:w-3/5 flex flex-col items-start gap-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Why You should buy gift cards ?
          </h2>

          <div className="flex flex-col gap-4">
            {listItems.map((text, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Star className="w-3 h-3 text-[#E51920] fill-current" />
                </div>
                <p className="text-white/90 text-sm md:text-base font-medium">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <button className="bg-white text-teal-800 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-50 hover:scale-105 transition-all mt-4">
            BUY NOW
          </button>
        </div>


        <div className="relative w-full md:w-2/5 h-64 md:h-auto mt-12 md:mt-0 flex justify-center md:justify-end z-20">

          <Image 
                src="/w1.png" 
                alt="Woman holding a gift card" 
                width={500} 
                height={600} 
                className="absolute bottom-0 md:-bottom-40 md:right-10 max-w-[300px] md:max-w-[450px] w-230 h-135 object-contain drop-shadow-2xl" 
            />

        </div>
      </div>
    </section>
  );
}
