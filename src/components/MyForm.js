import React, { useState } from 'react'

export default function MyForm({ oldName }) {
    const [name, setName] = useState(oldName || '')

    const handleChange = (event) => {
        setName(event.target.value)
        event.preventDefault()
    }
    const handleSubmit = (event) => {
        const form = event.target
        console.log({ event, form, name: form.name.value })
        event.preventDefault()
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={handleChange}
                />
                <input type="submit"></input>
            </form>
            <h1>{name}</h1>
        </>
    )
}
