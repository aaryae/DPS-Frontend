import { faRightLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const DocumentUpload = () => {
  const [status, setStatus] = useState<String>('In Process')
  return (
    <div className='bg-emerald-100 flex flex-col gap-3 p-7 rounded-3xl border-2 border-emerald-200 w-full '>
      <FontAwesomeIcon icon={faRightLeft} className='p-4 rounded-2xl bg-emerald-400 bg-' />
      <h3 className='font-bold text-md'>Personal Detail</h3>
      <h5 className='text-[#525252] text-sm'>Basic Information Verified</h5>
      <span className='bg-emerald-300 rounded-3xl p-1.5 w-fit text-[#525252] text-sm'>{status}</span>
    </div>
  )
}

export default DocumentUpload
