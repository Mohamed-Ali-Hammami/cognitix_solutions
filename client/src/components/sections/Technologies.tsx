export default function Technologies() {
  const technologies = [
    { name: "React", icon: "react", color: "text-blue-500" },
    { name: "Node.js", icon: "node-js", color: "text-green-600" },
    { name: "Angular", icon: "angular", color: "text-red-600" },
    { name: "Vue.js", icon: "vuejs", color: "text-green-500" },
    { name: "AWS", icon: "aws", color: "text-yellow-600" },
    { name: "Python", icon: "python", color: "text-blue-700" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We work with the latest and most powerful technologies to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {technologies.map((tech, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <i className={`fab fa-${tech.icon} text-5xl ${tech.color}`}></i>
              <p className="text-center mt-2 text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
