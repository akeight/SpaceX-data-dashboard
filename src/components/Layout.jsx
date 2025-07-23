import { Outlet, Link } from 'react-router-dom';
import ChartsPanel from './ChartsPanel';
import { useState } from 'react';

export default function Layout({ launchesByYear, launchesByPad}) {
  const [showGraphs, setShowGraphs] = useState(true);

  return (
    <>
     <div className="header">
        <h1>SpaceX Launch Dashboard</h1>
        <p>Explore SpaceX launch data with filters and statistics</p>
      </div>
    <div className="app-container">
      <aside className="sidebar-components">
        <div className="sidebar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="search">Search</Link></li>
            <button onClick={() => setShowGraphs(prev => !prev)}>
          {showGraphs ? 'Hide Graphs' : 'Show Graphs'}
        </button>
          </ul>
        </div>
        {showGraphs && (
          <div className="charts-panel">
            <ChartsPanel 
              launchesByYear={launchesByYear} 
              launchesByPad={launchesByPad} 
            />
          </div>
      )}
      </aside>

      <div className="primary-content">
          <Outlet />
        </div>
        
      
      
    </div>
    </>
  );
}