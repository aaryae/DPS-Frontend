import { faShield, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const FinalReview = () => {
  const [status, setStatus] = useState<String>('In Process')
  return (
    <div className='bg-[#fefce8] flex flex-col gap-3 p-7 rounded-3xl border-2 border-[#eab308] w-full '>
      <FontAwesomeIcon icon={faShieldHalved} color='white' className='p-4 rounded-2xl bg-[#eab308] ' />
      <h3 className='font-bold text-md'>Final Review</h3>
      <h5 className='text-[#525252] text-sm'>Under manual review</h5>
      <span className='bg-[#cccccc] rounded-3xl p-1.5 w-fit text-[#525252] text-sm'>{status}</span>
    </div>
  )
}

export default FinalReview
