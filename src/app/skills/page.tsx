import { Metadata } from 'next';
import SkillCategory from '@/components/SkillCategory';
import skills from '@/data/skills.json';

export const metadata: Metadata = {
    title: 'Skills',
    description: 'My technical skills including languages, frameworks, cloud platforms, and DevOps tools.',
};

// Icons for each category
const icons = {
    languages: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    ),
    backendApis: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
    ),
    frontend: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
    databases: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
    ),
    cloudDevOps: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
    ),
    testing: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
};

export default function SkillsPage() {
    return (
        <div className="animate-fade-in py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="section-title">Skills & Technologies</h1>
                    <p className="section-subtitle mx-auto">
                        The technologies and tools I use to build scalable, reliable software systems.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SkillCategory
                        title="Languages"
                        skills={skills.languages}
                        icon={icons.languages}
                    />
                    <SkillCategory
                        title="Backend & APIs"
                        skills={skills.backendApis}
                        icon={icons.backendApis}
                    />
                    <SkillCategory
                        title="Frontend"
                        skills={skills.frontend}
                        icon={icons.frontend}
                    />
                    <SkillCategory
                        title="Databases"
                        skills={skills.databases}
                        icon={icons.databases}
                    />
                    <SkillCategory
                        title="Cloud & DevOps"
                        skills={skills.cloudDevOps}
                        icon={icons.cloudDevOps}
                    />
                    <SkillCategory
                        title="Testing & Quality"
                        skills={skills.testing}
                        icon={icons.testing}
                    />
                </div>
            </div>
        </div>
    );
}
