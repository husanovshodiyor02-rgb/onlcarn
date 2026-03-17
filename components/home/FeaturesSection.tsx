import Image from "next/image";
import { LayoutGrid, Layers, Users } from "lucide-react";

export default function FeaturesSection() {

  const listItems = [
    {
      id: 1,
      icon: <LayoutGrid className="w-5 h-5 text-teal-700" />,
      text: "Teachers don't get lost in the grid view and have a dedicated Podium space.",
    },
    {
      id: 2,
      icon: <Layers className="w-5 h-5 text-[#FA742B]" />,
      text: "TA's and presenters can be moved to the front of the class.",
    },
    {
      id: 3,
      icon: <Users className="w-5 h-5 text-teal-800" />,
      text: "Teachers can easily see all students and class data at one time.",
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
     
        <div className="flex flex-col items-start gap-6">
          <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium">
            Benefits
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-800 leading-tight">
            Get Student ID card
          </h2>
          <div className="flex flex-col gap-6 mt-4">
            {listItems.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

     
        <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] bg-[#E8F1F1] rounded-3xl flex items-center justify-center p-8 overflow-hidden">
         
          <div className="absolute -right-20 -top-20 w-[400px] h-[400px] border-[1px] border-white/40 rounded-full" />
          <div className="absolute -left-20 -bottom-20 w-[300px] h-[300px] border-[1px] border-white/40 rounded-full" />

    
          <Image src="/img2.png" alt="Student ID Cards" fill className="object-contain p-8" />
          <div className="text-teal-800/40 font-bold text-xl text-center">
            ID Cards Image <br /> (Replace with next/image)
          </div>
        </div>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
 
        <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] rounded-3xl flex items-center justify-center order-2 md:order-1">
      
          <Image src="/img3.png" alt="Staff Training" fill className="object-contain" />
          <div className="w-full h-full bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-bold text-xl text-center">
            Training Illustration Image <br /> (Replace with next/image)
          </div>
        </div>

       
        <div className="flex flex-col items-start gap-6 order-1 md:order-2">
          <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
            Training
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FA742B] leading-tight">
            Staff training
          </h2>
          <div className="flex flex-col gap-6 mt-4">
            {listItems.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
