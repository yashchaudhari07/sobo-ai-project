import React from "react";
import { Download } from "lucide-react";

export default function MatchInfoTab({ reqData, statusColor }) {
  return (
    <div className="flex flex-col h-full overflow-y-auto custom-scrollbar p-8">
      
      {/* TOP SECTION */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="w-[52px] h-[52px] bg-white border border-[#EAECF0] rounded-xl flex items-center justify-center mb-4 shadow-sm">
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: statusColor,
                maskImage: `url(${reqData.icon})`,
                WebkitMaskImage: `url(${reqData.icon})`,
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            />
          </div>
          <h2 className="text-[18px] font-bold text-[#101828]">
            {reqData.area}
          </h2>
        </div>

        <div className="text-right space-y-1.5 mt-2">
          <p className="text-[13px] text-[#667085] font-medium">
            Submitted on -{" "}
            <span className="text-[#101828] font-bold">
              {reqData.submitted}
            </span>
          </p>
          <p className="text-[13px] text-[#667085] font-medium">
            Engagement type -{" "}
            <span className="text-[#101828] font-bold">
              {reqData.type}
            </span>
          </p>
        </div>
      </div>

      {/* TITLE */}
      <div className="mb-6">
        <h3 className="text-[16px] font-bold text-[#101828]">
          {reqData.title}
        </h3>
      </div>

      <div className="h-px bg-[#EAECF0] w-full mb-6"></div>

      {/* DESCRIPTION */}
      <div className="mb-6">
        <h4 className="text-[14px] font-medium text-[#344054] mb-2">
          About requirement
        </h4>
        <p className="text-[14px] text-[#667085] leading-[24px]">
          {reqData.desc}
        </p>
      </div>

      <div className="h-px bg-[#EAECF0] w-full mb-6"></div>

      {/* STATUS */}
      <div className="mb-6">
        <p className="text-[14px] text-[#667085] leading-[24px]">
          <span className="text-[#667085]">Status - </span>
          <span className="text-[#101828] font-medium">
            {reqData.statusText}
          </span>
        </p>
      </div>

      <div className="h-px bg-[#EAECF0] w-full mb-6"></div>

      {/* FILES */}
      <div>
        <div className="flex items-center gap-2 cursor-pointer hover:underline group w-fit">
          <span className="text-[14px] text-[#2D60FF] font-medium">
            5 files attached
          </span>
          <Download className="w-4 h-4 text-[#2D60FF]" />
        </div>
      </div>
    </div>
  );
}
