import React from 'react'
import Hello from './Hello.js'

const List = (props) => {
    return (
        <>
            {props &&
                props.elements.map((element, index) => {
                    return (
                        <Hello
                            key={index}
                            title={element.name}
                            id={element.id}
                        />
                    )
                })}
        </>
    )
}

export default List
