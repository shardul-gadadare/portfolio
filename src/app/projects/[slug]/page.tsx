import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import projects from '@/data/projects.json';

interface ProjectPageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return { title: 'Project Not Found' };

    return {
        title: project.title,
        description: project.summary,
    };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="animate-fade-in py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Projects
                </Link>

                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="skill-chip">{project.category}</span>
                        {project.featured && (
                            <span className="text-xs text-blue-400 font-medium flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Featured Project
                            </span>
                        )}
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{project.title}</h1>
                    <p className="text-xl text-gray-300 mb-4">{project.summary}</p>
                    <p className="text-gray-400 mb-6">Role: {project.role}</p>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {/* GITHUB BUTTON COMMENTED OUT - UNCOMMENT WHEN READY
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                View on GitHub
                            </a>
                        )}
                        */}
                        {project.liveDemo && (
                            <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Live Demo
                            </a>
                        )}
                    </div>
                </header>

                {/* Context */}
                <section className="glass-card p-6 mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">Context</h2>
                    <p className="text-gray-300">{project.context}</p>
                </section>

                {/* Key Outcomes */}
                <section className="glass-card p-6 mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">Key Outcomes</h2>
                    <ul className="space-y-3">
                        {project.outcomes.map((outcome, index) => (
                            <li key={index} className="flex gap-3 text-gray-300">
                                <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                <span>{outcome}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Architecture */}
                <section className="glass-card p-6 mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">Architecture & Design</h2>
                    <p className="text-gray-300">{project.architecture}</p>
                </section>

                {/* Tech Stack */}
                <section className="glass-card p-6 mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">Tech Stack</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.techStack.database && (
                            <div>
                                <span className="text-blue-400 text-sm font-medium">DB</span>
                                <p className="text-gray-300">{project.techStack.database}</p>
                            </div>
                        )}
                        {project.techStack.backend && (
                            <div>
                                <span className="text-blue-400 text-sm font-medium">Backend</span>
                                <p className="text-gray-300">{project.techStack.backend}</p>
                            </div>
                        )}
                        {project.techStack.api && (
                            <div>
                                <span className="text-blue-400 text-sm font-medium">API</span>
                                <p className="text-gray-300">{project.techStack.api}</p>
                            </div>
                        )}
                        {project.techStack.auth && (
                            <div>
                                <span className="text-blue-400 text-sm font-medium">Auth</span>
                                <p className="text-gray-300">{project.techStack.auth}</p>
                            </div>
                        )}
                        {project.techStack.security && (
                            <div>
                                <span className="text-blue-400 text-sm font-medium">Security</span>
                                <p className="text-gray-300">{project.techStack.security}</p>
                            </div>
                        )}
                        {project.techStack.frontend && (
                            <div>
                                <span className="text-blue-400 text-sm font-medium">Frontend</span>
                                <p className="text-gray-300">{project.techStack.frontend}</p>
                            </div>
                        )}
                        {project.techStack.deployment && (
                            <div className="sm:col-span-2">
                                <span className="text-blue-400 text-sm font-medium">Deployment</span>
                                <p className="text-gray-300">{project.techStack.deployment}</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Implementation Highlights */}
                <section className="glass-card p-6 mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">Implementation Highlights</h2>
                    <ul className="space-y-3">
                        {project.implementationHighlights.map((highlight, index) => (
                            <li key={index} className="flex gap-3 text-gray-300">
                                <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Cloud & DevOps (if applicable) - DISABLED: uncomment when ready to enable
                {project.cloudDevOps && (
                    <section className="glass-card p-6 mb-8">
                        <h2 className="text-xl font-bold text-white mb-4">Cloud & DevOps</h2>
                        <div className="space-y-4">
                            {project.cloudDevOps.infrastructure && (
                                <div>
                                    <span className="text-blue-400 text-sm font-medium">Infrastructure:</span>
                                    <p className="text-gray-300">{project.cloudDevOps.infrastructure}</p>
                                </div>
                            )}
                            {project.cloudDevOps.cicd && (
                                <div>
                                    <span className="text-blue-400 text-sm font-medium">CI/CD:</span>
                                    <p className="text-gray-300">{project.cloudDevOps.cicd}</p>
                                </div>
                            )}
                            {project.cloudDevOps.monitoring && (
                                <div>
                                    <span className="text-blue-400 text-sm font-medium">Monitoring:</span>
                                    <p className="text-gray-300">{project.cloudDevOps.monitoring}</p>
                                </div>
                            )}
                            {project.cloudDevOps.improvements && (
                                <div>
                                    <span className="text-blue-400 text-sm font-medium">Key Improvements:</span>
                                    <p className="text-gray-300">{project.cloudDevOps.improvements}</p>
                                </div>
                            )}
                        </div>
                    </section>
                )}
                */}

                {/* What I'd Improve */}
                <section className="glass-card p-6 mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">What I&apos;d Improve Next</h2>
                    <ul className="space-y-3">
                        {project.improvements.map((improvement, index) => (
                            <li key={index} className="flex gap-3 text-gray-300">
                                <span className="text-yellow-400 mt-1 flex-shrink-0">→</span>
                                <span>{improvement}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Back to Projects */}
                <div className="text-center">
                    <Link href="/projects" className="btn-secondary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to All Projects
                    </Link>
                </div>
            </div>
        </div>
    );
}
