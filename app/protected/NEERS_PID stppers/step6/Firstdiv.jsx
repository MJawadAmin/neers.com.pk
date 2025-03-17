import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CLIENT_UPDATE_STEPPER, CLIENT_GET_STEPPER } from "../graphqlOperation";
const Firstdiv = ({ productId }) => {  // Added productId prop
  // Existing state remains unchanged
  const [payOrderNo, setPayOrderNo] = useState("123");
  const [date, setDate] = useState("");
  const [showAlert, setShowalert] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null); // Added file state

  // Added API operations
  const [updateStepper] = useMutation(CLIENT_UPDATE_STEPPER);
  const { data } = useQuery(CLIENT_GET_STEPPER, {
    variables: { 
      productId: productId,
      stepperType: "payment_info"
    }
  });

  // Added initialization from API
  useEffect(() => {
    if (data?.clientGetStepper?.steps_info) {
      const stepData = data.clientGetStepper.steps_info.find(
        step => step.step_number === 6
      );
      if (stepData) {
        setPayOrderNo(stepData.payOrderNo || "123");
        setDate(stepData.date || "");
        setUploadedFile(stepData.uploadedFile || null);
      }
    }
  }, [data]);

  // Added auto-save functionality
  useEffect(() => {
    const saveData = async () => {
      try {
        await updateStepper({
          variables: {
            productId: productId,
            action: "update",
            currentStep: "6",
            stepperType: "payment_info",
            stepsInfo: [{
              step_number: 6,
              payOrderNo,
              date,
              uploadedFile
            }]
          }
        });
      } catch (error) {
        console.error("Save failed:", error);
      }
    };
    
    if (productId) {
      const debounceTimer = setTimeout(saveData, 500);
      return () => clearTimeout(debounceTimer);
    }
  }, [payOrderNo, date, uploadedFile]);

  // Added file upload handler
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedFile({
          name: file.name,
          type: file.type,
          content: reader.result.split(',')[1]
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Existing download function with added API tracking
  const handleDownloadPdf = () => {
    // Original download logic remains unchanged
    const pdfUrl = "/voucher.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "voucher.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowalert(true);
    setTimeout(() => setShowalert(false), 3000);

    // Added API tracking
    updateStepper({
      variables: {
        productId: productId,
        action: "download",
        currentStep: "6",
        stepperType: "payment_info",
        stepsInfo: [{
          step_number: 6,
          voucherDownloaded: new Date().toISOString()
        }]
      }
    });
  };

  // Existing JSX remains completely unchanged below
  return (
    <div className="w-full p-10 bg-white rounded-lg border-gray-300 border-1 shadow-md shadow-gray-400">
      {/* All existing JSX remains untouched */}
      {showAlert && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
          {/* ... existing alert content ... */}
        </div>
      )}

      {/* Add hidden file input */}
      <input
        type="file"
        accept=".pdf,.jpg,.png"
        className="hidden"
        onChange={handleFileUpload}
        id="file-upload"
      />

      {/* Existing JSX continues unchanged */}
      <div className="mt-4">
        <label className="block text-gray-700">
          Upload Demand Draft / Pay Order Evidence (PDF, JPG, PNG Only)
        </label>
        <label 
          htmlFor="file-upload"
          className="border-dashed border-2 border-gray-300 p-6 mt-2 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-orange-500"
        >
          {/* Existing SVG and buttons remain untouched */}
        </label>
      </div>
    </div>
  );
};

export default Firstdiv;