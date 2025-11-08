import { faIndianRupee, faMagnifyingGlass, faShieldHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const TransferMoney = () => {
  const [amount, setAmount] = useState<number>(0.00)

  return (
    <section>
      <div className='flex flex-col max-w-lg mx-auto border border-[#85858523] rounded-2xl shadow-2xl p-10 '>
        <h1 className='text-2xl p-1 font-bold '>Send Money</h1>
        <h3 className='p-1 text-[#7a7575]'>Transfer money securely to anyone, anywhere</h3>

        <label htmlFor='accountNumber' className='pt-5 pb-2 text-md text-[#202020]'>
          Send To
        </label>
        <div className='border-2 border-[#dddbdb] flex gap-3 p-3 rounded-2xl'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='my-auto' color='#7a7575' />
          <input
            type='number'
            id='accountNumber'
            placeholder='Enter phone number or account details'
            className='outline-none border-0 w-full'
          />
        </div>
        <label htmlFor='Amount' className='pt-5 pb-2 text-md text-[#202020]'>
          Amount
        </label>
        <div className='border-2 border-[#dddbdb] flex gap-3 p-3 rounded-2xl'>
          <FontAwesomeIcon icon={faIndianRupee} className='my-auto' color='#7a7575' />
          <input type='number' id='Amount' placeholder='0.00' value={amount} className='outline-none border-0 w-full' />
        </div>
        <div className='flex gap-2 py-2'>
          <span onClick={() => setAmount(1000)} className='bg-[#ecececee] p-1.5 rounded-lg cursor-pointer'>
            {' '}
            <FontAwesomeIcon icon={faIndianRupee} className='my-auto' color='#7a7575' />
            1000
          </span>
          <span onClick={() => setAmount(2000)} className='bg-[#ecececee] p-1.5 rounded-lg cursor-pointer'>
            {' '}
            <FontAwesomeIcon icon={faIndianRupee} className='my-auto' color='#7a7575' />
            2000
          </span>
          <span onClick={() => setAmount(5000)} className='bg-[#ecececee] p-1.5 rounded-lg cursor-pointer'>
            {' '}
            <FontAwesomeIcon icon={faIndianRupee} className='my-auto' color='#7a7575' />
            5000
          </span>
        </div>
        <label htmlFor='Note' className='pt-5 pb-2 text-md text-[#202020]'>
          Note
        </label>
        <textarea
          className='border-2 border-[#dddbdb] flex gap-3 p-3 rounded-2xl'
          id='note'
          rows={4}
          cols={30}
          placeholder='save it or loose it'
        ></textarea>
        <div className='my-6 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100'>
          <div className='flex items-center gap-3 mb-3 '>
            <span className='font-semibold text-indigo-800 '>
              <FontAwesomeIcon icon={faShieldHeart} className='my-auto px-2' color='#4f46e5' />
              Secure Transfer
            </span>
          </div>
          <p className='text-indigo-700 text-sm'>
            Your transfer is protected by bank-grade encryption and fraud detection systems.
          </p>
        </div>
        <button className='bg-purple-700 text-white py-4 rounded-2xl '>
          Send <FontAwesomeIcon icon={faIndianRupee} className='my-auto'  />
          {amount}
        </button>
      </div>
    </section>
  )
}

export default TransferMoney
