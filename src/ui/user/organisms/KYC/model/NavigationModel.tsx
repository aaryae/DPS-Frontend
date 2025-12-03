import type { KYCSteps } from '@app-types/KYCType'
import { steps } from '@data/KYCSteps.data'
import {
  faCheck,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavigationModel = ({ currentStep, setCurrentStep, formData }: KYCSteps) => {


  const nextStep = () => {
    if (currentStep === 0) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        alert('Please fill Full Name, Email and Phone before continuing. hai ta?')
        return
      }
    }
    setCurrentStep((s) => Math.min(steps.length - 1, s + 1))
  }

  const prevStep = () => setCurrentStep((s) => Math.max(0, s - 1))

  return (
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
  )
}

export default NavigationModel
