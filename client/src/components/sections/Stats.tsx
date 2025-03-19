export default function Stats() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "100+", label: "Happy Clients" },
    { value: "25+", label: "Team Members" }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
