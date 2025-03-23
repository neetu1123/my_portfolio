import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12">
                <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                    {/* Replace with your actual image URL */}
                    <img 
                        className="w-64 md:w-80 rounded-full shadow-xl border-4 border-gray-200" 
                        src="/WhatsApp Image 2024-09-23 at 12.34.14 PM.jpeg" 
                        alt="Developer Portrait" 
                    />
                </div>
                
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
                        Hello, I'm <span className="text-blue-600">Neetu Chaurasiya</span>
                    </h1>
                    
                    <div className="space-y-2">
                        <p className="text-xl md:text-2xl font-medium text-gray-600">
                            Frontend Developer
                        </p>
                        <p className="text-lg md:text-xl text-gray-500 max-w-lg mx-auto md:mx-0">
                            "I am a frontend developer passionate about creating beautiful user experiences and eager to learn new technologies."
                        </p>
                    </div>
                    
                    <div className="pt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                        <Link
                            to="/project"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            View My Work
                        </Link>
                        <Link
                            to="/contact"
                            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            Contact Me
                        </Link>
                    </div>
                    
                    <div className="pt-8 flex gap-6 justify-center md:justify-start">
                        {/* Social icons - replace with your actual links */}
                        <a href="https://github.com/neetu1123" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        <a href="mailto:your.neetuchaurasiya5041@gmail.com" className="text-gray-700 hover:text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}