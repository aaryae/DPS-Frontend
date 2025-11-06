import { faArrowDown, faArrowUp, faCreditCard, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RecentCard from '../molecules/RecentCard'

const RecentActivities = () => {
  return (
     <div className='w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4'>
      <RecentCard
        title='Money Sent'
        value='Transferred ₹5,000 to Rajesh Kumar'
        icon={<FontAwesomeIcon icon={faArrowUp} style={{ fontSize: 20 }} />}
        iconBgColor='from-rose-500 to-pink-600'
        iconColor='text-white'
      />
      
      <RecentCard
        title='Money Received'
        value='Received ₹12,500 from Priya Sharma'
        icon={<FontAwesomeIcon icon={faArrowDown} style={{ fontSize: 20 }} />}
        iconBgColor='from-emerald-500 to-green-600'
        iconColor='text-white'
      />

      <RecentCard
        title='Card Payment'
        value='Paid ₹2,340 at Amazon India'
        icon={<FontAwesomeIcon icon={faCreditCard} style={{ fontSize: 20 }} />}
        iconBgColor='from-purple-500 to-indigo-600'
        iconColor='text-white'
      />
      
      <RecentCard
        title='Online Shopping'
        value='Purchase at Flipkart for electronics'
        icon={<FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: 20 }} />}
        iconBgColor='from-amber-500 to-orange-600'
        iconColor='text-white'
      />
    </div>
  )
}

export default RecentActivities
