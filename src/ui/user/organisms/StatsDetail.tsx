import { faArrowTrendUp, faMoneyBillWave, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StatCard from '@ui-user/molecules/StatCard'

const StatsDetail = () => {
  return (
    <div className='py-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        <StatCard
          title='Total Revenue'
          value='₹ 2,45,670'
          change='+12%'
          trend='up'
          icon={<FontAwesomeIcon icon={faMoneyBillWave} style={{ fontSize: 20 }} />}
        />

        <StatCard
          title='New Users'
          value={1240}
          change='+5%'
          trend='up'
          icon={<FontAwesomeIcon icon={faUser} style={{ fontSize: 20 }} />}
        />

        <StatCard
          title='Orders'
          value={320}
          change='-3%'
          trend='down'
          icon={<FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: 20 }} />}
        />

        <StatCard
          title='Growth'
          value='8.4%'
          change='+1.2%'
          trend='up'
          icon={<FontAwesomeIcon icon={faArrowTrendUp} style={{ fontSize: 20 }} />}
        />
      </div>
    </div>
  )
}

export default StatsDetail
