import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center bottom'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="min-h-screen flex items-center">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Text content */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold text-white">
                    <span className="block transform hover:scale-105 transition-transform duration-300">
                      Shivam <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Mishra  </span>
                    </span>
                  </h1>
                  
                  <div className="text-xl md:text-2xl text-gray-300 space-y-2">
                    <p className="transform hover:translate-x-2 transition-transform duration-300">Full Stack Developer</p>
                    <p className="transform hover:translate-x-2 transition-transform duration-300 delay-100">& Creative Problem Solver</p>
                  </div>

                  <p className="text-lg text-gray-400 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
                    Crafting beautiful, functional, and user-friendly digital experiences 
                    with modern technologies and creative solutions.
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center lg:justify-start space-x-6 pt-8">
                    {[
                      { Icon: Github, href: 'https://github.com/shiv9918', color: 'hover:text-gray-300' },
                      { Icon: Linkedin, href: 'https://www.linkedin.com/in/shivam-mishra-8a6169285/', color: 'hover:text-blue-400' },
                    ].map(({ Icon, href, color }, index) => (
                      <a
                        key={index}
                        href={href}
                        className={`text-gray-500 ${color} transform hover:scale-125 hover:-translate-y-1 transition-all duration-300`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Icon size={28} />
                      </a>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                    <a
                      href="/Resume.pdf"
                      download="Shivam_Mishra_Resume.pdf"
                      className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:shadow-purple-500/25 text-center"
                    >
                      My Resume
                    </a>
                    <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold transform hover:scale-105 hover:bg-purple-400 hover:text-white transition-all duration-300">
                      Contact Me
                    </button>
                  </div>
                </div>
              </div>

              {/* Right side - Hero Photo */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative group">
                  {/* Main photo container with 3D effects */}
                  <div className="relative w-80 h-80 md:w-96 md:h-96">
                    {/* Background decorative elements */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-teal-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                    
                    {/* Photo frame with 3D border */}
                    <div className="relative w-full h-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 rounded-3xl p-1 transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500 shadow-2xl group-hover:shadow-purple-500/25">
                      <div className="w-full h-full bg-gray-800 rounded-3xl overflow-hidden">
                        {/* Professional photo placeholder */}
                        <img
                          src="photo1.jpg"
                          alt="John Doe - Full Stack Developer"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Overlay gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* Floating skill badges */}
                    <div className="absolute -top-4 left-8 bg-gray-900/90 backdrop-blur-sm border border-purple-500/50 rounded-full px-4 py-2 text-sm text-purple-300 font-medium transform -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      React
                    </div>
                    <div className="absolute top-16 -right-6 bg-gray-900/90 backdrop-blur-sm border border-blue-500/50 rounded-full px-4 py-2 text-sm text-blue-300 font-medium transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 delay-100 shadow-lg">
                      Flask
                    </div>
                    <div className="absolute bottom-12 -left-8 bg-gray-900/90 backdrop-blur-sm border border-teal-500/50 rounded-full px-4 py-2 text-sm text-teal-300 font-medium transform -rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 delay-200 shadow-lg">
                      Python
                    </div>
                    <div className="absolute -bottom-2 right-12 bg-gray-900/90 backdrop-blur-sm border border-pink-500/50 rounded-full px-4 py-2 text-sm text-pink-300 font-medium transform rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 delay-300 shadow-lg">
                      AWS
                    </div>

                  
                  </div>

                  {/* 3D shadow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl transform translate-y-8 translate-x-8 opacity-50 group-hover:opacity-30 group-hover:translate-y-12 group-hover:translate-x-12 transition-all duration-500 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;