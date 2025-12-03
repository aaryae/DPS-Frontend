const UnderReview = () => {
  return (
    <div className='bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 mb-6'>
      <div className='flex items-center gap-4'>
        <div className='w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center'>
          {/* <Clock className="text-white" size={24} /> */}
        </div>
        <div className='flex-1'>
          <h4 className='font-bold text-blue-800 mb-1'>Verification in Progress</h4>
          <p className='text-blue-700'>
            Your documents are being reviewed by our security team. You'll receive a notification within 2-4 business
            hours.
          </p>
        </div>
      </div>
    </div>
  )
}

export default UnderReview
