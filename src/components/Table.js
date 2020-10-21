import React from 'react'
import PropTypes from 'prop-types'

const MyTable = ({ friend }) => {
    const array = [
        paintWithColor(BaseMyTable, 'red'),
        paintWithColor(BaseMyTable, 'cornflowerblue'),
    ]
    return (
        <>
            {array.map((Component) => {
                return <Component friend={friend} />
            })}
        </>
    )
}

/** High Order Component
 *
 *  Decorador !== Componente (primera letra minuscula)
 */
const paintWithColor = (Component, type) => {
    return (props) => (
        <div style={{ backgroundColor: type }}>
            <Component {...props} header={<h1>VIVO</h1>}>
                {(friend, buddy) => (
                    <div>
                        {friend} with buddy {buddy}
                    </div>
                )}
            </Component>
        </div>
    )
}

const BaseMyTable = ({ children, header, friend }) => {
    console.log('friend', children)
    const buddy = 'Paul'
    return (
        <>
            <div className="header">{header}</div>
            <div className="body">{children(friend, buddy)}</div>
            <div className="footer">Footer</div>
        </>
    )
}

BaseMyTable.propTypes = {
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

BaseMyTable.defaultProps = {}

export default MyTable

// Cabecera

// Body
// N Filas

// Footer
