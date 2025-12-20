import React, { useState } from "react";

export default function RejectExpertModal({ isOpen, onClose, onConfirm }) {
  const [reason, setReason] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000] p-4 font-plex-hebrew backdrop-blur-sm">
      
      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[480px] p-6 relative">
        
        {/* Close Icon (Top Right) */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-[20px] font-bold text-[#1A1A1A] mb-6">
          Reject this expert
        </h2>

        {/* Input Label */}
        <label className="block text-[14px] font-medium text-gray-700 mb-2">
          Enter the reason for call rejection
        </label>

        {/* Text Area */}
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter text"
          className="w-full h-32 border border-gray-300 rounded-xl p-3 text-[14px] focus:outline-none focus:border-[#2D60FF] resize-none mb-6 placeholder-gray-400"
        />

        {/* Reject Button */}
        <button
          onClick={() => onConfirm(reason)}
          disabled={!reason.trim()}
          className={`w-full py-3 rounded-xl font-semibold text-[15px] shadow-sm transition-colors
            ${reason.trim() 
              ? "bg-[#2D60FF] text-white hover:bg-blue-700" 
              : "bg-gray-200 text-gray-400 cursor-not-allowed"}
          `}
        >
          Reject
        </button>

      </div>
    </div>
  );
}