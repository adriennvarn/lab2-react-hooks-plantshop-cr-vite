import React from "react"

function Search({ filter, setFilter }) {
    // set filter based on input
    const handleChange = (e) => setFilter(e.target.value)

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Plants:</label>
            <input
                type="text"
                id="search"
                value={filter}
                placeholder="Type a name to search..."
                onChange={handleChange}
            />
        </div>
    )
}

export default Search
