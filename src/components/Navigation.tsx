'use client';

import Link from 'next/link';
import { useState } from 'react';
// DISABLED: Theme toggle commented out - uncomment when light mode is ready
// import ThemeToggle from './ThemeToggle';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/skills', label: 'Skills' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)] backdrop-blur-lg border-b border-[var(--nav-border)] transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <span className="text-xl font-bold gradient-text">
                        SG
                    </span>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors duration-200 text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                        {/* DISABLED: Theme Toggle - Desktop - uncomment when light mode is ready */}
                        {/* <ThemeToggle /> */}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        {/* DISABLED: Theme Toggle - Mobile - uncomment when light mode is ready */}
                        {/* <ThemeToggle /> */}

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-[var(--nav-border)]">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors duration-200 text-sm font-medium py-2"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
