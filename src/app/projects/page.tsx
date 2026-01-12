import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Explore my portfolio of full-stack and cloud engineering projects, including case studies with architecture details and measurable outcomes.',
};

export default function ProjectsPage() {
    // Sort projects: featured first, then by category relevance
    const sortedProjects = [...projects].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });

    return (
        <div className="animate-fade-in py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="section-title">Projects</h1>
                    <p className="section-subtitle mx-auto">
                        A collection of my full-stack and cloud engineering work, featuring architecture details and measurable outcomes.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProjects.map((project) => (
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
            </div>
        </div>
    );
}
