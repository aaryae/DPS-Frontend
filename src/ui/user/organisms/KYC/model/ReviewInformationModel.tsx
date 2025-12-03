import type { KYCSteps } from '@app-types/KYCType'
import { faCheckCircle, faClock, faEye, faMagic, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ReviewInformationModel = ({currentStep,setCurrentStep,formData}:KYCSteps) => {
    
  return (
    <div>
       
              {currentStep === 2 && (
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
                        {/* <div className='text-5xl font-bold'>{computePercent()}%</div> */}
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
              )}
    </div>
  )
}

export default ReviewInformationModel
