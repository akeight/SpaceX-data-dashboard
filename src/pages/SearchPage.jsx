import Filters from "../components/Filters";
import AllLaunchesList from "../components/AllLaunchesList";

const SearchPage = ({ filters, setFilters, allLaunches, launchpads }) => {
    return ( 
        <>
        <div className="main-content">
         <Filters filters={filters} setFilters={setFilters} allLaunches={allLaunches} />
         <AllLaunchesList allLaunches={allLaunches} filters={filters} launchpads={launchpads} />
       </div>
       </>
    );
}
 
export default SearchPage;  