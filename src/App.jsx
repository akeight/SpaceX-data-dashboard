import { useState, useEffect } from 'react'
import './App.css'
import AllLaunchesList from './components/AllLaunchesList'
import DetailView from './pages/DetailView'
import SearchPage from './pages/SearchPage'
import Layout from './components/Layout'
import { Route, Routes } from "react-router-dom"
import DashboardPage from './pages/DashboardPage'

function App() {
  const [allLaunches, setAllLaunches] = useState([]);
  //const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
  searchTerm: "",
  selectedYear: "All",
  status: {
    success: false,
    failure: false,
    upcoming: false,
  },
});
  const [launchpads, setLaunchpads] = useState([]);
  const [rockets, setRockets] = useState([]);
  const [stats, setStats] = useState({
    topRocket: null,
    topLaunchpad: null,
    successRate: 0,
  });

  const fetchLaunches = async () => {
    //setLoading(true);
    try {
      const res = await fetch("https://api.spacexdata.com/v5/launches");
      const data = await res.json();
      console.log("Launch data:", data);
      setAllLaunches(data);
    } catch (err) {
      console.error("Error fetching launches:", err);
    }
  };
  
  const fetchLaunchpads = async () => {
    //setLoading(true);
    try {
      const res = await fetch("https://api.spacexdata.com/v4/launchpads");
      const data = await res.json();
      console.log("Launchpad data:", data);
      // Assuming launchpads are needed for filtering or display
      setLaunchpads(data);
    } catch (err) {
      console.error("Error fetching launchpads:", err);
    }
  };

  const fetchRockets = async () => {
    try {
      const res = await fetch("https://api.spacexdata.com/v4/rockets");
      const data = await res.json();
      console.log("Rocket data:", data);
      setRockets(data);
    } catch (err) {
      console.error("Error fetching rockets:", err);
    }
  };

  useEffect(() => {
    fetchLaunchpads();
  }, []);

  useEffect(() => {
    fetchRockets();
  }, []);

  useEffect(() => {
    fetchLaunches();
  }, []);

  useEffect(() => {
  if (!allLaunches.length || !rockets.length || !launchpads.length) return;

  const rocketCount = {};
  const launchpadCount = {};
  let successCount = 0;

  allLaunches.forEach((launch) => {
    rocketCount[launch.rocket] = (rocketCount[launch.rocket] || 0) + 1;
    launchpadCount[launch.launchpad] = (launchpadCount[launch.launchpad] || 0) + 1;
    if (launch.success) successCount++;
  });

  const mostFlownRocketId = Object.entries(rocketCount).sort((a, b) => b[1] - a[1])[0]?.[0];
  const mostUsedLaunchpadId = Object.entries(launchpadCount).sort((a, b) => b[1] - a[1])[0]?.[0];
  const successRate = ((successCount / allLaunches.length) * 100).toFixed(1);

  const topRocket = rockets.find((r) => r.id === mostFlownRocketId);
  const topLaunchpad = launchpads.find((lp) => lp.id === mostUsedLaunchpadId);

  setStats({
    topRocket,
    topLaunchpad,
    successRate,
  });
}, [allLaunches, rockets, launchpads]);

// Example grouping for launches per year
const launchesByYear = Object.values(
  allLaunches.reduce((acc, { date_utc }) => {
    const year = new Date(date_utc).getFullYear();
    acc[year] = acc[year] || { year: String(year), count: 0 };
    acc[year].count += 1;
    return acc;
  }, {})
);

// Example grouping for launches per launchpad
const launchesByPad = Object.values(
  allLaunches.reduce((acc, { launchpad }) => {
    acc[launchpad] = acc[launchpad] || { padId: launchpad, count: 0 };
    acc[launchpad].count += 1;
    return acc;
  }, {})
).map(({ padId, count }) => {
  const pad = launchpads.find(lp => lp.id === padId);
  return { padName: pad?.name || 'Unknown', count };
});


  return (
    <>
     <Routes>
     <Route
       path="/"
       element={
         <Layout
           allLaunches={allLaunches}
           stats={stats}
           launchesByYear={launchesByYear}
           launchesByPad={launchesByPad}
         />
       }
     >
        <Route
          index
          element={
            <DashboardPage
              allLaunches={allLaunches}
              launchpads={launchpads}
              filters={filters}
              setFilters={setFilters}
              stats={stats}
            />
          }
        />
        <Route 
          path="search" 
          element={
          <SearchPage
            filters={filters}
            setFilters={setFilters}
            allLaunches={allLaunches}
            launchpads={launchpads}
          />} 
        />
        <Route 
          path="launch/:flightNumber" 
          element={
          <DetailView
            allLaunches={allLaunches}
            launchpads={launchpads}
          />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
