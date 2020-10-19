import React from 'react'
import './App.css'
import Hi from './components/Hi'

function App() {
    return (
        <>
            <Hi name="R#" age={30} />
            <Hi />
        </>
    )
}

export default App
