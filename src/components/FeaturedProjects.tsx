'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json';

export default function FeaturedProjects() {
    const [displayProjects, setDisplayProjects] = useState<typeof projects>([]);

    useEffect(() => {
        const featuredProjects = projects.filter(p => p.featured);
        const nonFeaturedProjects = projects.filter(p => !p.featured);

        // Randomly pick one from non-featured projects
        const randomIndex = Math.floor(Math.random() * nonFeaturedProjects.length);
        const randomProject = nonFeaturedProjects[randomIndex];

        // Combine 2 featured + 1 random non-featured
        setDisplayProjects([...featuredProjects.slice(0, 2), randomProject]);
    }, []);

    if (displayProjects.length === 0) {
        return null; // Prevent hydration mismatch
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map((project) => (
                <ProjectCard
                    key={project.slug}
                    slug={project.slug}
                    title={project.title}
                    category={project.category}
                    summary={project.summary}
                    techStackSummary={project.techStackSummary}
                    role={project.role}
                    github={project.github}
                    liveDemo={project.liveDemo}
                    featured={project.featured}
                    highlightCard={true}
                />
            ))}
        </div>
    );
}
