const LaunchCard = ({ launch, launchpads }) => {

  const launchpad = launchpads.find(lp => lp.id === launch.launchpad);

  return (
    <div className="launch-card">
      <img 
        src={launch.links.patch.small || "/placeholder.png"} 
        alt={launch.name} 
        className="launch-card-img" 
      />
      <div className="launch-card-content">
        <h3>{launch.name}</h3>
        <p>
          Launch Date: {new Date(launch.date_utc).toLocaleDateString()}
        </p>
        <p>Status: <span className={launch.success ? "Success" : "Failure"}>{launch.success ? "Success" : "Failure"}</span></p>
        <p>🚀 Launch Site: <span>{launchpad?.locality || "Unknown"}</span></p>
          {launch.links?.webcast && (
        <a
          href={launch.links.webcast}
          target="_blank"
          rel="noreferrer"
        >
          Watch Launch
        </a>
          )}
      </div>
    </div>

  );
};

export default LaunchCard;

