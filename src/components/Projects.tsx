import React from 'react';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'PassWallet',
      description: 'A lightweight and secure password manager built with React.js. It allows users to store, view, and manage credentials for multiple websites directly in their browser using localStorage. The app features a copy-to-clipboard, password visibility toggle, and a sleek responsive UI to keep passwords organized and easily accessible.',
      image: 'PassWord.png', // Adjust path if needed (e.g., /PassWord.png or import)
      technologies: ['React', 'Tailwind-CSS', 'LocalStorage', 'Vite', 'GitHub Pages'],
      github: 'https://github.com/shiv9918/PassWord-Manager',
      live: 'https://passvoult.netlify.app/',
      stats: { stars: 124, views: '2.1k' },
    },
    {
      title: 'Maths-Teacher',
      description: 'An interactive web app that helps users solve math problems instantly by uploading images of handwritten or typed questions. It uses the Gemini API to understand the problem and provide step-by-step solutions. Designed for students to quickly get help with algebra, calculus, and other math topics, all in a simple and intuitive UI.',
      image: 'Math.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Gemini API', 'File Upload Handling'],
      github: 'https://github.com/shiv9918/Maths-Teacher',
      live: 'https://mathsteacher.netlify.app/',
      stats: { stars: 89, views: '1.5k' },
    },
    {
      title: 'Weather Analytics Dashboard',
      description: "A web app that visualizes a user's LeetCode performance by fetching and displaying submission data, problem categories, and solved count. Designed to help users track their DSA progress over time with clear, interactive dashboards and structured insights.",
      image: 'LeetMetrices.png',
      technologies: ['HTML', 'CSS', 'Node.js ', 'Express.js', 'LeetCode API'],
      github: 'https://github.com/shiv9918/leetmatrices',
      live: 'https://leetmatrices.netlify.app/',
      stats: { stars: 156, views: '3.2k' },
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  {/* Floating buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-30 pointer-events-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-purple-500 transition-colors duration-300 cursor-pointer pointer-events-auto"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300 cursor-pointer pointer-events-auto"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <div className="absolute bottom-4 left-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 pointer-events-none">
                    <div className="flex items-center space-x-1 text-white text-sm">
                      <Star size={16} className="text-yellow-400" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-white text-sm">
                      <Eye size={16} className="text-blue-400" />
                      <span>{project.stats.views}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-600 rounded-full text-xs text-gray-300 group-hover:border-purple-500/50 group-hover:text-purple-300 transition-all duration-300 transform group-hover:scale-105"
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl transform translate-y-2 translate-x-2 opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10"></div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
};

export default Projects;