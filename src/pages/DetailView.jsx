import { useParams } from 'react-router-dom';
import LaunchDetails from '../components/LaunchDetails';

function DetailView({ allLaunches, launchpads }) {
  
  const { flightNumber } = useParams();

  const launch = allLaunches.find(l => String(l.flight_number) === flightNumber);
  const pad   = launchpads.find(p => p.id === launch.launchpad);

  if (!launch) return <p>Whoops, no launch found…</p>;

  return (
    <>
      <div className="dashboard">
        <h2>Launch Details</h2>
        <LaunchDetails
          launch={launch}
          launchpad={pad}
        />
      </div>
    </>
  );
}

export default DetailView;
