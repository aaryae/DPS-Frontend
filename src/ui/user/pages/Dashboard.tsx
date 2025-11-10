import HeroCard from "@ui-user/organisms/BalanceSection"
import RecentActivities from '@ui-user/organisms/QuickAction'
import RecentActivity from '@ui-user/organisms/RecentActivity'
import StatsDetail from '@ui-user/organisms/StatsDetail'


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
