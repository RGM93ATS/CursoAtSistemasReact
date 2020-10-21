import { useState, useEffect } from 'react'
import axios from 'axios'

/* Custom Hooks*/
const useCallUsers = (id) => {
    const [users, setUsers] = useState([])
    const [count, setCount] = useState(0)

    /* 1er caso */
    useEffect(() => {
        axios
            .get('https://reqres.in/api/users')
            .then((response) => {
                console.log('response', response)
                setUsers(response.data.data)
            })
            .catch((error) => {
                // TODO: Este error debería de controlarse
                console.log(error)
            })
    }, [id]) // Ejecuta de nuevo cuando cambia propiedades (id)

    /* 2do caso */
    useEffect(() => {
        const interval = setInterval(() => {
            setUsers([
                ...users,
                {
                    id: count + 1,
                    email: '' + count + 1 + 2 + '@gmail.com',
                },
            ])
            setCount(count + 1)
        }, 2000)
        return () => {
            clearInterval(interval)
        }
    })

    return users
}

export default useCallUsers
