export default function CoursesCategory() {
  const categories = [
    {
      id: 1,
      icon: "💅",
      iconBg: "bg-blue-100",
      title: "Beauty",
      isActive: false,
    },
    {
      id: 2,
      icon: "💉",
      iconBg: "bg-pink-100",
      title: "medical",
      isActive: false,
    },
    {
      id: 3,
      icon: "🏋️‍♂️",
      iconBg: "bg-blue-900 text-white rounded-full",
      title: "sports",
      isActive: true, 
    },
    {
      id: 4,
      icon: "🍞",
      iconBg: "bg-orange-100",
      title: "Nutrition",
      isActive: false,
    },
  ];

  return (
    <section className="py-20 bg-[#fafcfc] text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
   
        <div className="flex flex-col items-center mb-6">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-800">
              Courses Category
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

        <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
          Onlearning is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item) => (
            <div
              key={item.id}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-between min-h-[300px] border border-gray-50/50 ${
                item.isActive ? "shadow-md scale-105" : ""
              }`}
            >
              <div className="flex flex-col items-center">
              
                <div
                  className={`w-16 h-16 flex items-center justify-center text-3xl rounded-full mb-6 ${item.iconBg}`}
                >
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-teal-800 capitalize mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 text-center mb-8 px-4">
                  One powerful online software suite that combines
                </p>
              </div>

     
              <button
                className={`px-6 py-2 rounded-full text-sm font-semibold w-full transition-colors ${
                  item.isActive
                    ? "bg-[#FA742B] text-white hover:bg-[#e06524]"
                    : "bg-transparent text-teal-700 border border-gray-100 shadow-sm hover:border-teal-700"
                }`}
              >
                {item.isActive ? "Explore courses" : "more"}
              </button>
            </div>
          ))}
        </div>

      
        <div className="mt-16">
          <button className="px-12 py-3 border border-teal-700 text-teal-700 font-semibold rounded-lg hover:bg-teal-700 hover:text-white transition-colors">
            view all
          </button>
        </div>
      </div>
    </section>
  );
}
