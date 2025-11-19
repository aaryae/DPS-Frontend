import DocumentUpload from "./DocumentUpload"
import FinalReview from "./FinalReview"
import PersonalDetails from "./PersonalDetails"
import UnderReview from "./UnderReview"
import WhatHappensNext from "./WhatHappensNext"

const KycHome = () => {
  return (
    <div className="flex flex-col items-center ">
        <h1 className="text-lg font-bold py-1">KYC Verification</h1>
        <h2 className="pt-2 pb-6">Complete your verification to unlock all banking features</h2>
        <div className="w-full max-w-5xl flex flex-col gap-5">
          <PersonalDetails/>
          <DocumentUpload/>
          <FinalReview/>
          <UnderReview/>
          <WhatHappensNext/>
      
      </div>
        </div>
  
  )
}

export default KycHome
