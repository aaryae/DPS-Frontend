import type { KYCSteps, UploadedDocsType } from '@app-types/KYCType';
import { faCamera, faCheckCircle, faCloudUploadAlt, faIdCard, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

const DocumentUploadModel = ({currentStep,formData,uploadedDocs,setUploadedDocs}:KYCSteps ) => {



    const idFrontRef = useRef<HTMLInputElement | null>(null)
    const idBackRef = useRef<HTMLInputElement | null>(null)
    const selfieRef = useRef<HTMLInputElement | null>(null)



  const handleFileChange = (docType: keyof UploadedDocsType, file?: File) => {
    if (!file) return
    setUploadedDocs((prev) => ({ ...prev, [docType]: { name: file.name, file } }))
  }

  const removeFile = (docType: keyof UploadedDocsType) => {
    setUploadedDocs((prev) => ({ ...prev, [docType]: null }))
  }

  return (
    <div>
      {currentStep === 1 && (
        <div className='space-y-8'>
          <div className='text-center'>
            <div className='w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center mx-auto mb-4'>
              <FontAwesomeIcon icon={faCloudUploadAlt} className='text-purple-600' size='2x' />
            </div>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>Document Verification</h2>
            <p className='text-gray-600'>Upload clear photos of your documents</p>
          </div>

          {/* Guidelines */}
          <div className='bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200'>
            <div className='flex items-start gap-4'>
              <FontAwesomeIcon icon={faInfoCircle} className='text-amber-600 flex-shrink-0' size='lg' />
              <div>
                <h4 className='font-semibold text-amber-800 mb-2'>Important Guidelines</h4>
                <ul className='text-amber-700 text-sm space-y-1'>
                  <li>• Ensure documents are clear and all corners are visible</li>
                  <li>• No glare or shadows on the document</li>
                  <li>• All text should be readable</li>
                  <li>• File size should be less than 5MB (JPG, PNG, PDF)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ID Document Upload */}
          <div className='bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl'>
            <div className='flex items-center justify-between mb-6'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center'>
                  <FontAwesomeIcon icon={faIdCard} className='text-indigo-600' />
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-800'>Identity Document</h3>
                  <p className='text-gray-600 text-sm'>Upload {formData.idType || 'ID'} card</p>
                </div>
              </div>
              <span className='bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full'>
                Required
              </span>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              {/* Front Side */}
              <div>
                <label className='text-sm font-semibold text-gray-700 mb-3 block'>
                  Front Side <span className='text-red-500'>*</span>
                </label>
                <input
                  ref={idFrontRef}
                  type='file'
                  accept='image/*,application/pdf'
                  className='hidden'
                  onChange={(e) => handleFileChange('idFront', e.target.files?.[0] ?? undefined)}
                />
                <div
                  className={`relative border-2 border-dashed rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                    uploadedDocs.idFront
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-300 hover:border-indigo-400 hover:bg-indigo-50/30'
                  }`}
                  onClick={() => idFrontRef.current?.click()}
                >
                  {uploadedDocs.idFront ? (
                    <div className='text-center'>
                      <FontAwesomeIcon icon={faCheckCircle} className='text-emerald-600 mx-auto mb-3' size='3x' />
                      <p className='font-semibold text-emerald-700 mb-2'>Uploaded!</p>
                      <p className='text-emerald-600 text-sm mb-4'>{uploadedDocs.idFront.name}</p>
                      <button
                        type='button'
                        onClick={(e) => {
                          e.stopPropagation()
                          removeFile('idFront')
                        }}
                        className='text-red-600 hover:text-red-700 text-sm font-medium'
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className='text-center'>
                      <FontAwesomeIcon icon={faCamera} className='text-gray-400 mx-auto mb-3' size='3x' />
                      <p className='font-semibold text-gray-700 mb-2'>Upload Front Side</p>
                      <p className='text-gray-500 text-sm'>Click to upload</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Back Side */}
              <div>
                <label className='text-sm font-semibold text-gray-700 mb-3 block'>
                  Back Side <span className='text-red-500'>*</span>
                </label>
                <input
                  ref={idBackRef}
                  type='file'
                  accept='image/*,application/pdf'
                  className='hidden'
                  onChange={(e) => handleFileChange('idBack', e.target.files?.[0] ?? undefined)}
                />
                <div
                  className={`relative border-2 border-dashed rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                    uploadedDocs.idBack
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-300 hover:border-indigo-400 hover:bg-indigo-50/30'
                  }`}
                  onClick={() => idBackRef.current?.click()}
                >
                  {uploadedDocs.idBack ? (
                    <div className='text-center'>
                      <FontAwesomeIcon icon={faCheckCircle} className='text-emerald-600 mx-auto mb-3' size='3x' />
                      <p className='font-semibold text-emerald-700 mb-2'>Uploaded!</p>
                      <p className='text-emerald-600 text-sm mb-4'>{uploadedDocs.idBack.name}</p>
                      <button
                        type='button'
                        onClick={(e) => {
                          e.stopPropagation()
                          removeFile('idBack')
                        }}
                        className='text-red-600 hover:text-red-700 text-sm font-medium'
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className='text-center'>
                      <FontAwesomeIcon icon={faCamera} className='text-gray-400 mx-auto mb-3' size='3x' />
                      <p className='font-semibold text-gray-700 mb-2'>Upload Back Side</p>
                      <p className='text-gray-500 text-sm'>Click to upload</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Selfie */}
          <div className='bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl'>
            <div className='flex items-center justify-between mb-6'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center'>
                  <FontAwesomeIcon icon={faCamera} className='text-purple-600' />
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray-800'>Live Selfie</h3>
                  <p className='text-gray-600 text-sm'>Take a selfie holding your ID</p>
                </div>
              </div>
              <span className='bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full'>
                Required
              </span>
            </div>

            <input
              ref={selfieRef}
              type='file'
              accept='image/*'
              className='hidden'
              onChange={(e) => handleFileChange('selfie', e.target.files?.[0] ?? undefined)}
            />

            <div
              className={`relative border-2 border-dashed rounded-2xl p-12 transition-all duration-300 cursor-pointer ${
                uploadedDocs.selfie
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50/30'
              }`}
              onClick={() => selfieRef.current?.click()}
            >
              {uploadedDocs.selfie ? (
                <div className='text-center'>
                  <FontAwesomeIcon icon={faCheckCircle} className='text-emerald-600 mx-auto mb-3' size='4x' />
                  <p className='font-semibold text-emerald-700 text-lg mb-2'>Perfect! Selfie Captured</p>
                  <p className='text-emerald-600 text-sm mb-4'>{uploadedDocs.selfie.name}</p>
                  <button
                    type='button'
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFile('selfie')
                    }}
                    className='text-red-600 hover:text-red-700 text-sm font-medium'
                  >
                    Retake Selfie
                  </button>
                </div>
              ) : (
                <div className='text-center'>
                  <div className='w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <FontAwesomeIcon icon={faCamera} className='text-purple-600' size='2x' />
                  </div>
                  <p className='font-semibold text-gray-700 text-lg mb-2'>Take a Live Selfie</p>
                  <p className='text-gray-500 mb-6'>Hold your ID document next to your face</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DocumentUploadModel
