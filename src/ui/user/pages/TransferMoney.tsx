import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TransferMoney = () => {
  return (
    <section>
      <div className='flex flex-col max-w-lg mx-auto'>
        <h1 className='text-xl p-2'>Send Money</h1>
        <h3 className='p-1'>Transfer money securely to anyone, anywhere</h3>

        <label htmlFor='accountNumber'>Send To</label>
        <div className='border-2 border-[#00000071] flex gap-3'>
          <FontAwesomeIcon icon={'magnifying-glass'} />
          <input
            type='number'
            id='accountNumber'
            value='Enter phone number or account details'
            className='outline-none border-0'
          />
        </div>
        <label htmlFor='amount'>Amount</label>
        <div className='border-2 border-[#00000071] flex gap-3'>
          <FontAwesomeIcon icon={'indian-rupee-sign'} />
          <input type='number' id='amount' value={1} className='outline-none border-0' />
        </div>
        <div className='flex gap-2'>
          <span className='bg-[#ecececee] p-1'>1000</span>
          <span className='bg-[#ecececee] p-1'>1000</span>
          <span className='bg-[#ecececee] p-1'>1000</span>
        </div>
        <label htmlFor='note'>Note:</label>
        <textarea className='border-2 border-[#00000071] ' id='note' rows={4} cols={30}></textarea>
         <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-semibold text-indigo-800">Secure Transfer</span>
            </div>
            <p className="text-indigo-700 text-sm">
              Your transfer is protected by bank-grade encryption and fraud detection systems.
            </p>
          </div>
        <button className='bg-blue-700 text-white'>Send</button>
      </div>
    </section>
  )
}

export default TransferMoney
