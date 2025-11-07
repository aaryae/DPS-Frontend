
import React from 'react'

type RecentCardProps = {
  title: string
  value: string | number
  icon?: React.ReactNode
  iconBgColor?: string
  iconColor?: string
}

const RecentCard = ({ 
  title, 
  value, 
  icon, 
  iconBgColor = 'from-blue-500 to-blue-600',
  iconColor = 'text-white'
}: RecentCardProps) => {
  return (
    <div className='group relative bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-xl hover:border-transparent hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden'>
      {/* Subtle gradient overlay on hover */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/30 transition-all duration-300 rounded-2xl'></div>
      
      <div className='relative flex gap-4 items-start'>
        {/* Icon with gradient background */}
        <div className={`p-3.5 rounded-xl bg-gradient-to-br ${iconBgColor} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 shrink-0`}>
          <div className={iconColor}>
            {icon}
          </div>
        </div>
        
        <div className='flex-1 min-w-0'>
          <h4 className='text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider'>
            {title}
          </h4>
          <p className='text-sm text-gray-700 leading-relaxed line-clamp-2 group-hover:text-gray-900 transition-colors'>
            {value}
          </p>
        </div>
        
        {/* Decorative arrow on hover */}
        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </div>
      </div>
      
    </div>
  )
}

export default RecentCard