import React from 'react';
import { Code2, Palette, Database, Cloud, Smartphone, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'from-purple-500 to-pink-500',
      skills: ['HTML', 'CSS', 'BootStrap', 'React.Js','Tailwind CSS']
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'SQLite']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'from-green-500 to-teal-500',
      skills: ['AWS', 'Vercal',  'Netlify', 'Docker']
    },
   
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 3D Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <category.icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-500 transition-all duration-300">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="flex items-center justify-between group-hover:translate-x-2 transition-all duration-300"
                        style={{ transitionDelay: `${skillIndex * 50}ms` }}
                      >
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {skill}
                        </span>
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
              </div>

              {/* 3D Shadow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl transform translate-y-2 translate-x-2 opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Skill progression indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8">Constantly learning and evolving</p>
          <div className="flex justify-center space-x-4">
            {[1, 2, 3, 4, 5].map((level) => (
              <div
                key={level}
                className="w-12 h-2 bg-gray-700 rounded-full overflow-hidden"
              >
                <div
                  className="h-full bg-gradient-to-r from-purple-400 to-blue-500 rounded-full transform scale-x-0 animate-pulse"
                  style={{
                    animation: `scaleX 2s ease-in-out ${level * 200}ms forwards`,
                    transformOrigin: 'left'
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleX {
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;