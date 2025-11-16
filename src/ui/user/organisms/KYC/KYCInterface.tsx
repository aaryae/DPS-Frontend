// KYCInterface.tsx
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCloudUploadAlt,
  faShieldAlt,
  faCheck,
  faChevronRight,
  faChevronLeft,
  faCamera,
  faCheckCircle,
  faClock,
  faHome,
  faPhone,
  faEnvelope,
  faCalendarAlt,
  faMapMarkerAlt,
  faEye,
  faMagic,
} from "@fortawesome/free-solid-svg-icons";
import type { FormDataType } from "../../../../types/KYC.type";

type IDoc = {
  name: string;
  file: File;
} | null;



interface UploadedDocsType {
  idFront: IDoc;
  idBack: IDoc;
  selfie: IDoc;
  addressProof: IDoc;
}

const KYCInterface: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    occupation: "",
    income: "",
    idType: "aadhaar",
    idNumber: "",
    panNumber: "",
  });

  const [uploadedDocs, setUploadedDocs] = useState<UploadedDocsType>({
    idFront: null,
    idBack: null,
    selfie: null,
    addressProof: null,
  });

  // refs for hidden file inputs
  const idFrontRef = useRef<HTMLInputElement | null>(null);
  const idBackRef = useRef<HTMLInputElement | null>(null);
  const selfieRef = useRef<HTMLInputElement | null>(null);
  const addressRef = useRef<HTMLInputElement | null>(null);

  const steps = [
    { id: 0, title: "Personal Details", icon: faUser, desc: "Basic Information" },
    { id: 1, title: "Document Upload", icon: faCloudUploadAlt, desc: "Identity Verification" },
    { id: 2, title: "Final Review", icon: faShieldAlt, desc: "Confirm & Submit" },
  ];

  const handleInputChange = <K extends keyof FormDataType>(field: K, value: FormDataType[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (docType: keyof UploadedDocsType, file?: File) => {
    if (!file) return;
    setUploadedDocs((prev) => ({ ...prev, [docType]: { name: file.name, file } }));
  };

  const removeFile = (docType: keyof UploadedDocsType) => {
    setUploadedDocs((prev) => ({ ...prev, [docType]: null }));
  };

  const nextStep = () => {
    if (currentStep === 0) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        alert("Please fill Full Name, Email and Phone before continuing.");
        return;
      }
    }
    setCurrentStep((s) => Math.min(steps.length - 1, s + 1));
  };

  const prevStep = () => setCurrentStep((s) => Math.max(0, s - 1));

  const computePercent = () => {
    const total = 6;
    let score = 0;
    if (formData.fullName) score++;
    if (formData.email) score++;
    if (formData.phone) score++;
    if (uploadedDocs.idFront) score++;
    if (uploadedDocs.idBack) score++;
    if (uploadedDocs.selfie) score++;
    return Math.round((score / total) * 100);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert("Please complete required personal details.");
      setCurrentStep(0);
      return;
    }
    if (!uploadedDocs.idFront || !uploadedDocs.idBack || !uploadedDocs.selfie) {
      if (!window.confirm("Some required documents are missing. Still submit?")) {
        setCurrentStep(1);
        return;
      }
    }

    const payload = {
      formData,
      documents: {
        idFront: uploadedDocs.idFront?.name ?? null,
        idBack: uploadedDocs.idBack?.name ?? null,
        selfie: uploadedDocs.selfie?.name ?? null,
        addressProof: uploadedDocs.addressProof?.name ?? null,
      },
    };

    // demo: log; replace with API call
    // e.g. const fd = new FormData(); append fields + files from uploadedDocs...
    console.log("Submitting KYC payload:", payload);
    alert("KYC submitted (demo). Check console for payload.");
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <FontAwesomeIcon icon={faShieldAlt} className="text-white" size="lg" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">KYC Verification</h1>
          </div>
          <p className="text-gray-600">Complete your Know Your Customer verification in 3 simple steps</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {steps.map((step, idx) => (
              <div key={step.id} className="flex flex-col items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 ${
                    idx <= currentStep
                      ? "bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-500/30 scale-110"
                      : "bg-gray-200"
                  }`}
                >
                  {idx < currentStep ? (
                    <FontAwesomeIcon icon={faCheck} className="text-white" />
                  ) : (
                    <FontAwesomeIcon icon={step.icon} className={idx <= currentStep ? "text-white" : "text-gray-500"} />
                  )}
                </div>
                <div className="text-center">
                  <p className={`font-semibold text-sm ${idx <= currentStep ? "text-gray-800" : "text-gray-400"}`}>{step.title}</p>
                  <p className={`text-xs ${idx <= currentStep ? "text-gray-600" : "text-gray-400"}`}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 1 */}
        {currentStep === 0 && (
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faUser} className="text-indigo-600" size="2x" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Personal Information</h2>
              <p className="text-gray-600">Tell us about yourself to get started</p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Basic Details</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500" />
                    Full Name
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500" />
                    Date of Birth
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => handleInputChange("dob", e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
                    Email Address
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-500" />
                    Phone Number
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FontAwesomeIcon icon={faHome} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Address Information</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500" />
                    Complete Address
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="House/Flat No, Street, Landmark"
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="City"
                      className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      placeholder="State"
                      className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">
                      PIN Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.pincode}
                      onChange={(e) => handleInputChange("pincode", e.target.value)}
                      placeholder="000000"
                      maxLength={6}
                      className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">🪪</div>
                <h3 className="text-xl font-bold text-gray-800">Identity Details</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">
                    ID Type <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { value: "aadhaar", label: "Aadhaar Card", emoji: "🪪" },
                      { value: "passport", label: "Passport", emoji: "🛂" },
                      { value: "driving", label: "Driving License", emoji: "🚗" },
                      { value: "voter", label: "Voter ID", emoji: "🗳️" },
                    ].map((id) => (
                      <button
                        key={id.value}
                        type="button"
                        onClick={() => handleInputChange("idType", id.value as FormDataType["idType"])}
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                          formData.idType === id.value ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-lg" : "border-gray-200 hover:border-gray-300 text-gray-700"
                        }`}
                      >
                        <div className="text-3xl mb-2">{id.emoji}</div>
                        <p className="text-sm font-medium">{id.label}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">
                      ID Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.idNumber}
                      onChange={(e) => handleInputChange("idNumber", e.target.value)}
                      placeholder="Enter ID number"
                      className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">
                      PAN Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.panNumber}
                      onChange={(e) => handleInputChange("panNumber", e.target.value.toUpperCase())}
                      placeholder="ABCDE1234F"
                      maxLength={10}
                      className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 1 && (
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faCloudUploadAlt} className="text-purple-600" size="2x" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Document Verification</h2>
              <p className="text-gray-600">Upload clear photos of your documents</p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl">🪪</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Identity Document</h3>
                    <p className="text-gray-600 text-sm">Upload ID card</p>
                  </div>
                </div>
                <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">Required</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Front Side */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">
                    Front Side <span className="text-red-500">*</span>
                  </label>
                  <input
                    ref={idFrontRef}
                    type="file"
                    accept="image/*,application/pdf"
                    className="hidden"
                    onChange={(e) => handleFileChange("idFront", e.target.files?.[0] ?? undefined)}
                  />
                  <div
                    className={`relative border-2 border-dashed rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                      uploadedDocs.idFront ? "border-emerald-500 bg-emerald-50" : "border-gray-300 hover:border-indigo-400 hover:bg-indigo-50/30"
                    }`}
                    onClick={() => idFrontRef.current?.click()}
                  >
                    {uploadedDocs.idFront ? (
                      <div className="text-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-600 mx-auto mb-3" size="3x" />
                        <p className="font-semibold text-emerald-700 mb-2">Uploaded!</p>
                        <p className="text-emerald-600 text-sm mb-4">{uploadedDocs.idFront.name}</p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile("idFront");
                          }}
                          className="text-red-600 hover:text-red-700 text-sm font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <FontAwesomeIcon icon={faCamera} className="text-gray-400 mx-auto mb-3" size="3x" />
                        <p className="font-semibold text-gray-700 mb-2">Upload Front Side</p>
                        <p className="text-gray-500 text-sm">Click to upload</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Back Side */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">
                    Back Side <span className="text-red-500">*</span>
                  </label>
                  <input
                    ref={idBackRef}
                    type="file"
                    accept="image/*,application/pdf"
                    className="hidden"
                    onChange={(e) => handleFileChange("idBack", e.target.files?.[0] ?? undefined)}
                  />
                  <div
                    className={`relative border-2 border-dashed rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                      uploadedDocs.idBack ? "border-emerald-500 bg-emerald-50" : "border-gray-300 hover:border-indigo-400 hover:bg-indigo-50/30"
                    }`}
                    onClick={() => idBackRef.current?.click()}
                  >
                    {uploadedDocs.idBack ? (
                      <div className="text-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-600 mx-auto mb-3" size="3x" />
                        <p className="font-semibold text-emerald-700 mb-2">Uploaded!</p>
                        <p className="text-emerald-600 text-sm mb-4">{uploadedDocs.idBack.name}</p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile("idBack");
                          }}
                          className="text-red-600 hover:text-red-700 text-sm font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <FontAwesomeIcon icon={faCamera} className="text-gray-400 mx-auto mb-3" size="3x" />
                        <p className="font-semibold text-gray-700 mb-2">Upload Back Side</p>
                        <p className="text-gray-500 text-sm">Click to upload</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Selfie */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faCamera} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Live Selfie</h3>
                    <p className="text-gray-600 text-sm">Take a selfie holding your ID</p>
                  </div>
                </div>
                <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">Required</span>
              </div>

              <input
                ref={selfieRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileChange("selfie", e.target.files?.[0] ?? undefined)}
              />

              <div
                className={`relative border-2 border-dashed rounded-2xl p-12 transition-all duration-300 cursor-pointer ${
                  uploadedDocs.selfie ? "border-emerald-500 bg-emerald-50" : "border-gray-300 hover:border-purple-400 hover:bg-purple-50/30"
                }`}
                onClick={() => selfieRef.current?.click()}
              >
                {uploadedDocs.selfie ? (
                  <div className="text-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-600 mx-auto mb-3" size="4x" />
                    <p className="font-semibold text-emerald-700 text-lg mb-2">Perfect! Selfie Captured</p>
                    <p className="text-emerald-600 text-sm mb-4">{uploadedDocs.selfie.name}</p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile("selfie");
                      }}
                      className="text-red-600 hover:text-red-700 text-sm font-medium"
                    >
                      Retake Selfie
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FontAwesomeIcon icon={faCamera} className="text-purple-600" size="2x" />
                    </div>
                    <p className="font-semibold text-gray-700 text-lg mb-2">Take a Live Selfie</p>
                    <p className="text-gray-500 mb-6">Hold your ID document next to your face</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {currentStep === 2 && (
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faShieldAlt} className="text-emerald-600" size="2x" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Review Your Information</h2>
              <p className="text-gray-600">Please verify all details before submission</p>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-3xl text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Application Status</h3>
                  <p className="text-white/90">You're almost there!</p>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-bold">{computePercent()}%</div>
                  <p className="text-white/90 text-sm">Complete</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <FontAwesomeIcon icon={faCheckCircle} className="mb-2" />
                  <p className="font-semibold">Personal Details</p>
                  <p className="text-white/80 text-sm">Completed</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <FontAwesomeIcon icon={faCheckCircle} className="mb-2" />
                  <p className="font-semibold">Documents</p>
                  <p className="text-white/80 text-sm">Uploaded</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <FontAwesomeIcon icon={faClock} className="mb-2" />
                  <p className="font-semibold">Verification</p>
                  <p className="text-white/80 text-sm">Pending</p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">Personal Information</h3>
                <button
                  type="button"
                  onClick={() => setCurrentStep(0)}
                  className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1"
                >
                  <FontAwesomeIcon icon={faEye} />
                  Edit
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="text-gray-600 text-sm mb-1">Full Name</p>
                  <p className="font-semibold text-gray-800">{formData.fullName || "Not provided"}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="text-gray-600 text-sm mb-1">Email</p>
                  <p className="font-semibold text-gray-800">{formData.email || "Not provided"}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="text-gray-600 text-sm mb-1">Phone</p>
                  <p className="font-semibold text-gray-800">{formData.phone || "Not provided"}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="text-gray-600 text-sm mb-1">ID Number</p>
                  <p className="font-semibold text-gray-800">{formData.idNumber || "Not provided"}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200">
              <div className="flex items-start gap-4">
                <FontAwesomeIcon icon={faMagic} className="text-emerald-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-1">Ready to Submit!</h4>
                  <p className="text-emerald-700 text-sm">Your application is complete. Click the submit button below.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-xl mt-8">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              currentStep === 0 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-lg"
            }`}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            Previous
          </button>

          <div className="text-center">
            <p className="text-gray-600 text-sm">Step {currentStep + 1} of {steps.length}</p>
            <p className="text-xs text-gray-400">Make sure all information is correct</p>
          </div>

          <div className="flex items-center gap-3">
            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold bg-indigo-600 text-white hover:shadow-lg transition-all duration-200"
              >
                Next
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold bg-emerald-600 text-white hover:shadow-lg transition-all duration-200"
              >
                <FontAwesomeIcon icon={faCheck} />
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default KYCInterface;
