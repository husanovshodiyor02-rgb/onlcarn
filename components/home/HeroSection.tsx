import Image from "next/image";
import { Play, Star, Calendar, BarChart2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[#c3dde7]">
      <div className="relative rounded-b-[3rem] pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
      
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-b-[3rem]">
          <div className="absolute -top-20 right-[10%] w-[800px] h-[800px] border-[1px] border-white/40 rounded-full" />
          <div className="absolute -top-10 right-[20%] w-[600px] h-[600px] border-[1px] border-white/30 rounded-full" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
          <div className="flex flex-col items-start gap-6">
            <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium text-sm shadow-sm inline-block">
              Never stop learning
            </span>
            <h1 className="text-3xl lg:text-6xl font-bold text-teal-800 leading-tight">
              Grow up your skills by online courses with{" "}
              <span className="text-teal-700">Onlearning</span>
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-4">
              <button className="bg-[#FA742B] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e06524] transition shadow-lg">
                EXPLORE PATH
              </button>

           
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img src="/ava1.png" alt="" />
                </div>
                <div>
                  <div className="flex text-gray-800">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4" /> 
                  </div>
                  <p className="text-xs text-gray-600 font-medium">
                    ( 10k+ Reviews )
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="relative flex justify-center lg:justify-end">
    
            <div className="relative w-full max-w-[500px] aspect-[4/5] bg-transparent">
        
              <div className="w-full h-full object-cover rounded-b-3xl" />

              
              <Image
                src="/img1.png"
                alt="Student"
                fill
                className="object-cover"
                priority
              />

        
              <div className="absolute bottom-[20%] -left-10 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center text-white">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">250k</h3>
                  <p className="text-sm text-gray-600 font-medium">
                    Assisted Student
                  </p>
                </div>
              </div>

             
              <div className="absolute top-[40%] -right-4 bg-[#FA742B] w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center text-white animate-pulse">
                <BarChart2 className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>

       
        <div className="absolute left-1/2 -bottom-16 -translate-x-1/2 w-40 h-40 bg-[#E8F1F1] rounded-full flex items-center justify-center z-20 p-2">
          <div className="w-full h-full bg-teal-800 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform shadow-xl relative">
          
            <Play className="w-12 h-12 ml-2 fill-current" />
            <svg
              viewBox="0 0 100 100"
              className="absolute w-full h-full -rotate-90"
            >
              <path
                id="circlePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="transparent"
              />
              <text className="text-[10px] fill-white font-bold tracking-widest uppercase">
                <textPath href="#circlePath" startOffset="0%">
                  Explore More • Explore More •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
