import Link from 'next/link';

interface ProjectCardProps {
    slug: string;
    title: string;
    category: string;
    summary: string;
    techStackSummary: string;
    role: string;
    github?: string | null;
    liveDemo?: string | null;
    featured?: boolean;
    highlightCard?: boolean;
}

export default function ProjectCard({
    slug,
    title,
    category,
    summary,
    techStackSummary,
    role,
    github,
    liveDemo,
    featured = false,
    highlightCard = false,
}: ProjectCardProps) {
    const showHighlight = featured || highlightCard;
    return (
        <article className={`glass-card p-6 flex flex-col h-full ${showHighlight ? 'ring-2 ring-blue-500/30' : ''}`}>
            {/* Category Badge */}
            <div className="flex items-center justify-between mb-4">
                <span className="skill-chip text-xs">
                    {category}
                </span>
                {featured && (
                    <span className="text-xs text-blue-400 font-medium flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Featured
                    </span>
                )}
            </div>

            {/* Title & Role */}
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-400 mb-3">{role}</p>

            {/* Summary */}
            <p className="text-gray-300 text-sm flex-grow mb-4 line-clamp-3">
                {summary}
            </p>

            {/* Tech Stack */}
            <p className="text-xs text-blue-300 mb-6">
                {techStackSummary}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 mt-auto">
                <Link
                    href={`/projects/${slug}`}
                    className="btn-primary text-sm py-2 px-4"
                >
                    View Case Study
                </Link>
                {/* GITHUB BUTTON COMMENTED OUT - UNCOMMENT WHEN READY
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm py-2 px-4"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                )}
                */}
                {liveDemo && (
                    <a
                        href={liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm py-2 px-4"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                    </a>
                )}
            </div>
        </article>
    );
}
