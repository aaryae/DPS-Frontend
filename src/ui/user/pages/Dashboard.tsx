import HeroCard from '../organisms/BalanceSection'
import RecentActivities from '../organisms/RecentActivities'
import StatsDetail from '../organisms/StatsDetail'

const Dashboard = () => {
  return (
    <div>
      <HeroCard />
      <StatsDetail />
      <RecentActivities/>
    </div>
  )
}

export default Dashboard
