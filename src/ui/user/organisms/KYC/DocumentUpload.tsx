import { faDochub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const DocumentUpload = () => {
  const [status, setStatus] = useState<String>('In Process')
  return (
    <div className='bg-emerald-100 flex flex-col gap-3 p-7 rounded-3xl border-2 border-[#10b981] w-full '>
      <FontAwesomeIcon icon={faDochub} color='white'  className='p-4 rounded-2xl bg-[#10b981] ' />
      <h3 className='font-bold text-md'>Document Upload</h3>
      <h5 className='text-[#525252] text-sm'>ID documents submitted</h5>
      <span className='bg-emerald-200 rounded-3xl p-1.5 w-fit text-[#525252] text-sm'>{status}</span>
    </div>
  )
}

export default DocumentUpload
