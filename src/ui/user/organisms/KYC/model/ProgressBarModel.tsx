import type { KYCSteps } from '@app-types/KYCType'
import { steps } from '@data/KYCSteps.data'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProgressBarModel = ({ currentStep }: KYCSteps) => {
  return (
    <div className='mb-12'>
      <div className='flex items-center justify-between relative '>
        <div className='absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10'>
          <div
            className='h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500'
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {steps.map((step, index) => (
          <div key={step.id} className='flex flex-col items-center flex-1'>
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 ${
                index <= currentStep
                  ? 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-500/30 scale-110'
                  : 'bg-gray-200'
              }`}
            >
              {index < currentStep ? (
                <FontAwesomeIcon icon={faCheck} className='text-white' />
              ) : (
                <FontAwesomeIcon icon={step.icon} className={index <= currentStep ? 'text-white' : 'text-gray-500'} />
              )}
            </div>
            <div className='text-center'>
              <p className={`font-semibold text-sm ${index <= currentStep ? 'text-gray-800' : 'text-gray-400'}`}>
                {step.title}
              </p>
              <p className={`text-xs ${index <= currentStep ? 'text-gray-600' : 'text-gray-400'}`}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressBarModel
