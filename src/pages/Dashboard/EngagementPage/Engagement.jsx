import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <--- Import navigate
// --- ICONS IMPORTS ---
import IconTech from "../FindExpert/f1.svg";
import IconMarketing from "../FindExpert/f2.svg";
import IconStrategy from "../FindExpert/f3.svg";
import IconLeadership from "../FindExpert/f4.svg";
import IconFinance from "../FindExpert/f5.svg";
import IconSales from "../FindExpert/f6.svg";
import IconManagement from "../FindExpert/f7.svg";
import IconOperations from "../FindExpert/f8.svg";
import IconHR from "../FindExpert/f9.svg";

// --- MOCK DATA ---
const ENGAGEMENTS = [
  {
    id: 1,
    area: "Marketing",
    expertName: "Albert Flores",
    role: "Growth Marketing Strategist | B2B & SaaS Specialist",
    status: "SOW under review",
    submitted: "18th Jun, 2025",
    type: "Fractional",
    progress: null, 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    area: "Technology",
    expertName: null, 
    role: null,
    status: "Active",
    submitted: "18th Jun, 2025",
    type: "Fractional",
    progress: { text: "Working on 5th deliverables. Delivered 4/5 deliverables" },
    image: null,
  },
  {
    id: 3,
    area: "Finance",
    expertName: null, 
    role: null,
    status: "Pending Action", 
    submitted: "18th Jun, 2025",
    type: "Fractional",
    progress: null,
    actionText: "Accept request to get your project going.",
    image: null,
  },
  {
    id: 4,
    area: "Marketing",
    expertName: "Albert Flores",
    role: "Growth Marketing Strategist | B2B & SaaS Specialist",
    status: "Completed",
    submitted: "18th Jun, 2025",
    type: "Fractional",
    progress: { text: "All deliverables completed." },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    area: "Marketing",
    expertName: "Albert Flores",
    role: "Growth Marketing Strategist | B2B & SaaS Specialist",
    status: "Active",
    submitted: "18th Jun, 2025",
    type: "Fractional",
    progress: { text: "Working on 3rd deliverables. Delivered 2/5 deliverables" },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    area: "Marketing",
    expertName: "Albert Flores",
    role: "Growth Marketing Strategist | B2B & SaaS Specialist",
    status: "Paused",
    submitted: "18th Jun, 2025",
    type: "Fractional",
    progress: { text: "Paused at 2nd deliverable" },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

// --- ICONS MAPPING ---
const AREA_ICONS = {
  technology: IconTech,
  marketing: IconMarketing,
  strategy: IconStrategy,
  leadership: IconLeadership,
  finance: IconFinance,
  sales: IconSales,
  management: IconManagement,
  operations: IconOperations,
  hr: IconHR,
};

const TABS = ["All", "Active", "Paused", "Completed", "Rejected"];

export default function Engagement() {
  const [activeTab, setActiveTab] = useState("All");
const navigate = useNavigate(); // <--- Initialize hook
  // --- FILTER LOGIC ---
  const filteredData = ENGAGEMENTS.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Active") return item.status === "Active";
    if (activeTab === "Paused") return item.status === "Paused";
    if (activeTab === "Completed") return item.status === "Completed";
    if (activeTab === "Rejected") return item.status === "Rejected";
    return true;
  });

  // --- HELPER: STATUS STYLES ---
  const getStatusStyle = (status) => {
    switch (status) {
      case "Active": return { bg: "#BEE8C0", text: "#007C0C" }; 
      case "SOW under review": return { bg: "#FFDA84", text: "#9D6B01" }; 
      case "Paused": return { bg: "#FFDA84", text: "#9D6B01" }; 
      case "Completed": return { bg: "#E7ECFF", text: "#2D60FF" }; 
      case "Rejected": return { bg: "#FF8181", text: "#720001" }; 
      case "Pending Action": return { bg: "#E7ECFF", text: "#2D60FF" }; 
      default: return { bg: "#F3F4F6", text: "#374151" };
    }
  };

  const hasData = filteredData.length > 0;

  return (
    <div 
      className="p-4 md:p-8 bg-white rounded-2xl min-h-screen font-plex-hebrew"
      style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)" }}
    >
      
      {/* HEADER ROW */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
        <h1 className="text-[20px] md:text-[26px] font-semibold text-gray-900">
          Engagement
        </h1>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-5 py-2 rounded-lg text-sm whitespace-nowrap border transition-all font-medium flex-shrink-0
                ${
                  activeTab === tab
                    ? "bg-[#2D60FF] text-white border-[#2D60FF] shadow-sm"
                    : "bg-[#CAD7FF] text-[#2D60FF] border-gray-200 hover:bg-gray-50"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* HORIZONTAL LINE */}
      <div className="w-full h-[1px] bg-gray-200 mb-6"></div>

      {/* === CONTENT SECTION === */}
      {hasData ? (
        
        // --- 1. SHOW ENGAGEMENT BOXES (If Data Exists) ---
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredData.map((item) => {
            const statusStyle = getStatusStyle(item.status);
            const areaKey = item.area.toLowerCase();
            const iconSrc = AREA_ICONS[areaKey] || IconTech;
            const statusText = item.progress?.text || item.actionText || item.status;
            
            const iconBoxBg = statusStyle.bg;
            const iconColor = statusStyle.text;

            return (
              <div 
                key={item.id}
                className="border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-shadow bg-white flex flex-col justify-between cursor-pointer"
                onClick={() => navigate(`/engagement/${item.id}`)} // <--- Navigate on click
              >
                {/* TOP: Expert Info */}
                {item.expertName && (
                  <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
                    <img 
                      src={item.image} 
                      alt={item.expertName} 
                      className="w-12 h-12 rounded-2xl object-cover border border-gray-100"
                    />
                    <div>
                        <p className="text-[14px] font-bold text-[#101828] leading-tight">
                            {item.expertName}
                        </p>
                        <p className="text-[12px] text-gray-500 line-clamp-1">
                            {item.role}
                        </p>
                    </div>
                  </div>
                )}

                {/* MIDDLE: Icon & Status */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col items-start gap-3">
                      <div 
                        className="w-[50px] h-[50px] rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: iconBoxBg }}
                      >
                         <div
                          style={{
                            width: '24px',
                            height: '24px',
                            backgroundColor: iconColor,
                            maskImage: `url(${iconSrc})`,
                            WebkitMaskImage: `url(${iconSrc})`,
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                          }}
                        />
                      </div>
                      <h3 className="text-[16px] font-bold text-[#111827]">
                          {item.area}
                      </h3>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <span
                          className="px-3 py-1 rounded-full text-[12px] font-bold"
                          style={{ backgroundColor: statusStyle.bg, color: statusStyle.text }}
                      >
                          {item.status === "Completed" ? "Complete" : item.status}
                      </span>
                      <div className="flex flex-col items-end gap-1 text-[12px] text-gray-500 font-medium leading-[18px]">
                          <p>Submitted on - <span className="text-gray-900">{item.submitted}</span></p>
                          <p>Engagement type - <span className="text-gray-900">{item.type}</span></p>
                      </div>
                    </div>
                </div>

                {/* FOOTER: Status Line */}
                <div className="w-full h-[1px] bg-gray-100 mb-4"></div>
                <div className="mt-auto">
                    <p className="text-[12px] font-medium text-gray-700 leading-[18px]">
                        <span className="font-bold">Status - </span> 
                        <span className="text-gray-500">{statusText}</span>
                    </p>
                </div>
              </div>
            );
          })}
        </div>

      ) : (

        // --- 2. SHOW EMPTY STATE (If No Data) - AS PER PDF ---
        <div className="flex flex-col items-center justify-center py-20 bg-[#F8FAFF] border border-dashed border-[#DCE4FE] rounded-2xl text-center mt-4" style={{height:'100%'}}>
            
            {/* Icon Circle */}
            <div className="w-16 h-16 bg-[#EEF2FF] rounded-full flex items-center justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17H15M9 13H15M9 9H13M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16L21 8V19C21 20.1046 20.1046 21 19 21Z" stroke="#2D60FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            {/* Title */}
            <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-2">
                No active engagements yet
            </h3>

            {/* Description */}
            <p className="text-[14px] text-[#808080] max-w-sm leading-[22px]">
                Once you connect with an expert, your ongoing collaborations will appear here.
            </p>
        </div>

      )}

    </div>
  );
}