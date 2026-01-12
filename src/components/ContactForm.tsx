'use client';

import { useState, FormEvent } from 'react';

const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLScYmXHj-p8qUdboBri8xyFsTZ1O64X454yOPor3jUgCN_YG6Q/formResponse';

const ENTRY_IDS = {
    name: 'entry.1271257985',
    email: 'entry.1737649665',
    company: 'entry.1594908757',
    message: 'entry.731268770',
};

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const formBody = new URLSearchParams();
            formBody.append(ENTRY_IDS.name, formData.name);
            formBody.append(ENTRY_IDS.email, formData.email);
            formBody.append(ENTRY_IDS.company, formData.company);
            formBody.append(ENTRY_IDS.message, formData.message);

            // Submit using fetch with no-cors mode (won't get response but will submit)
            await fetch(GOOGLE_FORM_ACTION, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formBody.toString(),
            });

            // Since no-cors doesn't give us a response, assume success
            setStatus('success');
            setFormData({ name: '', email: '', company: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <section className="glass-card p-8">
                <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold text-[var(--foreground)] mb-2">Message Sent!</h2>
                    <p className="text-[var(--text-muted)] mb-6">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="btn-secondary"
                    >
                        Send Another Message
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="glass-card p-8">
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-6 text-center">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-[var(--foreground)] text-sm font-medium mb-2">
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-lg text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors disabled:opacity-50"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-[var(--foreground)] text-sm font-medium mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={status === 'submitting'}
                            className="w-full px-4 py-3 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-lg text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors disabled:opacity-50"
                            placeholder="your.email@example.com"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="company" className="block text-[var(--foreground)] text-sm font-medium mb-2">
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-lg text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors disabled:opacity-50"
                        placeholder="Your company (optional)"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-[var(--foreground)] text-sm font-medium mb-2">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-lg text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors resize-none disabled:opacity-50"
                        placeholder="How can I help you?"
                    />
                </div>

                {status === 'error' && (
                    <div className="text-red-400 text-sm text-center">
                        Something went wrong. Please try again or email me directly.
                    </div>
                )}

                <div className="text-center">
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'submitting' ? (
                            <>
                                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </section>
    );
}
