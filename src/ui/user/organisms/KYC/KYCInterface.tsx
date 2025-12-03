import type { FormDataType, UploadedDocsType } from '@app-types/KYCType'
import {
  faCheck,
  faCloudUploadAlt,
  faShieldAlt,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import DocumentUploadModel from './model/DocumentUploadModel'
import NavigationModel from './model/NavigationModel'
import PersonalDetailsModel from './model/PersonalDetailsModel'
import ReviewInformationModel from './model/ReviewInformationModel'



interface KYCInterfaceProps {
  onClose?: () => void
}

const KYCInterface: React.FC<KYCInterfaceProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [formData, setFormData] = useState<FormDataType>({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    occupation: '',
    income: '',
    idType: 'citizenship',
    idNumber: '',
    panNumber: '',
  })

  const [uploadedDocs, setUploadedDocs] = useState<UploadedDocsType>({
    idFront: null,
    idBack: null,
    selfie: null,
    addressProof: null,
  })

  const steps = [
    { id: 0, title: 'Personal Details', icon: faUser, desc: 'Basic Information' },
    { id: 1, title: 'Document Upload', icon: faCloudUploadAlt, desc: 'Identity Verification' },
    { id: 2, title: 'Final Review', icon: faShieldAlt, desc: 'Confirm & Submit' },
  ]



  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!formData.fullName || !formData.email) {
      alert('Please complete required personal details.')
      setCurrentStep(0)
      return
    }
    if (!uploadedDocs.idFront || !uploadedDocs.idBack || !uploadedDocs.selfie) {
      if (!window.confirm('Some required documents are missing. Still submit?')) {
        setCurrentStep(1)
        return
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
    }

    console.log('Submitting KYC payload:', payload)
    alert('KYC submitted successfully!')

    // Close modal after submission
    if (onClose) {
      onClose()
    }
  }

  return (
    <form onSubmit={handleSubmit} className='bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4 md:p-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <div className='w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center'>
              <FontAwesomeIcon icon={faShieldAlt} className='text-white' size='lg' />
            </div>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>KYC Verification</h1>
          </div>
          <p className='text-gray-600'>Complete your Know Your Customer verification in 3 simple steps</p>
        </div>

        {/* Progress Bar */}
        <div className='mb-12'>
          <div className='flex items-center justify-between relative'>
            <div className='absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10'>
              <div
                className='h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500'
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {steps.map((step, idx) => (
              <div key={step.id} className='flex flex-col items-center flex-1'>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 ${
                    idx <= currentStep
                      ? 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-500/30 scale-110'
                      : 'bg-gray-200'
                  }`}
                >
                  {idx < currentStep ? (
                    <FontAwesomeIcon icon={faCheck} className='text-white' />
                  ) : (
                    <FontAwesomeIcon icon={step.icon} className={idx <= currentStep ? 'text-white' : 'text-gray-500'} />
                  )}
                </div>
                <div className='text-center'>
                  <p className={`font-semibold text-sm ${idx <= currentStep ? 'text-gray-800' : 'text-gray-400'}`}>
                    {step.title}
                  </p>
                  <p className={`text-xs ${idx <= currentStep ? 'text-gray-600' : 'text-gray-400'}`}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* first model */}
        <PersonalDetailsModel
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
        />

        {/* Step 2: Document Upload */}
        <DocumentUploadModel
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
        />

        {/* Step 3 */}
        <ReviewInformationModel
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
        />

        {/* Navigation */}
        <NavigationModel
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </form>
  )
}

export default KYCInterface
