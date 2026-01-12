const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

interface ResumeButtonsProps {
    variant?: 'stacked' | 'inline';
}

export default function ResumeButtons({ variant = 'inline' }: ResumeButtonsProps) {
    const containerClass = variant === 'stacked'
        ? 'flex flex-col gap-3 items-center'
        : 'flex flex-wrap gap-3 justify-center';

    return (
        <div className={containerClass}>
            <a
                href={`${basePath}/resumes/Shardul_Gadadare_FullStack.pdf`}
                download="Shardul_Gadadare_FullStack_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm min-w-[220px] justify-center"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Full-Stack Resume (PDF)
            </a>
            <a
                href={`${basePath}/resumes/Shardul_Gadadare_Cloud.pdf`}
                download="Shardul_Gadadare_Cloud_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm min-w-[220px] justify-center"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Cloud Resume (PDF)
            </a>
        </div>
    );
}

