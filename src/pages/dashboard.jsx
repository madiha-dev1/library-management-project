import RecentActivity from "../components/recentactivity";
import StatsCards from "../components/statscards";
import Welcome from "../components/welcome";

function Dashboard(){

    return(
        <div>
            <Welcome/>
            <StatsCards/>
            <RecentActivity/>
        </div>
    )
}

export default Dashboard;