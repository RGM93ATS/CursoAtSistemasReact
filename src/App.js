import React from 'react'
import './App.css'
import Hello from './components/Hello.js'
import Hi from './components/Hi.js'
import MyForm from './components/MyForm'

const App = () => {
    const list = [
        { name: 'Ruben', id: 1 },
        { name: 'Fran', id: 2 },
        { name: 'Manu', id: 3 },
        { name: 'Rocío', id: 4 },
    ]
    return (
        <>
            <Hi name="R#" age={30} />
            {list.map((element, index) => {
                return (
                    <Hello key={index} title={element.name} id={element.id} />
                )
            })}
            <h2>Creating Form!</h2>
            <MyForm />
        </>
    )
}

export default App
