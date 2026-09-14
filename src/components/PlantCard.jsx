import React, { useState } from "react"

function PlantCard({ plant }) {
    // state to track if plant is in stock
    const [isInStock, setIsInStock] = useState(true)

    // button to toggle whether or not in stock
    const toggleInStock = () => setIsInStock(!isInStock)

    return (
        <li className="card" data-testid="plant-item">
            <img src={plant.image} alt={plant.image} />
            <h4>{plant.name}</h4>
            <p>Price: {parseFloat(plant.price).toFixed(2)}</p>
            {isInStock ? (
                <button className="primary" onClick={toggleInStock}>In Stock</button>
            ) : (
                <button onClick={toggleInStock}>Out of Stock</button>
            )}
        </li>
    )
}

export default PlantCard
