import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Project() {
    const [activeFilter, setActiveFilter] = useState('all');
    
    const projects = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "A responsive admin dashboard for an e-commerce platform with product management, analytics, and order processing features.",
            image: "/images (1).jpeg",
            category: "web",
            technologies: ["React", "Redux", "Tailwind CSS", "Chart.js"],
            demoLink: "https://demo.example.com",
            githubLink: "https://github.com/neetu1123/ecommerce-dashboard"
        },
        {
            id: 2,
            title: "Social Media App",
            description: "A fully responsive social media application with real-time messaging, post creation, and user authentication.",
            image: "/scoialmedia.jpeg",
            category: "web",
            technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
            demoLink: "https://demo.example.com",
            githubLink: "https://github.com/neetu1123/social-media-app"
        },
        {
            id: 3,
            title: "Weather Forecast App",
            description: "A weather application that provides real-time weather data and forecasts using an external API.",
            image: "/weatherforecast.jpg",
            category: "web",
            technologies: ["React", "API Integration", "CSS"],
            demoLink: "https://demo.example.com",
            githubLink: "https://github.com/neetu1123/weather-app"
        },
        {
            id: 4,
            title: "Task Management Tool",
            description: "A Kanban-style task management application with drag-and-drop functionality, task assignment, and progress tracking.",
            image: "/task_management.jpeg",
            category: "web",
            technologies: ["Vue.js", "Vuex", "CSS", "Node.js"],
            demoLink: "https://demo.example.com",
            githubLink: "https://github.com/neetu1123/task-manager"
        },
        {
            id: 5,
            title: "Personal Portfolio Website",
            description: "A responsive portfolio website showcasing projects and skills with modern design and animations.",
            image: "/my_portfolio.jpg",
            category: "web",
            technologies: ["React", "Tailwind CSS", "Framer Motion"],
            demoLink: "https://demo.example.com",
            githubLink: "https://github.com/neetu1123/portfolio"
        },
        {
            id: 6,
            title: "Recipe Finder Application",
            description: "An application that helps users find recipes based on ingredients they already have.",
            image: "/recipe_finder.png",
            category: "web",
            technologies: ["React", "API Integration", "CSS"],
            demoLink: "https://demo.example.com",
            githubLink: "https://github.com/neetu1123/recipe-finder"
        }
    ];
    
    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);
        
    const filterCategories = [
        { id: 'all', name: 'All Projects' },
        { id: 'web', name: 'Web Apps' },
        { id: 'mobile', name: 'Mobile Apps' },
        { id: 'ui', name: 'UI/UX Design' }
    ];

    return (
        <div className="mx-auto w-full max-w-7xl px-6 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">My Projects</h1>
                <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Explore my recent web development projects. Each project represents my commitment to clean code, 
                    user-friendly interfaces, and solving real-world problems.
                </p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {filterCategories.map(category => (
                    <button 
                        key={category.id}
                        onClick={() => setActiveFilter(category.id)}
                        className={`px-6 py-2 rounded-full transition-all duration-300 ${
                            activeFilter === category.id 
                                ? 'bg-blue-600 text-white shadow-md' 
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                    <div 
                        key={project.id} 
                        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                    >
                        {/* Project Image with Overlay */}
                        <div className="relative overflow-hidden h-60">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                                <div className="p-4 w-full flex justify-between items-center">
                                    <a 
                                        href={project.demoLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Live Demo
                                    </a>
                                    <a 
                                        href={project.githubLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* Project Info */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        {/* Border Animation */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                    </div>
                ))}
            </div>
            
            {/* CTA Section */}
            <div className="mt-16 text-center p-8 bg-gray-50 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    I'm always looking for new opportunities and collaborations. Let's create something amazing together!
                </p>
                <NavLink 
                    to="/contact" 
                    className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Get in Touch
                </NavLink>
            </div>
        </div>
    );
}