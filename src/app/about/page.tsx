import { Metadata } from 'next';
import Link from 'next/link';
import ResumeButtons from '@/components/ResumeButtons';
import education from '@/data/education.json';

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn more about Shardul Gadadare - Software Engineer with expertise in full-stack development and cloud architecture.',
};

export default function AboutPage() {
    return (
        <div className="animate-fade-in py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="section-title">About Me</h1>
                    <p className="section-subtitle mx-auto">
                        Software Engineer passionate about building scalable, reliable systems.
                    </p>
                </div>

                {/* Bio */}
                <section className="glass-card p-8 mb-8">
                    <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 text-lg mb-6">
                            I&apos;m <span className="text-white font-semibold">Shardul Gadadare</span>, a Software Engineer specializing in{' '}
                            <span className="text-white font-bold">full-stack development</span> and{' '}
                            <span className="text-white font-bold">cloud architecture</span>. Currently pursuing my MS in Software Engineering at
                            Rochester Institute of Technology (graduating December 2025), I bring over 2 years of industry experience from
                            Cognizant Technology Solutions and an IoT internship at Siemens.
                        </p>
                        <p className="text-gray-300 text-lg mb-6">
                            I&apos;m passionate about solving complex problems at the intersection of user experience and system design.
                            Whether it&apos;s building responsive React applications, designing RESTful APIs, or architecting serverless
                            solutions on AWS, I focus on creating software that is <span className="text-white font-medium">fast</span>,{' '}
                            <span className="text-white font-medium">reliable</span>, and <span className="text-white font-medium">maintainable</span>.
                        </p>
                        <p className="text-gray-300 text-lg">
                            My approach emphasizes clean architecture, comprehensive testing, and continuous improvement. I believe great
                            software comes from understanding both the technical constraints and the user&apos;s needs, then finding elegant
                            solutions that satisfy both.
                        </p>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold text-white mb-6 text-center">Education</h2>
                    <div className="space-y-4">
                        {education.map((edu) => (
                            <div key={edu.id} className="glass-card p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                    <h3 className="text-lg font-semibold text-white">{edu.institution}</h3>
                                    <span className="text-gray-400 text-sm">
                                        {new Date(edu.startDate + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })} - {new Date(edu.endDate + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })}
                                    </span>
                                </div>
                                <p className="text-blue-400 mb-2">{edu.degree}</p>
                                <p className="text-gray-500 text-sm mb-3">{edu.location}</p>
                                {edu.gpa && (
                                    <p className="text-gray-300 text-sm">GPA: {edu.gpa}</p>
                                )}
                                {edu.highlights && edu.highlights.length > 0 && (
                                    <ul className="mt-3 space-y-1">
                                        {edu.highlights.map((highlight, index) => (
                                            <li key={index} className="text-gray-400 text-sm flex gap-2">
                                                <span className="text-blue-400">▹</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Interests */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold text-white mb-6 text-center">Beyond Code</h2>
                    <div className="glass-card p-6">
                        <p className="text-gray-300">
                            When I&apos;m not coding, you&apos;ll find me exploring new technologies, experimenting with side projects, or staying active through sports and fitness. I enjoy travelling to and exploring new places, cooking, and following tech industry trends.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}
