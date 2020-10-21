import React, { useState } from 'react'

const MAX_POSTAL_LENGTH = 5

const MyForm = (props) => {
    const [name, setName] = useState(props.name || '')
    const [postalCode, setPostalCode] = useState(props.postalCode || 0)

    const handleChange = (event) => {
        console.log('event', event.target.name)
        switch (event.target.name) {
            case 'name':
                setName(event.target.value)
                break
            case 'postalCode':
                event.target.value.length <= MAX_POSTAL_LENGTH &&
                    setPostalCode(event.target.value)
                break
            default:
                break
        }
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
                <input
                    id="postalCode"
                    name="postalCode"
                    type="number"
                    value={postalCode}
                    onChange={handleChange}
                />
                <input type="submit"></input>
            </form>
            <h1>Hi! {name}</h1>
        </>
    )
}

export default MyForm
