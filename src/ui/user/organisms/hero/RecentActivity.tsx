const RecentActivity = () => {
  return (
    <div className='bg-white backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl w-full'>
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-xl font-bold text-gray-800'>Recent Transactions</h3>
        <div className='flex gap-3'>
          <button className='p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-200'>
            {/* <Search size={18} className="text-gray-600" /> */}
          </button>
          <button className='p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-200'>
            {/* <Filter size={18} className="text-gray-600" /> */}
          </button>
        </div>
      </div>

      <div className='space-y-4'>
        {[
          {
            name: 'Netflix Subscription',
            amount: '-₹799',
            time: '2 hours ago',
            status: 'completed',
            type: 'expense',
            icon: '🎬',
          },
          {
            name: 'Salary Deposit',
            amount: '+₹85,000',
            time: 'Today 9:00 AM',
            status: 'completed',
            type: 'income',
            icon: '💼',
          },
        ].map((txn, i) => (
          <div
            key={i}
            className='group flex items-center gap-4  rounded-2xl hover:bg-gray-50 transition-all duration-300 cursor-pointer'
          >
            <div className='text-2xl'>{txn.icon}</div>
            <div className='flex-1'>
              <div className='flex items-center justify-between'>
                <p className='font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200'>
                  {txn.name}
                </p>
                <div className='text-right'>
                  <p
                    className={`font-bold text-lg ${
                      txn.type === 'income'
                        ? 'text-emerald-600'
                        : txn.type === 'expense'
                          ? 'text-red-500'
                          : 'text-blue-600'
                    }`}
                  >
                    {txn.amount}
                  </p>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      txn.status === 'completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {txn.status}
                  </span>
                </div>
              </div>
              <div className='flex items-center justify-between mt-1'>
                <p className='text-gray-500 text-sm flex items-center gap-1'>
                  {/* <Clock size={14} /> */}
                  {txn.time}
                </p>
              </div>
            </div>
            {/* <ChevronRight size={16} className="text-gray-400 group-hover:text-indigo-500 transition-colors duration-200" /> */}
          </div>
        ))}
      </div>

      <button className='w-full mt-6 py-3 text-indigo-600 font-semibold hover:bg-indigo-50 rounded-2xl transition-colors duration-200'>
        View All Transactions
      </button>
    </div>
  )
}

export default RecentActivity
