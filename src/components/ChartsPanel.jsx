// ChartsPanel.jsx
import ChartsCard from './ChartsCard';

const ChartsPanel = () => (
  <div className="charts-panel">
    <ChartsCard title="Launch Success Rate">
      {/* your <RechartsComposedChart> goes here */}
    </ChartsCard>
    <ChartsCard title="Launches by Year">
      {/* your <BarChart> or whatever */}
    </ChartsCard>
    <ChartsCard title="Launches by Site">
      {/* your <PieChart> or whatever */}
    </ChartsCard>
  </div>
);

export default ChartsPanel;