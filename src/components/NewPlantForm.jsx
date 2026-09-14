import React, { useState } from "react"

function NewPlantForm({ addPlant }) {
    // blank data for init and reset
    const blankPlantData = {
        name: "",
        image: "",
        price: 0.00
    }

    // states for controlled form
    const [plantData, setPlantData] = useState(blankPlantData)

    // dynamically update plant data and form
    const handleChange = (e) => {
        const { name, value } = e.target
        // set data
        setPlantData({
            ...plantData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // call addPlant prop
        addPlant(plantData)
        // resent values to empty
        setPlantData(blankPlantData)
    }

    return (
        <div className="new-plant-form">
            <h2>New Plant</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={plantData.name} onChange={handleChange} placeholder="Plant name" />
                <input type="text" name="image" value={plantData.image} onChange={handleChange} placeholder="Image URL" />
                <input type="number" name="price" step="0.01" value={plantData.price} onChange={handleChange} placeholder="Price" />
                <button type="submit">Add Plant</button>
            </form>
        </div>
    )
}

export default NewPlantForm
