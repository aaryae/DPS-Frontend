import DocumentUpload from "./DocumentUpload"
import FinalReview from "./FinalReview"
import PersonalDetails from "./PersonalDetails"

const KycHome = () => {
  return (
    <div className="flex flex-col items-center ">
        <h1 className="text-lg font-bold py-1">KYC Verification</h1>
        <h2 className="pt-2 pb-6">Complete your verification to unlock all banking features</h2>
        <div className="w-full max-w-5xl flex flex-col gap-5">
          <PersonalDetails/>
          <DocumentUpload/>
          <FinalReview/>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
              {/* <Clock className="text-white" size={24} /> */}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-blue-800 mb-1">Verification in Progress</h4>
              <p className="text-blue-700">
                Your documents are being reviewed by our security team. 
                You'll receive a notification within 2-4 business hours.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-3">What happens next?</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                Manual verification by security experts
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                Instant notification upon completion
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                Full access to all banking features
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-3">Need Help?</h4>
            <p className="text-gray-600 mb-4">
              Having issues with verification? Our support team is here to help.
            </p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-xl hover:bg-indigo-600 transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
        </div>
  
  )
}

export default KycHome
