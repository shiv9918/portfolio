import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code.'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful and intuitive user experiences.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized solutions for fast and responsive applications.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Love for technology and continuous learning.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
               I'm a passionate full-stack developer currently pursuing B.Tech in Computer Science, 
with hands-on experience in building responsive and user-friendly web applications. 
I specialize in modern web technologies like React, Node.js, and Supabase, and I enjoy 
turning real-world problems into clean, functional digital solutions.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>  

              <div className="flex flex-wrap gap-3">
                {['React', 'Taiwind CSS', 'Bootstrap', 'Python', 'AWS'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 transform hover:scale-110 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
      
      </div>
    </section>
  );
};

export default About;