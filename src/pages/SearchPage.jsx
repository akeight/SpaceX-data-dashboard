import Filters from "../components/Filters";

const SearchPage = ({ filters, setFilters, allLaunches }) => {
    return ( 
         <Filters filters={filters} setFilters={setFilters} allLaunches={allLaunches} />
     );
}
 
export default SearchPage;  