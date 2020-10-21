import React, { useState } from 'react'
import propTypes from 'prop-types'

const Name = ({ name }) => {
    return (
        <>
            <h3>Podcast to listen: {name}</h3>
            <h3>{name.startsWith('R') ? 'So good!' : 'OMG!'}</h3>
        </>
    )
}

const Hello = (props) => {
    const [selected, setSelected] = useState('')
    let name2 =
        props.title === 'Hello Again'
            ? props.title + ' El Podcast'
            : props.title + ' La Red de Podcast'

    const handleClick = (event, id) => {
        event.preventDefault()
        setSelected(id)
    }
    return (
        <form>
            <h2>Element: {props.id}</h2>
            <Name name={name2} />
            <button type="button" onClick={(e) => handleClick(e, props.id)}>
                Marcar
            </button>
            <h4>{selected === 1 ? 'No asiste' : 'Asiste'}</h4>
        </form>
    )
}

Hello.propTypes = {
    title: propTypes.string.isRequired,
}

export default Hello
