import React, { useState, useEffect } from 'react';

export default function Github() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const githubUsername = 'neetu1123';

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`);

                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }

                const data = await response.json();
                setRepos(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <div className="mx-auto w-full max-w-7xl px-6 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">My GitHub Projects</h1>
                <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Check out my open source contributions and personal projects. These repositories
                    showcase my coding style, problem-solving approach, and the technologies I work with.
                </p>

                <a
                    href="https://github.com/neetu1123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-800"
                >
                    <span className="mr-2">View my complete GitHub profile</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>

            {/* GitHub Stats */}
            <div className="mb-16 flex justify-center">
                <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                    <img
                        src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=vue&hide_border=true&count_private=true`}
                        alt="GitHub Stats"
                        className="block w-full"
                    />
                </div>
            </div>

            {/* Repositories Section */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Repositories</h2>

                {loading && (
                    <div className="text-center py-20">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                        <p className="mt-4 text-gray-600">Loading repositories...</p>
                    </div>
                )}

                {error && (
                    <div className="text-center py-10 px-6 bg-red-50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="mt-4 text-lg font-medium text-red-800">Error loading repositories</p>
                        <p className="mt-2 text-red-700">{error}</p>
                        <button
                            className="mt-4 px-4 py-2 bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors"
                            onClick={() => window.location.reload()}
                        >
                            Retry
                        </button>
                    </div>
                )}
{!loading && !error && (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
        {repos.length > 0 ? repos.map((repo, index) => (
            <div 
                key={repo.id} 
                className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 group animate-slideUp"
                style={{animationDelay: `${index * 100}ms`}}
            >
                {/* Top decoration bar with shimmer effect */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-${getLanguageColor(repo.language)}`}>
                    <div className="absolute inset-0 bg-white opacity-30 animate-shimmer"></div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="p-7 relative z-10">
                    {/* Repository name with hover effect */}
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 group-hover:text-blue-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            <span className="relative">
                                {repo.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                            </span>
                        </a>
                    </h3>

                    {/* Repository description with better styling and hover effect */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 mb-4 min-h-[4rem] shadow-inner transform transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/90">
                        <p className="text-gray-600 line-clamp-2">
                            {repo.description || "No description provided"}
                        </p>
                    </div>

                    {/* Repository stats with improved styling and animations */}
                    <div className="flex items-center mb-5 flex-wrap gap-3">
                        {repo.language && (
                            <span className="flex items-center text-sm bg-gray-100 rounded-full px-3 py-1 text-gray-700 transform transition-transform duration-200 hover:scale-105 hover:shadow-sm">
                                <span className={`w-3 h-3 rounded-full mr-2 bg-${getLanguageColor(repo.language)} animate-pulse`}></span>
                                {repo.language}
                            </span>
                        )}

                        <span className="flex items-center text-sm bg-yellow-50 rounded-full px-3 py-1 text-yellow-700 transform transition-transform duration-200 hover:scale-105 hover:bg-yellow-100 hover:shadow-sm">
                            <svg className="w-4 h-4 mr-1 transition-transform group-hover:rotate-12 duration-300" viewBox="0 0 16 16" fill="currentColor">
                                <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
                            </svg>
                            {repo.stargazers_count}
                        </span>

                        <span className="flex items-center text-sm bg-blue-50 rounded-full px-3 py-1 text-blue-700 transform transition-transform duration-200 hover:scale-105 hover:bg-blue-100 hover:shadow-sm">
                            <svg className="w-4 h-4 mr-1 transition-transform group-hover:rotate-12 duration-300" viewBox="0 0 16 16" fill="currentColor">
                                <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                            </svg>
                            {repo.forks_count}
                        </span>
                    </div>

                    {/* Repository link with enhanced button styling and animations */}
                    <div className="mt-auto">
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg"
                        >
                            <span>View Repository</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></span>
                        </a>
                    </div>
                </div>

                {/* Enhanced decorative corner accent with animation */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-50 rounded-tl-full opacity-60 group-hover:bg-blue-100 group-hover:w-28 group-hover:h-28 transition-all duration-500"></div>
                
                {/* Bottom accent line that appears on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-500 ease-out"></div>
            </div>
        )) : (
            <div className="col-span-3 text-center py-16 px-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-inner border border-gray-200 animate-fadeIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-gray-400 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <p className="mt-4 text-gray-600 text-lg">No repositories found. Start creating some projects!</p>
                <a
                    href="https://github.com/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
                >
                    Create a new repository
                </a>
            </div>
        )}
    </div>
)}    
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
                <a
                    href="https://github.com/neetu1123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Follow Me on GitHub
                </a>
            </div>
        </div>
    );
}

// Helper function to determine language color
function getLanguageColor(language) {
    const colors = {
        "JavaScript": "yellow-400",
        "TypeScript": "blue-400",
        "HTML": "red-500",
        "CSS": "purple-500",
        "Python": "blue-500",
        "Java": "orange-500",
        "React": "blue-300",
        "Vue": "green-500",
        // Add more languages as needed
    };

    return colors[language] || "gray-400";
}