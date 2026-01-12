import { Metadata } from 'next';
import ExperienceCard from '@/components/ExperienceCard';
import experience from '@/data/experience.json';

export const metadata: Metadata = {
    title: 'Experience',
    description: 'My professional experience as a Software Engineer at Cognizant and Software Engineering Intern at Siemens.',
};

export default function ExperiencePage() {
    return (
        <div className="animate-fade-in py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="section-title">Experience</h1>
                    <p className="section-subtitle mx-auto">
                        My professional journey as a software engineer, building scalable systems and driving measurable impact.
                    </p>
                </div>

                {/* Timeline */}
                <div className="space-y-0">
                    {experience.map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            title={exp.title}
                            company={exp.company}
                            location={exp.location}
                            startDate={exp.startDate}
                            endDate={exp.endDate}
                            type={exp.type}
                            bullets={exp.bullets}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
