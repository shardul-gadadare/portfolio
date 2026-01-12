interface ExperienceCardProps {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    type: string;
    bullets: string[];
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr + '-01');
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

export default function ExperienceCard({
    title,
    company,
    location,
    startDate,
    endDate,
    type,
    bullets,
}: ExperienceCardProps) {
    return (
        <article className="timeline-item pb-12 last:pb-0">
            <div className="glass-card p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white">{title}</h3>
                        <p className="text-blue-400 font-medium">{company}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-300 text-sm">
                            {formatDate(startDate)} - {formatDate(endDate)}
                        </p>
                        <p className="text-gray-500 text-sm">{location}</p>
                    </div>
                </div>

                {/* Type Badge */}
                <span className="skill-chip text-xs mb-4 inline-block">
                    {type === 'full-time' ? 'Full-Time' : 'Internship'}
                </span>

                {/* Bullets */}
                <ul className="space-y-3 mt-4">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="flex gap-3 text-gray-300 text-sm">
                            <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
