import React, { useState, useEffect } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

const API_URL = "http://localhost:6001/plants"

function PlantPage() {
    // plant list state
    const [plantList, setPlantList] = useState([])
    // error state
    const [error, setError] = useState(null)
    // filter for search
    const [filter, setFilter] = useState("")

    // add a plant to the list
    // uses pessimistic rendering
    const addPlant = (newPlant) => {
        newPlant.price = +newPlant.price
        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlant)
        })
            .then(r => {
                if (r.ok) return r.json()
                else throw new Error("Error posting data")
            })
            // add data returned from POST
            .then(data => setPlantList([...plantList, data]))
            .catch(err => setError(err.message))
    }

    // load plants list
    function fetchPlants() {
        fetch(API_URL)
            .then(r => {
                if (r.ok) return r.json()
                else throw new Error("Error fetching data")
            })
            // overwrite plant list with fetched data
            .then(data => setPlantList(data))
            .catch(err => setError(err.message))
    }

    // load plants on first render
    useEffect(fetchPlants, [])

    // return plant list filtered by search; if filter is empty, return whole list
    function filteredPlantList() {
        return (filter === "") ? plantList : plantList.filter(plant => (
            plant.name.toLowerCase().includes(filter.toLowerCase())
        ))
    }

    return (
        <main>
            <NewPlantForm addPlant={addPlant} />
            <Search filter={filter} setFilter={setFilter} />
            {error ?
                <p style={{ color: "red" }}>Error: {error}</p> :
                <PlantList plantList={filteredPlantList()} />
            }
        </main>
    )
}

export default PlantPage
