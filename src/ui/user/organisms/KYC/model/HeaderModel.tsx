import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderModel = () => {
  return (
      <div className='text-center mb-8'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <div className='w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center'>
              <FontAwesomeIcon icon={faShieldAlt} className='text-white' size='lg' />
            </div>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>KYC Verification</h1>
          </div>
          <p className='text-gray-600'>Complete your Know Your Customer verification in 3 simple steps</p>
        </div>
  )
}

export default HeaderModel
