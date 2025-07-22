import { Outlet, Link } from 'react-router-dom';
import StatsPanel from './StatsPanel';
import ChartsPanel from './ChartsPanel';  // 🔥 import it

export default function Layout({ allLaunches, stats }) {
  return (
    <>
     <div className="header">
        <h1>SpaceX Launch Dashboard</h1>
        <p>Explore SpaceX launch data with filters and statistics</p>
      </div>
    <div className="app-container">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="search">Search</Link></li>
          </ul>
        </nav>
      </aside>
      

      {/* make this a flex container so Outlet + ChartsPanel sit side‑by‑side */}
      <main className="main-content">
        <div className="primary-content">
          <Outlet />
        </div>
        <aside className="charts-aside">
          <ChartsPanel />
        </aside>
      </main>
      
    </div>
    </>
  );
}