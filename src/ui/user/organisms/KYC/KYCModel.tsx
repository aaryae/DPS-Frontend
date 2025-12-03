import type { FormDataType, UploadedDocsType } from '@app-types/KYCType'
import React, { useState } from 'react'
import DocumentUploadModel from './model/DocumentUploadModel'
import HeaderModel from './model/HeaderModel'
import NavigationModel from './model/NavigationModel'
import PersonalDetailsModel from './model/PersonalDetailsModel'
import ProgressBarModel from './model/ProgressBarModel'
import ReviewInformationModel from './model/ReviewInformationModel'

interface KYCInterfaceProps {
  onClose?: () => void
}

const KycModel = ({ onClose }: KYCInterfaceProps) => {
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
  })

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

    if (onClose) {
      onClose()
    }
  }

  return (
    <form onSubmit={handleSubmit} className='bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4 md:p-8 modal-container'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <HeaderModel />

        {/* Progress Bar */}
        <ProgressBarModel
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
          uploadedDocs={uploadedDocs}
          setUploadedDocs={setUploadedDocs}
        />
        {/* first model */}
        <PersonalDetailsModel
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
          uploadedDocs={uploadedDocs}
          setUploadedDocs={setUploadedDocs}
        />

        {/* Step 2: Document Upload */}
        <DocumentUploadModel
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
          uploadedDocs={uploadedDocs}
          setUploadedDocs={setUploadedDocs}
        />

        {/* Step 3 */}
        <ReviewInformationModel
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
          uploadedDocs={uploadedDocs}
          setUploadedDocs={setUploadedDocs}
        />

        {/* Navigation */}
        <NavigationModel
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
          setFormData={setFormData}
          uploadedDocs={uploadedDocs}
          setUploadedDocs={setUploadedDocs}
        />
      </div>
    </form>
  )
}

export default KycModel
