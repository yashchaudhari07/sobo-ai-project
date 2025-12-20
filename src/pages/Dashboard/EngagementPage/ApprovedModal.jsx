import React from "react";
import { X } from "lucide-react";

export default function ApprovedModal({ onClose, onNext }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[1000]">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[420px] p-6 relative">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#98A2B3] hover:text-[#344054]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h2 className="text-[20px] font-bold text-[#101828] mb-3">
          Approved!
        </h2>

        {/* Divider */}
        <div className="h-px bg-[#EAECF0] mb-4"></div>

        {/* Message */}
        <p className="text-[14px] text-[#475467] leading-[22px] mb-6">
          Excellent choice, you have accepted the engagement plan.
          To activate this engagement, pay for the first deliverable.
        </p>

        {/* Action */}
        <div className="flex justify-end">
          <button
            onClick={onNext}
            className="px-6 py-2.5 bg-[#2D60FF] text-white text-[14px] font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
