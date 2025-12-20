import React from "react";

export default function SOWTab() {
  return (
    <div className="flex flex-col h-full overflow-hidden p-8">
      
      {/* Warning Box */}
      <div className="bg-[#FFFAEB] border border-[#FEDF89] rounded-lg p-4 mb-6 shrink-0">
        <p className="text-[14px] text-[#B54708] font-medium leading-[20px]">
          Please review the SOW, fill in the blanks, and once accepted, the
          deliverables will be automatically approved.
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="text-[#344054] text-[14px] leading-[24px] space-y-6 overflow-y-auto custom-scrollbar pr-2">
        <div>
          This Engagement Plan is in response to the following Customer
          engagement match request:
          <br />
          <span className="text-[#667085]">
            [Insert customer match request]
          </span>
        </div>

        <p>
          The Engagement Plan is primarily based on information contained in the
          Customer engagement match request. Further diligence in regards to the
          Customer will likely result in changes to the Engagement Plan. Any
          changes to the Engagement Plan will be documented in an Engagement
          Progress Review (EPR) and presented to the customer for review and
          approval.
        </p>

        <p>
          Each phase of the Engagement is billed in advance. Sobo will charge the
          Customer credit card on file for the first phase of the Engagement as
          detailed below upon verbal approval of this plan by the Customer. Each
          subsequent phase will be billed in advance in the same manner upon
          verbal approval by the Customer.
        </p>

        <p>
          After notifying their Sobo engagement manager and resolving all
          incurred engagement fees and expenses the Customer has the right to
          terminate this agreement.
        </p>

        <div className="mt-8 mb-4">
          <h3 className="text-[14px] font-bold text-[#101828] uppercase">
            FORM OF STATEMENT OF WORK
          </h3>
        </div>

        <p>
          This Statement of Work ("SOW"), adopts and incorporates by reference
          the terms and conditions of the Master Platform and Services Agreement
          ("Master Services Agreement"), which was entered into on{" "}
          ________________, 2024, between Sobo Platform, LLC, a Georgia limited
          liability company ("Sobo") and ________________ ("Customer," and
          together with Sobo, the "Parties," and each, a "Party"), as it may be
          amended from time to time. This SOW is effective beginning on
          ________________, 2024 ("Effective Date") and will remain in effect
          until terminated in accordance with the Master Services Agreement.
        </p>
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 pt-6 border-t border-[#EAECF0] flex justify-end gap-3 shrink-0">
        <button className="px-6 py-2.5 rounded-lg border border-[#D0D5DD] text-[#344054] font-semibold text-[14px] hover:bg-gray-50 transition shadow-sm bg-white min-w-[100px]">
          Reject
        </button>
        <button className="px-6 py-2.5 rounded-lg bg-[#2D60FF] text-white font-semibold text-[14px] hover:bg-blue-700 shadow-sm transition min-w-[100px]">
          Accept
        </button>
      </div>
    </div>
  );
}
