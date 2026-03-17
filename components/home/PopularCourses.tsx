import { Star } from "lucide-react";
import Image from "next/image";

export default function PopularCourses() {
  const categories = [
    "All Programme",
    "UI/Ux Design",
    "Program Design",
    "Program Design",
    "Program Design",
  ];

  const courses = [
    {
      id: 1,
      title: "Product Management Basic - Course",
      image: "/p1.png",
      students: 40,
      price: 380,
      oldPrice: 500,
    },
    {
      id: 2,
      title: "BM Data Science Professional Certificate",
      image: "/p2.png",
      students: 11,
      price: 678,
      oldPrice: 500,
    },
    {
      id: 3,
      title: "The Science of Well-Being",
      image: "/p3.png",
      students: 234,
      price: 123,
      oldPrice: 500,
    },
    {
      id: 4,
      title: "Python for Everybody Specialization",
      image: "/p4.png", 
      students: 342,
      price: 567,
      oldPrice: 500,
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
      <div className="text-center mb-10 flex flex-col items-center">
        <div className="relative inline-block">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FA742B]">
            Popular Courses
          </h2>
         
          <svg
            className="absolute w-full -bottom-3 left-0 text-teal-700"
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

    
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              index === 0
                ? "bg-teal-700 text-white shadow-md"
                : "bg-white text-gray-500 border border-gray-200 hover:border-teal-700 hover:text-teal-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-visible flex flex-col relative"
          >
     
            <div className="h-40 w-full rounded-t-2xl relative bg-gray-100">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover rounded-t-2xl"
              />
            
              <span className="text-white/50 font-bold">
                Illustration Image
              </span>
            </div>

          
            <div className="absolute top-40 -translate-y-1/2 left-6 bg-white/90 backdrop-blur-sm rounded-full py-1 pr-3 pl-1 flex items-center shadow-sm border border-gray-100 z-10">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 border border-white" />
                <div className="w-6 h-6 rounded-full bg-red-400 border border-white" />
                <div className="w-6 h-6 rounded-full bg-green-400 border border-white" />
              </div>
              <span className="text-[10px] text-gray-600 font-medium ml-2">
                + {course.students} students
              </span>
            </div>

            
            <div className="p-6 pt-8 flex flex-col flex-grow">
              <p className="text-[10px] text-gray-400 font-medium mb-2">
                1 - 28 July 2022
              </p>
              <h3 className="text-lg font-bold text-teal-800 leading-tight mb-3">
                {course.title}
              </h3>
              <p className="text-xs text-gray-500 mb-6 flex-grow">
                Product Management Masterclass, you will learn with Sarah
                Johnson - Head of Product Customer Platform Gojek Indonesia.
              </p>

            
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <span className="text-[#FA742B] font-bold text-lg">
                    $ {course.price}
                  </span>
                  <span className="text-gray-400 text-sm line-through">
                    $ {course.oldPrice}
                  </span>
                </div>
                <button className="bg-teal-700 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-teal-800 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
