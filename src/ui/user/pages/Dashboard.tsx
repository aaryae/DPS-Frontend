import HeroCard from '../organisms/BalanceSection'
import RecentActivities from '../organisms/QuickAction'
import RecentActivity from '../organisms/RecentActivity'
import StatsDetail from '../organisms/StatsDetail'

const Dashboard = () => {
  return (
    <div>
      <HeroCard />
      <StatsDetail />
      <div className='flex justify-between gap-7 flex-wrap md:flex-nowrap'>

      <RecentActivities/>
      <RecentActivity/>
      </div>
    </div>
  )
}

export default Dashboard
