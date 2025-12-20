import { useState, useEffect } from "react";
import Step1BusinessAreaModal from "./Step1BusinessAreaModal";
import Step2EngagementModal from "./Step2EngagementModal";
import SuccessModal from "./SuccessModal";
// FIX 1: फाईलचे नाव 'UpdatedSuccessModal' आहे (d शेवटी), त्यामुळे इंपोर्ट बरोबर करा.
import UpdateSuccessModal from "./UpdatedSuccessModal"; 

export default function FindExpertFlow({ open, onClose, onComplete, isEdit = false, initialData = {} }) {
  // 1. HOOKS
  const [step, setStep] = useState(1);
  const [area, setArea] = useState(null);
  const [engagement, setEngagement] = useState("Coaching");
  const [details, setDetails] = useState("");

  // 2. EFFECT TO HANDLE OPEN/EDIT STATE
  // FIX 2: डिपेंडन्सी फक्त [open] ठेवा. 
  // 'initialData' किंवा 'isEdit' टाकल्यास प्रत्येक क्लिकवर स्टेट रिसेट होईल.
  useEffect(() => {
    if (open) {
      setStep(1); 
      
      if (isEdit && initialData) {
        // Edit Mode: जुना डेटा भरा
        setArea(initialData.area ? initialData.area.toLowerCase() : null);
        setEngagement(initialData.engagement || "Coaching");
        setDetails(initialData.details || "");
      } else {
        // New Request Mode: फॉर्म Reset करा
        setArea(null);
        setEngagement("Coaching");
        setDetails("");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]); 

  // 3. CONDITIONAL RENDER
  if (!open) return null;

  // --- STEP 3: SUCCESS ---
  if (step === 3) {
    const handleSuccessOk = () => {
      onComplete({
        // जर Edit असेल तर जुना ID वापरा, नवीन असेल तर नवीन ID
        id: isEdit ? initialData.id : Date.now(), 
        area,
        engagement,
        details,
        submitted: new Date(), 
        status: "Requested",
        statusText: "Your request has been received. Our team will review and connect you with the best matching expert.",
      });
      onClose();
    };

    // Edit Mode साठी "Updated" वाला Modal
    if (isEdit) {
        return <UpdateSuccessModal onOk={handleSuccessOk} />;
    }

    // New Request साठी जुना Success Modal
    return <SuccessModal onOk={handleSuccessOk} />;
  }

  // --- STEP 1: BUSINESS AREA ---
  if (step === 1) {
    return (
      <Step1BusinessAreaModal
        area={area}
        onSelect={(id) => setArea(id)}
        onNext={() => setStep(2)}
        onClose={onClose}
      />
    );
  }

  // --- STEP 2: ENGAGEMENT & FORM ---
  if (step === 2) {
    return (
      <Step2EngagementModal
        engagement={engagement}
        setEngagement={setEngagement}
        details={details}
        setDetails={setDetails}
        onSubmit={() => setStep(3)}
        onBack={() => setStep(1)}
        onClose={onClose}
      />
    );
  }

  return null;
}