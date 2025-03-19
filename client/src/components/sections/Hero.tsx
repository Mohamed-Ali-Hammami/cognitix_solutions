export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-r from-dark to-dark/90 text-white py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl text-white/20">&lt;div&gt;</div>
        <div className="absolute bottom-10 right-10 text-6xl text-white/20">&lt;/div&gt;</div>
        <div className="absolute top-1/3 right-1/4 text-4xl text-white/20">{'{ }'}</div>
        <div className="absolute bottom-1/3 left-1/4 text-4xl text-white/20">{'( )'}</div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building Digital <span className="text-primary">Excellence</span> for Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              We craft innovative web solutions that drive growth and deliver results. Let's transform your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-primary rounded-md font-medium hover:bg-primary/90 transition duration-300 text-center"
              >
                Get Free Consultation
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="px-6 py-3 bg-white/10 rounded-md font-medium hover:bg-white/20 transition duration-300 text-center"
              >
                Explore Services
              </button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center">
                  <i className="fas fa-user text-gray-600"></i>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center">
                  <i className="fas fa-user text-gray-600"></i>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center">
                  <i className="fas fa-user text-gray-600"></i>
                </div>
              </div>
              <p className="text-sm text-gray-300">Trusted by <span className="font-semibold">100+</span> companies worldwide</p>
            </div>
          </div>
          
          <div className="bg-dark/40 rounded-lg p-6 backdrop-blur-sm border border-white/10 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-gray-400 text-sm">index.js</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm md:text-base text-gray-300 overflow-x-auto"><code className="language-javascript">
<span className="text-yellow-400">const</span> <span className="text-green-400">app</span> <span className="text-white">=</span> <span className="text-blue-400">express</span><span className="text-white">();</span>

<span className="text-purple-400">// Cognitix Web Solutions</span>
<span className="text-yellow-400">function</span> <span className="text-blue-400">createAwesomeWebsite</span><span className="text-white">() {'{'}</span>
  <span className="text-yellow-400">const</span> <span className="text-green-400">technologies</span> <span className="text-white">= [</span>
    <span className="text-orange-400">'React'</span><span className="text-white">,</span>
    <span className="text-orange-400">'Node.js'</span><span className="text-white">,</span>
    <span className="text-orange-400">'MongoDB'</span><span className="text-white">,</span>
    <span className="text-orange-400">'AWS'</span>
  <span className="text-white">];</span>
  
  <span className="text-yellow-400">return</span> <span className="text-white">{'{'}</span>
    <span className="text-green-400">result</span><span className="text-white">:</span> <span className="text-orange-400">'Beautiful, fast, and reliable website'</span><span className="text-white">,</span>
    <span className="text-green-400">satisfaction</span><span className="text-white">:</span> <span className="text-purple-400">100</span><span className="text-white">,</span>
    <span className="text-green-400">stack</span><span className="text-white">: technologies</span>
  <span className="text-white">{'}'};</span>
<span className="text-white">{'}'}</span>

<span className="text-blue-400">createAwesomeWebsite</span><span className="text-white">();</span>
            </code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
