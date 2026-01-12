import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'Shardul Gadadare | Software Engineer (Full-Stack & Cloud)',
        template: '%s | Shardul Gadadare'
    },
    description: 'Software Engineer specializing in full-stack development and cloud architecture. MS in Software Engineering at RIT, 2+ years experience at Cognizant. Building scalable, reliable systems.',
    keywords: ['Software Engineer', 'Full-Stack Developer', 'Cloud Engineer', 'AWS', 'React', 'Node.js', 'Python', 'Java'],
    authors: [{ name: 'Shardul Gadadare' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://shardul-gadadare.github.io',
        siteName: 'Shardul Gadadare Portfolio',
        title: 'Shardul Gadadare | Software Engineer (Full-Stack & Cloud)',
        description: 'Software Engineer specializing in full-stack development and cloud architecture. Building scalable, reliable systems.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Shardul Gadadare | Software Engineer',
        description: 'Full-Stack & Cloud Engineer building scalable systems.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider>
                    {/* Background gradient orbs - DISABLED
                    <div className="bg-gradient-orb orb-1" aria-hidden="true" />
                    <div className="bg-gradient-orb orb-2" aria-hidden="true" />
                    */}

                    <Navigation />
                    <main className="min-h-screen pt-20">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
