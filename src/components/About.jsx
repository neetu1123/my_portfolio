import React from 'react';

export default function About() {
    return (
        <div className="mx-auto w-full max-w-7xl px-6 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h1>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Left column - Photo and quick info */}
                <div className="md:col-span-1">
                    <div className="sticky top-20">
                        <img 
                            src="/professional_image.jpeg" 
                            alt="Professional Photo" 
                            className="w-full h-auto rounded-lg shadow-lg mb-6"
                        />
                        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                            <h3 className="font-bold text-xl mb-3">At a Glance</h3>
                            <div className="space-y-2">
                                <p className="flex justify-between">
                                    <span className="font-medium text-gray-600">Name:</span>
                                    <span>Neetu Chaurasiya</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="font-medium text-gray-600">Role:</span>
                                    <span>Frontend Developer</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="font-medium text-gray-600">Experience:</span>
                                    <span>2+ Years</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="font-medium text-gray-600">Location:</span>
                                    <span>Delhi, India</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right column - Main content */}
                <div className="md:col-span-2 space-y-12">
                    {/* Bio section */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">My Journey</h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Hello! I'm a passionate frontend developer with a keen eye for creating intuitive and engaging user experiences. My journey in web development began several years ago when I discovered how technology can transform ideas into interactive realities.
                            </p>
                            <p>
                                I specialize in building responsive, accessible websites and applications using modern JavaScript frameworks and libraries. What excites me most about development is the perfect blend of logical problem-solving and creative design that comes with crafting user interfaces.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tutorials and mentoring.
                            </p>
                        </div>
                    </section>

                    {/* Skills section */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Technical Skills</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold mb-3 text-gray-700">Frontend Development</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 w-2 h-2 rounded-full mr-2"></span>
                                        <span>HTML5, CSS3, JavaScript (ES6+)</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 w-2 h-2 rounded-full mr-2"></span>
                                        <span>React.js, Redux Toolkit</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 w-2 h-2 rounded-full mr-2"></span>
                                        <span>Vue.js, Nuxt.js</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 w-2 h-2 rounded-full mr-2"></span>
                                        <span>React Router, SPA Development</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-3 text-gray-700">UI Libraries & Tools</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 w-2 h-2 rounded-full mr-2"></span>
                                        <span>Tailwind CSS, DaisyUI</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 w-2 h-2 rounded-full mr-2"></span>
                                        <span>NuxtUI, HeadlessUI</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 w-2 h-2 rounded-full mr-2"></span>
                                        <span>Heroicons, Responsive Design</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 w-2 h-2 rounded-full mr-2"></span>
                                        <span>Figma, Moqups</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-3 text-gray-700">Backend & Tools</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 w-2 h-2 rounded-full mr-2"></span>
                                        <span>Node.js, Express.js</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 w-2 h-2 rounded-full mr-2"></span>
                                        <span>MongoDB</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 w-2 h-2 rounded-full mr-2"></span>
                                        <span>Git, GitHub</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="bg-blue-100 text-blue-800 w-2 h-2 rounded-full mr-2"></span>
                                        <span>RESTful APIs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Education/Experience section */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Education & Experience</h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h3 className="font-bold">Frontend Developer</h3>
                                <p className="text-blue-600">Vidyamantra Pvt Ltd • Present</p>
                                <p className="mt-2 text-gray-700">Working on frontend development projects using modern JavaScript frameworks and UI libraries. Contributing to building responsive, user-friendly web applications with clean and maintainable code.</p>
                            </div>
                            
                            <div className="border-l-4 border-gray-300 pl-4">
                                <h3 className="font-bold">Master of Computer Applications (MCA)</h3>
                                <p className="text-blue-600">Global Institute Of Information Technology • Master: 2024</p>
                                <p className="mt-2 text-gray-700">Advanced studies in computer science with specialization in web technologies, software development, and database management.</p>
                            </div>
                            
                            <div className="border-l-4 border-gray-300 pl-4">
                                <h3 className="font-bold">Bachelor of Computer Applications (BCA)</h3>
                                <p className="text-blue-600">Global Institute Of Information Technology • Graduated: 2022</p>
                                <p className="mt-2 text-gray-700">Foundation in computer science covering programming fundamentals, data structures, and web development.</p>
                            </div>
                        </div>
                    </section>
                    
                    {/* Personal interests */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Beyond Coding</h2>
                        <p className="text-gray-700">
                            When I'm not immersed in code, I enjoy [your interests, hobbies, or activities]. I believe these experiences help me bring a unique perspective to my development work and keep my creative thinking fresh.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}