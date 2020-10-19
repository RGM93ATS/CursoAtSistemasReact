import React from 'react'
import propTypes from 'prop-types'

const Hello = (props) => {
    let name2 =
        props.title === 'Hello Again'
            ? props.title + ' El Podcast'
            : props.title + ' La Red de Podcast'
    return (
        <>
            <h2>Element: {props.id}</h2>
            <Name name={name2} />
        </>
    )
}

Hello.propTypes = {
    title: propTypes.string.isRequired,
}

const Name = ({ name }) => {
    return (
        <>
            <h3>Podcast to listen: {name}</h3>
            <h3>{name.startsWith('R') ? 'So good!' : 'OMG!'}</h3>
        </>
    )
}

export default Hello
