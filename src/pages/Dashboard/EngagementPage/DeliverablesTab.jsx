import React from "react";
import { Check, ChevronLeft, ChevronUp, Calendar, Download, Eye, Trash2, X } from "lucide-react"; 
import { useState } from "react";
import ApprovedModal from "./ApprovedModal";

export default function DeliverablesTab({
  deliverablesList,
  DeliverableCard,
}) {const [showApproved, setShowApproved] = useState(false);

  return (
    <>
      {deliverablesList.length > 0 ? (
        <div className="flex flex-col h-full overflow-hidden">
          
          {/* LIST */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
            {deliverablesList.map((item) => (
              <DeliverableCard
                key={item.id}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>

          {/* FOOTER BUTTONS */}
          <div className="p-4 border-t border-[#EAECF0] flex justify-end gap-3 bg-white shrink-0">
            <button className="px-6 py-2.5 rounded-lg border border-[#D0D5DD] text-[#344054] font-semibold text-[14px] hover:bg-gray-50 transition shadow-sm bg-white min-w-[100px]">
              Reject
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-[#2D60FF] text-white font-semibold text-[14px] hover:bg-blue-700 shadow-sm transition min-w-[100px]"
              onClick={() => setShowApproved(true)}
>
              Accept
            </button>
          </div>

        </div>
      ) : (
        /* EMPTY STATE */
        <div className="h-full w-full flex items-center justify-center p-8">
          <div className="flex flex-col items-center justify-center bg-[#F8FAFF] border border-dashed border-[#DCE4FE] rounded-2xl text-center w-full h-full max-h-[550px]">
            <div className="w-[60px] h-[60px] bg-[#EEF2FF] rounded-full flex items-center justify-center mb-5 shrink-0">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17H15M9 13H15M9 9H13M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16L21 8V19C21 20.1046 20.1046 21 19 21Z"
                  stroke="#2D60FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="text-[#344054] font-medium text-[15px] leading-[26px] max-w-[440px]">
              Once you've finished your call with the expert and they've shared
              the deliverables,
              <br />
              you'll find them right here.
            </p>
          </div>
        </div>
      )}
      {showApproved && (
  <ApprovedModal
    onClose={() => setShowApproved(false)}
    onNext={() => {
      setShowApproved(false);
      // पुढे payment / first deliverable page ला navigate करू शकतो
    }}
  />
)}
    </>
  );
}
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