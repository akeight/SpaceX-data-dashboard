import LaunchCard from "./LaunchCard";

const AllLaunchesList = ({ allLaunches, launchpads, filters }) => {

  const filteredLaunches = allLaunches.filter((launch) => {
  const matchesSearch =
    filters.searchTerm === "" ||
    launch.name.toLowerCase().includes(filters.searchTerm.toLowerCase());

  const matchesStatus =
    (!filters.status.success &&
      !filters.status.failure &&
      !filters.status.upcoming) ||
    (filters.status.success && launch.success === true) ||
    (filters.status.failure && launch.success === false) ||
    (filters.status.upcoming && launch.upcoming === true);

  const launchYear = new Date(launch.date_utc).getFullYear();
  const matchesYear =
    filters.selectedYear === "All" ||
    launchYear.toString() === filters.selectedYear;

  return matchesSearch && matchesStatus && matchesYear;
});
  if (filteredLaunches.length === 0) {
    return <div className="no-launches">No launches found for the selected filters.</div>;
  }

  console.log("Filtered launch data:", filteredLaunches);

  return (
    <div className="dashboard">
      <h2>All Launches</h2>
      <ul className="launch-list">
       {filteredLaunches.map((launch) => (
            <li key={launch.id}>
                <LaunchCard launch={launch} launchpads={launchpads} />
            </li>
        ))}
      </ul>
    </div>
  );
};

export default AllLaunchesList;
