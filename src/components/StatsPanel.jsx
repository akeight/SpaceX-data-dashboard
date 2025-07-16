import StatsCard from "./StatsCard";

const StatsPanel = ({ allLaunches,stats }) => {
  return (
    <div className="stats-panel">
      <div className="stat-card">
        <h3>🚀 Total Launches</h3>
        <p>{allLaunches.length}</p>


      </div>
      <div className="stat-card">
        <h3>📍 Top Site</h3>
        <p>{stats.topLaunchpad ? stats.topLaunchpad.locality : "Loading..."}</p>
      </div>
      <div className="stat-card">
        <h3>✅ Success Rate</h3>
        <p>{stats.successRate ? `${stats.successRate}%` : "Loading..."}</p>
      </div>
    </div>
  );
};

export default StatsPanel;
