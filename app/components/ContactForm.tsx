"use client";

import Reveal from './Reveal';
import { useState, FormEvent } from 'react';

// Replace this with your deployed Google Apps Script Web App URL
const GOOGLE_SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || "";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Use URLSearchParams (form-encoded) — works reliably with no-cors
        const params = new URLSearchParams();
        params.append('email', formData.get('email') as string || '');
        params.append('name', formData.get('name') as string || '');
        params.append('phone', formData.get('phone') as string || '');
        params.append('company', formData.get('company') as string || '');
        params.append('source', formData.get('source') as string || '');
        params.append('updates', formData.get('updates') as string || '');
        params.append('timestamp', new Date().toISOString());

        try {
            await fetch(GOOGLE_SHEET_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: params,
            });

            // With no-cors mode, we can't read the response, but if fetch didn't throw, it was sent
            setSubmitStatus('success');
            form.reset();
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-serif text-brand-mist text-center mb-12">Get in touch</h2>
                </Reveal>
                <Reveal delay={0.2} className="p-8 md:p-12 border border-brand-mist/10 bg-white shadow-[0_0_40px_rgba(0,0,0,0.08)] rounded-3xl">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-brand-mist mb-3 font-semibold">Email *</label>
                            <input type="email" name="email" required className="w-full bg-brand-primary/10 border-0 border-b-2 border-brand-mist/10 p-4 text-brand-mist focus:border-[#c9a84c] focus:outline-none focus:ring-0 transition-colors placeholder-brand-mist/30" placeholder="email@example.com" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-brand-mist mb-3 font-semibold">Name</label>
                                <input type="text" name="name" className="w-full bg-brand-primary/10 border-0 border-b-2 border-brand-mist/10 p-4 text-brand-mist focus:border-[#c9a84c] focus:outline-none focus:ring-0 transition-colors placeholder-brand-mist/30" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-brand-mist mb-3 font-semibold">Phone Number</label>
                                <input type="tel" name="phone" className="w-full bg-brand-primary/10 border-0 border-b-2 border-brand-mist/10 p-4 text-brand-mist focus:border-[#c9a84c] focus:outline-none focus:ring-0 transition-colors placeholder-brand-mist/30" placeholder="(555) 555-5555" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest text-brand-mist mb-3 font-semibold">Company/Brand Name *</label>
                            <input type="text" name="company" required className="w-full bg-brand-primary/10 border-0 border-b-2 border-brand-mist/10 p-4 text-brand-mist focus:border-[#c9a84c] focus:outline-none focus:ring-0 transition-colors placeholder-brand-mist/30" placeholder="Your Company" />
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest text-brand-mist mb-3 font-semibold">How did you hear about us? *</label>
                            <select name="source" required defaultValue="" className="w-full bg-brand-primary/10 border-0 border-b-2 border-brand-mist/10 p-4 text-brand-mist focus:border-[#c9a84c] focus:outline-none focus:ring-0 transition-colors appearance-none">
                                <option value="" disabled>Select an option</option>
                                <option value="IG">Instagram (IG)</option>
                                <option value="FB">Facebook (FB)</option>
                                <option value="Referral">Referral</option>
                                <option value="Website">Website</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest text-brand-mist mb-4 font-semibold">Would you like to receive updates, offers, or future events from Lost Coast Getaways? *</label>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="radio" name="updates" value="yes" required className="accent-[#c9a84c] w-5 h-5 focus:outline-none" />
                                    <span className="text-brand-mist font-light group-hover:text-[#c9a84c] transition-colors">Yes</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="radio" name="updates" value="no" required className="accent-[#c9a84c] w-5 h-5 focus:outline-none" />
                                    <span className="text-brand-mist font-light group-hover:text-[#c9a84c] transition-colors">No, Thank you!</span>
                                </label>
                            </div>
                        </div>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 text-center font-medium">
                                ✓ Thank you! Your message has been sent successfully.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 text-center font-medium">
                                Something went wrong. Please try again or email us directly.
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 text-white font-bold tracking-[0.2em] mt-8 shadow-md bg-[#1c1c1c] hover:bg-[#c9a84c] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                            {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                        </button>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}
