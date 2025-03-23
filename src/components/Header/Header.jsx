import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [showThemeMenu, setShowThemeMenu] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(() => {
        return localStorage.getItem('theme') || 'indigo';
    });

    const themes = [
        { id: 'light', name: 'Light', primary: 'bg-indigo-600', secondary: 'bg-indigo-400' },
        { id: 'indigo', name: 'Indigo', primary: 'bg-indigo-600', secondary: 'bg-indigo-400' },
        { id: 'dark', name: 'Dark', primary: 'bg-gray-900', secondary: 'bg-gray-400' },
        { id: 'blue', name: 'Blue', primary: 'bg-blue-600', secondary: 'bg-blue-400' },
        { id: 'emerald', name: 'Emerald', primary: 'bg-emerald-600', secondary: 'bg-emerald-400' },
        { id: 'purple', name: 'Purple', primary: 'bg-purple-600', secondary: 'bg-purple-400' },
        { id: 'rose', name: 'Rose', primary: 'bg-rose-600', secondary: 'bg-rose-400' },
        { id: 'amber', name: 'Amber', primary: 'bg-amber-600', secondary: 'bg-amber-400' },
    ];

    useEffect(() => {
        // Apply the selected theme to the root element
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    const switchTheme = (themeId) => {
        setCurrentTheme(themeId);
        setShowThemeMenu(false);
    };

    // Close menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showThemeMenu && !event.target.closest('[data-theme-button]')) {
                setShowThemeMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showThemeMenu]);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-base-100 text-primary border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <div className="relative w-12 h-12 mr-2">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <polygon
                                    points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
                                    fill="url(#hexGradient)"
                                    className="transition-transform duration-300 group-hover:scale-105"
                                />
                                <defs>
                                    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--color-primary, #4f46e5)" />
                                        <stop offset="100%" stopColor="var(--color-secondary, #2563eb)" />
                                    </linearGradient>
                                </defs>
                                <text
                                    x="50%"
                                    y="54%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="35"
                                    fontWeight="bold"
                                    className="transition-all duration-300"
                                >
                                    NC
                                </text>
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-primary relative group-hover:text-blue-600 transition-colors duration-300">
                            D
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </Link>

                    {/* Mobile menu button */}
                    <div className="flex items-center lg:order-2">
                        {/* Theme Switcher */}
                        <div className="relative mr-2 lg:mr-0" data-theme-button>
                            <button
                                type="button"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200 focus:outline-none"
                                onClick={() => setShowThemeMenu(!showThemeMenu)}
                                aria-expanded={showThemeMenu}
                                aria-haspopup="true"
                            >
                                <span className="sr-only">Open theme menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {showThemeMenu && (
                                <div
                                    className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="theme-menu-button"
                                >
                                    <div className="py-1" role="none">
                                        <p className="px-4 py-2 text-sm text-gray-700 font-medium">Select Theme</p>
                                    </div>
                                    <div className="py-1" role="none">
                                        {themes.map((theme) => (
                                            <button
                                                key={theme.id}
                                                onClick={() => switchTheme(theme.id)}
                                                className={`flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                                                    currentTheme === theme.id ? 'text-indigo-600 font-medium' : 'text-gray-700'
                                                }`}
                                                role="menuitem"
                                            >
                                                <span className="flex items-center">
                                                    <span className={`w-3 h-3 rounded-full mr-2 ${theme.primary}`}></span>
                                                    {theme.name}
                                                </span>
                                                {currentTheme === theme.id && (
                                                    <svg
                                                        className="ml-auto h-5 w-5 text-indigo-600"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Mobile menu toggle button */}
                        <button
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="mobile-menu"
                            aria-expanded={mobileMenuOpen}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Navigation Menu - Visible on both mobile (when toggled) and desktop */}
                    <div
                        id="mobile-menu"
                        className={`${
                            mobileMenuOpen ? 'block' : 'hidden'
                        } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-primary-100' : 'text-accent'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary lg:p-0`
                                    }
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-primary' : 'text-accent'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary lg:p-0`
                                    }
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-primary' : 'text-accent'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary lg:p-0`
                                    }
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/project"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-primary' : 'text-accent'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary lg:p-0`
                                    }
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Project
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-primary' : 'text-accent'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-primary lg:p-0`
                                    }
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}