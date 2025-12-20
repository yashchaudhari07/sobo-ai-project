//
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import { Check, ChevronLeft, ChevronUp, Calendar, Download, Eye, Trash2, X } from "lucide-react"; 
import SOWTab from "./SOWTab";
// --- ICON IMPORTS ---
import IconMarketing from "../FindExpert/f2.svg"; 
import DeliverablesTab from "./DeliverablesTab";
import MatchInfoTab from "./MatchInfoTab";
import DocumentsTab from "./DocumentsTab";
import SupportTab from "./SupportTab";

export default function EngagementDetails() {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [activeTab, setActiveTab] = useState("Match info"); 

  const tabs = ["SOW", "Deliverables", "Match info", "Documents", "Support"];

  // --- MOCK DATA FOR MATCH INFO ---
  const reqData = {
      area: "Marketing",
      icon: IconMarketing,
      status: "SOW under review", 
      submitted: "14th Jun, 2025",
      type: "Fractional",
      title: "Consultant request title",
      desc: "Lorem ipsum dolor sit amet consectetur. Vel laoreet in amet pretium elementum convallis. Ut rhoncus malesuada fames eget ut in neque nam.",
      statusText: "Your consultant has made an engagement plan for your business. Review the plan details to begin next step"
  };

  // --- STATE: DELIVERABLES LIST (Shared between Deliverables & Documents) ---
  const [deliverablesList, setDeliverablesList] = useState([
      {
          id: 1,
          title: "Deliverable 1",
          desc: "Lorem ipsum dolor sit amet consectetur. Maecenas mattis ultrices nec accumsan vitae tristique egestas vulputate. Eu bibendum nunc nibh egestas id pellentesque. Aliquam vitae phasellus venenatis tincidunt. Blandit eget maecenas ullamcorper eget sagittis adipiscing id dictumst arcu. Vitae commodo viverra velit bibendum et.",
          price: "$ 8,000.00",
          date: "26/12/2025",
          files: 5
      },
      {
          id: 2,
          title: "Deliverable 2",
          desc: "Lorem ipsum dolor sit amet consectetur. Maecenas mattis ultrices nec accumsan vitae tristique egestas vulputate. Eu bibendum nunc nibh egestas id pellentesque. Aliquam vitae phasellus venenatis tincidunt. Blandit eget maecenas ullamcorper eget sagittis adipiscing id dictumst arcu. Vitae commodo viverra velit bibendum et.",
          price: "$ 8,000.00",
          date: "26/12/2025",
          files: 8
      }
  ]);

  // --- STATE: VIEW MODAL FOR DOCUMENT ---
  const [viewItem, setViewItem] = useState(null);

  // --- ACTIONS ---
  const handleDelete = (id) => {
      // Sync Delete: Removes from both Documents & Deliverables views
      setDeliverablesList(prev => prev.filter(item => item.id !== id));
  };

  const handleDownload = (item) => {
      alert(`Downloading information for ${item.title}...`);
  };

  // --- HELPER: GET STATUS COLOR ---
  const getStatusColor = (status) => {
    switch (status) {
      case "Active": return "#007C0C";       
      case "SOW under review": return "#B54708"; 
      case "Completed": return "#2D60FF";    
      case "Rejected": return "#B42318";     
      default: return "#344054";             
    }
  };

  const statusColor = getStatusColor(reqData.status);

  return (
    <div className="w-full min-h-screen bg-[#F9FAFB] p-6 md:p-8 font-plex-hebrew">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col gap-6 mb-8 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-3">
            <button 
                onClick={() => navigate(-1)} 
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#D0D5DD] bg-white hover:bg-gray-50 transition-colors shadow-sm"
            >
                <ChevronLeft className="w-5 h-5 text-[#344054]" />
            </button>
            <h1 className="text-[24px] font-bold text-[#101828]">Expert request title</h1>
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 items-start max-w-[1600px] mx-auto h-[calc(100vh-140px)]">

        {/* === LEFT COLUMN: EXPERT PROFILE CARD (UNTOUCHED) === */}
        <div className="bg-white rounded-2xl border border-[#EAECF0] p-8 shadow-sm h-full overflow-y-auto custom-scrollbar">
            <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-4">
                    <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                        alt="Albert Flores" 
                        className="w-[100px] h-[100px] rounded-full object-cover border-[4px] border-white shadow-lg"
                    />
                    <div className="absolute bottom-1 right-1 bg-[#12B76A] border-[3px] border-white rounded-full p-1 flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="11.6666 3.5 5.24992 9.91667 2.33325 7"></polyline>
                        </svg>
                    </div>
                </div>
                <h2 className="text-[18px] font-bold text-[#101828] mb-1">
                    Albert Flores <span className="text-[14px] font-normal text-[#667085] ml-1">| Years of experience - 15 yrs</span>
                </h2>
                <p className="text-[13px] text-[#475467] font-medium mb-1">
                    Education - UGA: Construction Management
                </p>
                <p className="text-[14px] font-bold text-[#2D60FF] leading-tight px-2 mt-1">
                    Growth Marketing Strategist | B2B & SaaS Specialist
                </p>
                <button className="mt-8 w-full py-2.5 rounded-lg bg-[#2D60FF] text-white font-semibold text-[14px] hover:bg-blue-700 transition-colors shadow-sm">
                    Request a call
                </button>
            </div>
            <div className="h-px bg-[#EAECF0] w-full my-6"></div>
            <div className="text-left space-y-6">
                <div>
                    <h3 className="text-[14px] font-bold text-[#101828] mb-3">About</h3>
                    <p className="text-[13px] text-[#475467] leading-[22px]">
                        Results-driven marketing expert with 10+ years of experience helping startups and enterprises boost brand visibility, optimize funnels, and scale customer acquisition. Specialized in digital, content, and performance marketing.
                    </p>
                </div>
                <div>
                    <h3 className="text-[14px] font-bold text-[#101828] mb-3">Availability</h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3 text-[13px] text-[#475467] font-medium">
                            <div className="w-5 h-5 rounded-full bg-[#ECFDF3] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-[#12B76A]" strokeWidth={3} />
                            </div>
                            Open for 1:1 consultations
                        </div>
                        <div className="flex items-start gap-3 text-[13px] text-[#475467] font-medium">
                            <div className="w-5 h-5 rounded-full bg-[#ECFDF3] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-[#12B76A]" strokeWidth={3} />
                            </div>
                            Available for short-term projects & audits
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-[14px] font-bold text-[#101828] mb-3">Languages</h3>
                    <p className="text-[13px] text-[#475467] font-medium">
                        English - Spanish (Professional Working Proficiency)
                    </p>
                </div>
                <div>
                    <h3 className="text-[14px] font-bold text-[#101828] mb-3">Core Expertise / Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Growth Marketing Strategy", 
                            "Content Marketing", 
                            "Paid Ads (Google, Meta, LinkedIn)", 
                            "SEO & Conversion Optimization", 
                            "GTM Strategy & Analytics"
                        ].map((skill, i) => (
                            <span key={i} className="px-3 py-1.5 bg-white border border-[#D0D5DD] rounded-full text-[12px] font-medium text-[#344054] shadow-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* === RIGHT COLUMN === */}
        <div className="flex flex-col h-full overflow-hidden">
            
            {/* TABS */}
            <div className="flex items-center rounded-lg border border-[#B2CCFF] overflow-hidden w-fit mb-6 bg-[#EFF8FF] shrink-0">
                {tabs.map((tab, index) => {
                    const isActive = activeTab === tab;
                    return (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                px-6 py-2.5 text-[14px] font-medium transition-colors
                                ${index !== 0 ? "border-l border-[#B2CCFF]" : ""}
                                ${isActive 
                                    ? "bg-[#2D60FF] text-white" 
                                    : "bg-[#EFF8FF] text-[#2D60FF] hover:bg-blue-100"
                                }
                            `}
                        >
                            {tab}
                        </button>
                    );
                })}
            </div>

            {/* TAB CONTENT CONTAINER */}
            <div className="bg-white rounded-2xl border border-[#EAECF0] shadow-sm flex-1 overflow-hidden flex flex-col relative">
                
                {/* ---------- SOW TAB ---------- */}
              {activeTab === "SOW" && <SOWTab />}


                {/* ---------- DELIVERABLES TAB ---------- */}
                {activeTab === "Deliverables" && (
  <DeliverablesTab
    deliverablesList={deliverablesList}
    DeliverableCard={DeliverableCard}
  />
)}

                {/* ---------- MATCH INFO TAB ---------- */}
              {activeTab === "Match info" && (
  <MatchInfoTab
    reqData={reqData}
    statusColor={statusColor}
  />
)}


                {/* ---------- DOCUMENTS TAB (NEW & UPDATED) ---------- */}
                {activeTab === "Documents" && (
  <DocumentsTab
    deliverablesList={deliverablesList}
    handleDownload={handleDownload}
    handleDelete={handleDelete}
    setViewItem={setViewItem}
  />
)}

                {/* PLACEHOLDER FOR SUPPORT */}
                {activeTab === "Support" && <SupportTab />}


                {/* --- MODAL FOR DOCUMENT VIEW (Shows Deliverable Card) --- */}
                {viewItem && (
                    <div className="absolute inset-0 z-50 bg-white p-6 overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-[18px] font-bold text-[#101828]">Deliverable Details</h3>
                            <button 
                                onClick={() => setViewItem(null)} 
                                className="p-2 rounded-full hover:bg-gray-100"
                            >
                                <X className="w-6 h-6 text-[#667085]" />
                            </button>
                        </div>
                        <DeliverableCard 
                            title={viewItem.title} 
                            desc={viewItem.desc} 
                        />
                    </div>
                )}

            </div>

        </div>

      </div>
    </div>
  );
}

// --- HELPER COMPONENT: DELIVERABLE CARD ---
function DeliverableCard({ title, desc }) {
    return (
        <div className="bg-[#F9FAFB] rounded-xl p-6 border border-[#EAECF0]">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-[14px] font-medium text-[#667085]">
                    Title - <span className="font-bold text-[#101828]">{title}</span>
                </h3>
                <ChevronUp className="w-5 h-5 text-[#98A2B3] cursor-pointer" />
            </div>
            <div className="mb-6">
                <label className="text-[13px] font-medium text-[#344054] mb-2 block">Description</label>
                <p className="text-[14px] text-[#475467] leading-[22px] text-justify">
                    {desc}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="text-[13px] font-medium text-[#344054] mb-1.5 block">Price</label>
                    <div className="bg-white border border-[#D0D5DD] rounded-lg px-3.5 py-2.5 text-[14px] text-[#101828] shadow-sm font-medium">
                        $ 8,000.00
                    </div>
                </div>
                <div>
                    <label className="text-[13px] font-medium text-[#344054] mb-1.5 block">Delivery date</label>
                    <div className="bg-white border border-[#D0D5DD] rounded-lg px-3.5 py-2.5 text-[14px] text-[#101828] shadow-sm font-medium flex justify-between items-center">
                        26/12/2025
                        <Calendar className="w-4 h-4 text-[#344054]" />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 cursor-pointer hover:underline group">
                    <span className="text-[13px] text-[#667085]">Plans - </span>
                    <span className="text-[13px] text-[#2D60FF] font-medium">5 files</span>
                    <Download className="w-4 h-4 text-[#2D60FF]" />
                </div>
                <div className="w-px h-4 bg-[#D0D5DD]"></div>
                <div className="flex items-center gap-2 cursor-pointer hover:underline group">
                    <span className="text-[13px] text-[#667085]">Deliverables - </span>
                    <span className="text-[13px] text-[#2D60FF] font-medium">8 files</span>
                    <Download className="w-4 h-4 text-[#2D60FF]" />
                </div>
            </div>
        </div>
    );
}