import { faRightLeft } from '@fortawesome/free-solid-svg-icons/faRightLeft'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import KYCInterface from './KYCInterface'

const PersonalDetails = () => {
  const [status, setStatus] = useState<string>('In Process')
  const [KYCModel, setKYCModel] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setKYCModel(!KYCModel)}
        className='bg-emerald-100 flex flex-col gap-3 p-7 rounded-3xl border-2 border-emerald-200 w-full cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02]'
      >
        <FontAwesomeIcon icon={faRightLeft} className='p-4 rounded-2xl bg-emerald-400' />
        <h3 className='font-bold text-md'>Personal Detail</h3>
        <h5 className='text-[#525252] text-sm'>Basic Information Verified</h5>
        <span className='bg-emerald-300 rounded-3xl p-1.5 w-fit text-[#525252] text-sm'>{status}</span>
      </div>

      {/* Modal Overlay */}
      {KYCModel && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setKYCModel(false)}
        >
          <div 
            className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setKYCModel(false)}
              className="sticky top-4 right-4 float-right z-10 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
            >
              ✕
            </button>
            
            {/* KYC Interface */}
            <KYCInterface onClose={() => setKYCModel(false)} />
          </div>
        </div>
      )}
    </>
  )
}

export default PersonalDetails