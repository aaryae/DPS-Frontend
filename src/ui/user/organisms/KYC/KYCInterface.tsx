import {
  faCheck,
  faCheckCircle,
  faChevronLeft,
  faChevronRight,
  faClock,
  faCloudUploadAlt,
  faEye,
  faMagic,
  faShieldAlt,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import type { FormDataType } from '../../../../types/KYCType'
import DocumentUploadModel from './model/DocumentUploadModel'
import ReviewInformationModel from './model/ReviewInformationModel'

type IDoc = {
  name: string
  file: File
} | null

interface UploadedDocsType {
  idFront: IDoc
  idBack: IDoc
  selfie: IDoc
  addressProof: IDoc
}

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
    pincode: '',
    occupation: '',
    income: '',
    idType: 'aadhaar',
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

 

  const nextStep = () => {
    if (currentStep === 0) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        alert('Please fill Full Name, Email and Phone before continuing.')
        return
      }
    }
    setCurrentStep((s) => Math.min(steps.length - 1, s + 1))
  }

  const prevStep = () => setCurrentStep((s) => Math.max(0, s - 1))

  const computePercent = () => {
    const total = 6
    let score = 0
    if (formData.fullName) score++
    if (formData.email) score++
    if (formData.phone) score++
    if (uploadedDocs.idFront) score++
    if (uploadedDocs.idBack) score++
    if (uploadedDocs.selfie) score++
    return Math.round((score / total) * 100)
  }

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
       {/* <PersonalDetailsModel currentStep={0}/> */}

        {/* Step 2: Document Upload */}
        <DocumentUploadModel currentStep={0}/>

        {/* Step 3 */}
        {/* {currentStep === 2 && (
          <div className='space-y-8'>
            <div className='text-center'>
              <div className='w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl flex items-center justify-center mx-auto mb-4'>
                <FontAwesomeIcon icon={faShieldAlt} className='text-emerald-600' size='2x' />
              </div>
              <h2 className='text-3xl font-bold text-gray-800 mb-2'>Review Your Information</h2>
              <p className='text-gray-600'>Please verify all details before submission</p>
            </div>

            <div className='bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-3xl text-white'>
              <div className='flex items-center justify-between mb-6'>
                <div>
                  <h3 className='text-2xl font-bold mb-2'>Application Status</h3>
                  <p className='text-white/90'>You're almost there!</p>
                </div>
                <div className='text-right'>
                  <div className='text-5xl font-bold'>{computePercent()}%</div>
                  <p className='text-white/90 text-sm'>Complete</p>
                </div>
              </div>

              <div className='grid md:grid-cols-3 gap-4'>
                <div className='bg-white/20 backdrop-blur-sm p-4 rounded-2xl'>
                  <FontAwesomeIcon icon={faCheckCircle} className='mb-2' />
                  <p className='font-semibold'>Personal Details</p>
                  <p className='text-white/80 text-sm'>Completed</p>
                </div>
                <div className='bg-white/20 backdrop-blur-sm p-4 rounded-2xl'>
                  <FontAwesomeIcon icon={faCheckCircle} className='mb-2' />
                  <p className='font-semibold'>Documents</p>
                  <p className='text-white/80 text-sm'>Uploaded</p>
                </div>
                <div className='bg-white/20 backdrop-blur-sm p-4 rounded-2xl'>
                  <FontAwesomeIcon icon={faClock} className='mb-2' />
                  <p className='font-semibold'>Verification</p>
                  <p className='text-white/80 text-sm'>Pending</p>
                </div>
              </div>
            </div>

            <div className='bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-xl font-bold text-gray-800'>Personal Information</h3>
                <button
                  type='button'
                  onClick={() => setCurrentStep(0)}
                  className='text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1'
                >
                  <FontAwesomeIcon icon={faEye} />
                  Edit
                </button>
              </div>

              <div className='grid md:grid-cols-2 gap-4'>
                <div className='p-4 bg-gray-50 rounded-2xl'>
                  <p className='text-gray-600 text-sm mb-1'>Full Name</p>
                  <p className='font-semibold text-gray-800'>{formData.fullName || 'Not provided'}</p>
                </div>
                <div className='p-4 bg-gray-50 rounded-2xl'>
                  <p className='text-gray-600 text-sm mb-1'>Email</p>
                  <p className='font-semibold text-gray-800'>{formData.email || 'Not provided'}</p>
                </div>
                <div className='p-4 bg-gray-50 rounded-2xl'>
                  <p className='text-gray-600 text-sm mb-1'>Phone</p>
                  <p className='font-semibold text-gray-800'>{formData.phone || 'Not provided'}</p>
                </div>
                <div className='p-4 bg-gray-50 rounded-2xl'>
                  <p className='text-gray-600 text-sm mb-1'>ID Number</p>
                  <p className='font-semibold text-gray-800'>{formData.idNumber || 'Not provided'}</p>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200'>
              <div className='flex items-start gap-4'>
                <FontAwesomeIcon icon={faMagic} className='text-emerald-600 flex-shrink-0' />
                <div>
                  <h4 className='font-semibold text-emerald-800 mb-1'>Ready to Submit!</h4>
                  <p className='text-emerald-700 text-sm'>
                    Your application is complete. Click the submit button below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )} */}
        <ReviewInformationModel currentStep={0} setCurrentStep={setCurrentStep}/>

        {/* Navigation */}
        <div className='flex justify-between items-center bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-xl mt-8'>
          <button
            type='button'
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              currentStep === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-lg'
            }`}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            {/* Previous */}
            forward
          </button>

          <div className='text-center'>
            <p className='text-gray-600 text-sm'>
              Step {currentStep + 1} of {steps.length}
            </p>
            <p className='text-xs text-gray-400'>Make sure all information is correct</p>
          </div>

          <div className='flex items-center gap-3'>
            {currentStep < steps.length - 1 ? (
              <button
                type='button'
                onClick={nextStep}
                className='flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold bg-indigo-600 text-white hover:shadow-lg transition-all duration-200'
              >
                Next
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            ) : (
              <button
                type='submit'
                className='flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold bg-emerald-600 text-white hover:shadow-lg transition-all duration-200'
              >
                <FontAwesomeIcon icon={faCheck} />
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  )
}

export default KYCInterface
