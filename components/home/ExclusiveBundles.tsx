"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function ExclusiveBundles() {
  const bundles = [
    {
      id: 1,
      title: "Product Management Basic - Course",
      date: "1 - 28 July 2022",
      desc: "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
      price: 380,
      oldPrice: 500,
      students: 40,
      bgColor: "bg-[#0b9b94]", 
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      date: "5 - 30 August 2022",
      desc: "Learn UI/UX design principles and build real-world projects with industry experts from top tech companies.",
      price: 420,
      oldPrice: 600,
      students: 120,
      bgColor: "bg-[#FA742B]", 
    },
    {
      id: 3,
      title: "Fullstack Web Development",
      date: "10 Sept - 10 Dec 2022",
      desc: "Master frontend and backend technologies to become a complete web developer in just 3 months.",
      price: 890,
      oldPrice: 1200,
      students: 85,
      bgColor: "bg-[#4338ca]",
    },
  ];

  return (
    <section className="py-20 w-full bg-white relative overflow-hidden flex flex-col items-center">
  
      <div className="flex flex-col items-center mb-6">
        <div className="relative inline-block text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-800">
            Exclusive Bundles
          </h2>
          <svg
            className="absolute w-[80%] -bottom-3 left-[10%] text-[#FA742B]"
            viewBox="0 0 200 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 10C50 -2 150 -2 198 10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <p className="text-gray-500 max-w-2xl text-center mx-auto mb-16 text-lg px-4">
        Onlearning is one powerful online software suite that combines all the
        tools needed to run a successful school or office.
      </p>

      
      <div className="w-full max-w-350 mx-auto pb-16">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 1.8 },
          }}
          className="bundle-swiper !pb-16"
        >
          {bundles.map((bundle) => (
            <SwiperSlide key={bundle.id}>
              <div className="bundle-card transition-all duration-500 bg-white rounded-[2rem] shadow-lg flex flex-col md:flex-row overflow-hidden border border-gray-100 h-full max-h-[400px]">
             
                <div
                  className={`relative w-full md:w-[45%] h-64 md:h-auto flex items-center justify-center p-8`}
                >
                
                  <Image
                    src="/img4.png"
                    alt="Python Logo"
                    layout="fill"
                    objectFit="contain"
                  />

         
                  <div className="absolute -bottom-5 right-5 md:bottom-5 md:-right-10 bg-white px-5 py-2 rounded-full shadow-lg flex items-center gap-2 z-10 border border-gray-50">
                    <span className="text-[#FA742B] font-bold text-xl">
                      $ {bundle.price}
                    </span>
                    <span className="text-gray-400 text-sm line-through">
                      $ {bundle.oldPrice}
                    </span>
                  </div>
                </div>

             
                <div className="w-full md:w-[55%] p-8 md:p-10 flex flex-col">
                  <p className="text-xs text-gray-400 font-medium mb-2">
                    {bundle.date}
                  </p>
                  <h3 className="text-2xl font-bold text-teal-800 leading-tight mb-4">
                    {bundle.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-8 flex-grow">
                    {bundle.desc}
                  </p>

                
                  <div className="bg-gray-50 rounded-full py-2 pr-4 pl-2 flex items-center shadow-sm w-fit border border-gray-100">
                    <div className="flex -space-x-3">
                      <Image
                        src="/img5.png"
                        alt="Student 1"
                        width={112}
                        height={112}
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                    <span className="text-sm text-gray-700 font-medium ml-3">
                      + {bundle.students} students
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Faol bo'lmagan kartalarni xiralashtirish va kichiklashtirish */
        .bundle-swiper .swiper-slide {
          opacity: 0.4;
          filter: blur(4px);
          transform: scale(0.85);
          transition: all 0.5s ease-in-out;
        }
        /* Faol kartani normal holatga qaytarish */
        .bundle-swiper .swiper-slide-active {
          opacity: 1;
          filter: blur(0);
          transform: scale(1);
        }
        /* Pagination nuqtalarini chiziq (line) shakliga o'tkazish */
        .bundle-swiper .swiper-pagination-bullet {
          width: 25px;
          height: 4px;
          border-radius: 4px;
          background: #cbd5e1;
          opacity: 1;
          transition: 0.3s;
        }
        .bundle-swiper .swiper-pagination-bullet-active {
          width: 50px;
          background: #1e293b;
        }
      `,
        }}
      />
    </section>
  );
}
