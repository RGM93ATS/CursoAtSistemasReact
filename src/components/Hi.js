import React from 'react'
import PropTypes from 'prop-types'

function Hi({ name, age }) {
    return (
        <h1>
            Hey {name}, how it's going? You're {age} years old!
        </h1>
    )
}

export default Hi

Hi.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}

Hi.defaultProps = {
    name: 'Ruben',
    age: 27,
}
