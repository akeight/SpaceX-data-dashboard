// ChartsPanel.jsx
import LaunchesPerPadChart from './charts/LaunchesPerPadChart';
import LaunchesPerYearChart from './charts/LaunchesPerYearChart';
import ChartsCard from './ChartsCard';

const ChartsPanel = ({ launchesByPad, launchesByYear }) => (
  <div className="charts">
    <ChartsCard title="Launches by Year">
      <LaunchesPerYearChart data={launchesByYear} />
    </ChartsCard>

    <ChartsCard title="Launches by Site">
      <LaunchesPerPadChart data={launchesByPad} />
    </ChartsCard>
  </div>
);

export default ChartsPanel;