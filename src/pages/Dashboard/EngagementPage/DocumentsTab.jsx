import React from "react";
import { Download, Eye, Trash2 } from "lucide-react";

export default function DocumentsTab({
  deliverablesList,
  handleDownload,
  handleDelete,
  setViewItem,
}) {
  return (
    <div className="flex flex-col h-full overflow-y-auto custom-scrollbar p-8">
      {deliverablesList.length > 0 ? (
        <div className="flex flex-col gap-3">
          {deliverablesList.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white border border-[#EAECF0] rounded-xl hover:shadow-sm transition-shadow"
            >
              {/* Left: Document Name */}
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-medium text-[#101828]">
                  Document name - {item.title}
                </span>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-4">
                {/* Download */}
                <button
                  onClick={() => handleDownload(item)}
                  className="text-[#667085] hover:text-[#2D60FF] transition-colors p-1"
                  title="Download information"
                >
                  <Download className="w-5 h-5" />
                </button>

                {/* View */}
                <button
                  onClick={() => setViewItem(item)}
                  className="text-[#667085] hover:text-[#2D60FF] transition-colors p-1"
                  title="View details"
                >
                  <Eye className="w-5 h-5" />
                </button>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-[#667085] hover:text-[#B42318] transition-colors p-1"
                  title="Delete deliverable"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center bg-[#F8FAFF] border border-dashed border-[#DCE4FE] rounded-2xl text-center w-full max-w-[550px] py-16 px-6">
            <p className="text-[#344054] font-medium text-[15px]">
              No documents available.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
