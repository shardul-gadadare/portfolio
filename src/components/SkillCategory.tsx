interface SkillCategoryProps {
    title: string;
    skills: string[];
    icon: React.ReactNode;
}

export default function SkillCategory({ title, skills, icon }: SkillCategoryProps) {
    return (
        <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
                <span className="text-blue-400 w-6 h-6">{icon}</span>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span key={skill} className="skill-chip">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
