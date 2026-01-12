import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';
import ResumeButtons from '@/components/ResumeButtons';
import FeaturedProjects from '@/components/FeaturedProjects';
import skills from '@/data/skills.json';

export default function Home() {

    const coreSkills = [
        ...skills.languages.slice(0, 4),
        ...skills.backendApis.slice(0, 3),
        ...skills.frontend.slice(0, 2),
        ...skills.cloudDevOps.slice(0, 2),
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* Greeting */}
                        <p className="text-[#2563eb] font-medium mb-4">Hi, I&apos;m</p>

                        {/* Name */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Shardul Gadadare
                        </h1>

                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-6">
                            Software Engineer (Full-Stack & Cloud)
                        </h2>


                        {/* Value Proposition */}
                        <p className="text-gray-300 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
                            I build <span className="text-white font-semibold">measurable products</span> that are faster, more reliable, and user-centric across the <span className="text-white font-semibold">full-stack</span>. With an <span className="text-white font-semibold">MS in Software Engineering</span> from Rochester Institute of Technology and <span className="text-white font-semibold">2+ years</span> of hands-on <span className="text-white font-semibold">experience</span> from Cognizant and Siemens, I <span className="text-white font-semibold">specialize</span> in building scalable <span className="text-white font-semibold">full-stack</span> and <span className="text-white font-semibold">cloud-native</span> solutions.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <ResumeButtons />
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center">
                            <SocialLinks size="lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle mx-auto">A selection of my recent work</p>
                        <Link href="/projects" className="btn-secondary inline-flex mt-4">
                            View All
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>

                    <FeaturedProjects />

                    <div className="mt-8 text-center sm:hidden">
                        <Link href="/projects" className="btn-secondary">
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* Skills Snapshot Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary-950/20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Skills & Technologies</h2>
                        <p className="section-subtitle mx-auto">Core technologies I work with</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {coreSkills.map((skill) => (
                            <span key={skill} className="skill-chip">
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link href="/skills" className="btn-secondary">
                            View Full Tech Stack
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="section-title mb-6">Let&apos;s Connect</h2>
                    <p className="text-gray-300 text-lg mb-8">
                        I&apos;m actively looking for full-time Software Engineer, Full-Stack Engineer, or Cloud Engineer roles.
                        Let&apos;s discuss how I can contribute to your team.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <Link href="/contact" className="btn-primary">
                            Get in Touch
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
