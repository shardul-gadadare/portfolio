import Link from 'next/link';
import SocialLinks from './SocialLinks';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--nav-border)] bg-[var(--nav-bg)] backdrop-blur-sm transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <span className="text-2xl font-bold gradient-text">
                            Shardul Gadadare
                        </span>
                        <p className="mt-2 text-[var(--text-muted)] text-sm">
                            Software Engineer (Full-Stack & Cloud)
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[var(--foreground)] font-semibold mb-4">Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            <Link href="/projects" className="text-[var(--text-muted)] hover:text-[var(--foreground)] text-sm transition-colors">
                                Projects
                            </Link>
                            <Link href="/experience" className="text-[var(--text-muted)] hover:text-[var(--foreground)] text-sm transition-colors">
                                Experience
                            </Link>
                            <Link href="/contact" className="text-[var(--text-muted)] hover:text-[var(--foreground)] text-sm transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-[var(--foreground)] font-semibold mb-4">Connect</h3>
                        <SocialLinks />
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[var(--nav-border)] text-center text-[var(--text-muted)] text-sm">
                    © {currentYear} Shardul Gadadare. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
