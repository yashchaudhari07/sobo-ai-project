import React from 'react';
import { BadgeCheck } from 'lucide-react'; // Checkmark Icon

export const ProposedExpert = () => {
    return (
        <div className="w-full font-plex-hebrew">
            
            {/* Header - Left Aligned inside the container */}
            <h3 className="text-[18px] font-bold text-[#101828] mb-4">
                Proposed expert
            </h3>

            {/* --- BLUE PROFILE CARD --- */}
            {/* Added exact padding and rounded corners */}
            <div className="w-full bg-[#2D60FF] rounded-2xl flex flex-col items-center justify-center py-8 px-6 text-center shadow-lg relative overflow-hidden">
                
                {/* Background Decor (Optional - Subtle Glow) */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                {/* Avatar */}
                <div className="mb-4 relative z-10">
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Albert Flores"
                        className="w-[80px] h-[80px] rounded-full border-[3px] border-white object-cover shadow-md"
                    />
                </div>

                {/* Name + Experience */}
                <h2 className="text-white text-[20px] font-bold tracking-tight mb-1 z-10">
                    Albert Flores <span className="font-normal text-[16px] opacity-90 ml-1">| Years of experience - 15 yrs</span>
                </h2>

                {/* Education */}
                <p className="text-white/90 text-[14px] font-medium mb-2 z-10">
                    <span className="opacity-75">Education -</span> UGA: Construction Management
                </p>

                {/* Title + Verified Check */}
                <div className="flex items-center justify-center gap-2 mb-6 z-10 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
                    <p className="text-white text-[14px] font-semibold tracking-wide">
                        Growth Marketing Strategist | B2B & SaaS Specialist
                    </p>
                    {/* Checkmark Icon */}
                    <BadgeCheck className="w-5 h-5 text-[#47CD89] fill-white" strokeWidth={2} />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center gap-3 w-full z-10">
                    <button
                        className="px-6 py-2.5 rounded-xl border border-white/30 bg-white/10 text-white text-[14px] font-semibold hover:bg-white hover:text-[#2D60FF] transition-all duration-200 backdrop-blur-sm"
                    >
                        View Linked profile
                    </button>

                    <button
                        className="px-6 py-2.5 rounded-xl border border-white/30 bg-white/10 text-white text-[14px] font-semibold hover:bg-white hover:text-[#2D60FF] transition-all duration-200 backdrop-blur-sm"
                    >
                        View Portfolio
                    </button>
                </div>
            </div>

            {/* --- DETAILS SECTION --- */}
            <div className="mt-8 space-y-8">
                
                {/* Mission Statement */}
                <div>
                    <h3 className="text-[16px] font-bold text-[#101828] mb-2">
                        Mission statement
                    </h3>
                    <p className="text-[14px] text-[#475467] leading-[24px]">
                        My mission is to provide unparalleled expertise and guidance to clients in the
                        construction industry. We are committed to delivering innovative solutions that
                        optimize project efficiency, minimize costs, and ensure the highest standards of
                        quality and safety.
                    </p>
                </div>

                {/* Bio */}
                <div>
                    <h3 className="text-[16px] font-bold text-[#101828] mb-2">
                        Bio
                    </h3>
                    <p className="text-[14px] text-[#475467] leading-[24px]">
                        Results-driven marketing expert with 10+ years of experience helping startups
                        and enterprises boost brand visibility, optimize funnels, and scale customer
                        acquisition. Specialized in digital, content, and performance marketing.
                    </p>
                </div>

                {/* Availability */}
                <div>
                    <h3 className="text-[16px] font-bold text-[#101828] mb-2">
                        Availability
                    </h3>
                    <div className="text-[14px] text-[#475467] leading-[24px] space-y-1">
                        <p>• Open For 1:1 consultation</p>
                        <p>• Availability for short-term projects & audits</p>
                    </div>
                </div>

                {/* Languages */}
                <div>
                    <h3 className="text-[16px] font-bold text-[#101828] mb-2">
                        Languages
                    </h3>
                    <p className="text-[14px] text-[#475467]">English - Spanish (Professional Working Proficiency)</p>
                </div>

                {/* Core Expertise / Skills */}
                <div>
                    <h3 className="text-[16px] font-bold text-[#101828] mb-3">
                        Core Expertise / Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Growth Marketing Strategy",
                            "Content Marketing",
                            "Paid Ads (Google, Meta, LinkedIn)",
                            "SEO & Conversion Optimization",
                            "GTM Strategy & Analytics",
                            "CRM & Email Marketing"
                        ].map((skill, index) => (
                            <span key={index} className="px-3 py-1.5 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] text-[13px] font-medium shadow-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- CLIENT REVIEWS --- */}
            <div className="w-full mt-10 pt-8 border-t border-gray-200">

                <h2 className="text-[18px] font-bold text-[#101828] mb-6">
                    Client Reviews / Endorsement
                </h2>

                <div className="flex flex-col md:flex-row gap-8 w-full">
                    {/* LEFT SECTION – Ratings */}
                    <div className="flex-1 space-y-3">
                        <RatingRow label="Expert’s Helpfulness" stars={4} />
                        <RatingRow label="Communication" stars={5} />
                        <RatingRow label="Understanding of problem" stars={3} />
                        <RatingRow label="Quality of solution" stars={4} />
                        <RatingRow label="Timeliness" stars={4} />
                    </div>

                    {/* MIDDLE DIVIDER */}
                    <div className="hidden md:block w-[1px] bg-[#E4E7EC]"></div>

                    {/* RIGHT SECTION – Satisfaction */}
                    <div className="flex-1 space-y-3">
                        <h3 className="text-[15px] font-bold text-[#101828] mb-3">Overall Satisfaction</h3>
                        <SatRow label="Very Satisfied" pct="89%" />
                        <SatRow label="Satisfied" pct="9%" />
                        <SatRow label="Neutral" pct="2%" />
                        <SatRow label="Very Dissatisfied" pct="0%" />
                    </div>
                </div>

                {/* Bottom Reviewer Card */}
                <div className="mt-8 bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-start gap-4">
                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="User"
                        className="w-[48px] h-[48px] rounded-full object-cover border border-white shadow-sm"
                    />

                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-1">
                            <p className="text-[15px] font-bold text-[#101828]">Tabb Patz</p>
                            <div className="flex gap-[1px]">
                                {[...Array(4)].map((_, i) => <span key={i} className="text-[#FDB022] text-[14px]">★</span>)}
                                <span className="text-gray-300 text-[14px]">★</span>
                            </div>
                        </div>

                        <p className="text-[12px] text-[#475467] font-medium mb-1">
                            Head of Marketing, Fintech Startup
                        </p>

                        <p className="text-[13px] text-[#101828] leading-[20px] italic">
                            "Jane's insights were game-changing. We restructured our funnel and saw immediate results."
                        </p>
                    </div>
                </div>

                <button className="mt-4 w-full py-2.5 bg-white border border-[#D0D5DD] text-[#344054] rounded-lg text-[14px] font-semibold hover:bg-gray-50 transition-colors">
                    View all reviews
                </button>
            </div>

        </div>
    );
};

// Helper Components
const RatingRow = ({ label, stars }) => (
    <div className="flex justify-between items-center text-[13px] text-[#344054]">
        <span>{label}</span>
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-[16px] leading-none ${i < stars ? "text-[#FDB022]" : "text-gray-200"}`}>★</span>
            ))}
        </div>
    </div>
);

const SatRow = ({ label, pct }) => (
    <div className="flex justify-between items-center text-[13px] text-[#344054]">
        <span>{label}</span>
        <span className="font-semibold text-[#101828]">{pct}</span>
    </div>
);