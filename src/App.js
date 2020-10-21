import React from 'react'
import './App.css'
/*import List from './components/List.js'
import Hi from './components/Hi.js'
import MyForm from './components/MyForm'*/
import MyTable from './components/Table'
import Counter from './components/Hooks'
import { Users } from './components/Hooks'

const App = () => {
    /*const elements = [
        { name: 'Ruben', id: 1 },
        { name: 'Fran', id: 2 },
        { name: 'Manu', id: 3 },
        { name: 'Rocío', id: 4 },
    ]*/
    return (
        <>
            {/* 1º Introducción */}
            {/*<Hi name="R#" age={30} />
            <List elements={elements} />
            <h2>Creating Form!</h2>
            <MyForm name="Ruben" postalCode={21006} />
            {/* 2º Composición, HOC, Hooks */}
            <MyTable friend="John" />
            <Counter />
            <Users id="1" />
        </>
    )
}

export default App
