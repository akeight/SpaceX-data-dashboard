import { Outlet, Link } from 'react-router-dom';
import StatsPanel from './StatsPanel';

export default function Layout({ allLaunches, stats }) {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2>Navigation</h2>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="search">Search</Link></li>
          </ul>
        </nav>
        <StatsPanel allLaunches={allLaunches} stats={stats} />
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}