import PersonalDetails from "./PersonalDetails"

const KycHome = () => {
  return (
    <div className="flex flex-col items-center ">
        <h1 className="text-lg font-bold py-1">KYC Verification</h1>
        <h2 className="pt-2 pb-6">Complete your verification to unlock all banking features</h2>
        <div className="w-full max-w-5xl">
          <PersonalDetails/>
        </div>
    </div>
  )
}

export default KycHome
