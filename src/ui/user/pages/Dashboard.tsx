import HeroCard from "@ui/user/organisms/hero/BalanceSection"
import RecentActivities from '@ui/user/organisms/hero/QuickAction'
import RecentActivity from '@ui/user/organisms/hero/RecentActivity'
import StatsDetail from '@ui/user/organisms/hero/StatsDetail'


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
