import Filters from "../components/Filters";
import StatsPanel from "../components/StatsPanel";
import AllLaunchesList from "../components/AllLaunchesList";

const DashboardPage = ({ filters, setFilters, allLaunches, launchpads, stats }) => {
    return ( 
        <>
        <Filters filters={filters} setFilters={setFilters} allLaunches={allLaunches} />
        <div className="app-container">
          <StatsPanel allLaunches={allLaunches} stats={stats} />
          <AllLaunchesList allLaunches={allLaunches} launchpads={launchpads} filters={filters} />
        </div>
        </>
    );
}

export default DashboardPage;