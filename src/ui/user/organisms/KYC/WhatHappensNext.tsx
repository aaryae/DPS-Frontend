const WhatHappensNext = () => {
  return (
    <div className='grid md:grid-cols-2 gap-6'>
      <div className='bg-white p-6 rounded-2xl border border-gray-200'>
        <h4 className='font-bold text-gray-800 mb-3'>What happens next?</h4>
        <ul className='space-y-2 text-gray-600'>
          <li className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-indigo-500 rounded-full'></div>
            Manual verification by security experts
          </li>
          <li className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-indigo-500 rounded-full'></div>
            Instant notification upon completion
          </li>
          <li className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-indigo-500 rounded-full'></div>
            Full access to all banking features
          </li>
        </ul>
      </div>

      <div className='bg-white p-6 rounded-2xl border border-gray-200'>
        <h4 className='font-bold text-gray-800 mb-3'>Need Help?</h4>
        <p className='text-gray-600 mb-4'>Having issues with verification? Our support team is here to help.</p>
        <button className='bg-indigo-500 text-white px-4 py-2 rounded-xl hover:bg-indigo-600 transition-colors duration-200'>
          Contact Support
        </button>
      </div>
    </div>
  )
}

export default WhatHappensNext
