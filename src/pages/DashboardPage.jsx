import StatsPanel from "../components/StatsPanel";
import AllLaunchesList from "../components/AllLaunchesList";

const DashboardPage = ({ allLaunches, launchpads, stats, filters }) => {
    return ( 
        <>
        <div className="main-content">
          <StatsPanel allLaunches={allLaunches} stats={stats} />
          <AllLaunchesList allLaunches={allLaunches} launchpads={launchpads} filters={filters} />
        </div>
        </>
    );
}

export default DashboardPage;