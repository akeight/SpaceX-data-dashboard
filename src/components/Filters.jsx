const Filters = ({ filters, setFilters, allLaunches }) => {
    return (
        <div className="filters-aside">
            <h2>Filter Launches</h2>
            <div className="filter-panel">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search for launch..."
                    value={filters.searchTerm}
                    onChange={(e) => setFilters((prev) => ({ ...prev, searchTerm: e.target.value }))}
                />

                <select
                    value={filters.selectedYear}
                    onChange={(e) => setFilters((prev) => ({ ...prev, selectedYear: e.target.value }))}
                    className="year-select">
                <option value="All">All Years</option>
                    {Array.from(
                        new Set(allLaunches.map((launch) => new Date(launch.date_utc).getFullYear()))
                    )
                        .sort((a, b) => b - a)
                        .map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            <div className="filter-checkboxes">    
            <label>
                <input
                    type="checkbox"
                    checked={filters.status.success}
                    onChange={() =>
                        setFilters((prev) => ({
                            ...prev,
                            status: { ...prev.status, success: !prev.status.success },
                        }))
                    }
                />
                 ✅ Success
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={filters.status.failure}
                    onChange={() =>
                        setFilters((prev) => ({
                            ...prev,
                            status: { ...prev.status, failure: !prev.status.failure },
                        }))
                    }
                />
                ❌ Failure
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={filters.status.upcoming}
                    onChange={() =>
                        setFilters((prev) => ({
                            ...prev,
                            status: { ...prev.status, upcoming: !prev.status.upcoming },
                        }))
                    }
                />
                ⏳ Upcoming
            </label>
            </div>
        </div>
    </div>
    );
}

export default Filters;