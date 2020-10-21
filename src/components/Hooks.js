import React, { useReducer } from 'react'
import useCallUsers from '../hooks/useCallUsers'

const INCREMENT = 'increment'
const DECREMENT = 'decrement'

const initialState = { count: 0 }

export const Users = (id) => {
    const users = useCallUsers(id)
    return <UserPresenter users={users}></UserPresenter>
}

const UserPresenter = ({ users }) => {
    return (
        <div style={{ margin: '2%' }}>
            <h1>Effects</h1>
            {users.map((user, index) => {
                return <div key={index}>{user.email}</div>
            })}
        </div>
    )
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div style={{ margin: '2%' }}>
            <h1>Reducers</h1>
            Count: {state.count}
            <button
                style={{ marginLeft: 10 }}
                onClick={() =>
                    dispatch({
                        type: DECREMENT,
                        payload: { count: state.count - 1 },
                    })
                }
            >
                -
            </button>
            <button
                style={{ marginLeft: 10 }}
                onClick={() => dispatch({ type: INCREMENT })}
            >
                +
            </button>
        </div>
    )
}

export default Counter

/*switch(action.type) {
    case INCREMENT:
        return {count: state.count + 1}
    case DECREMENT:
        return {count: state.count - 1}
        default: throw new Error();
}*/

const increment = (state, action) => {
    return { count: state.count + 1 }
}
const decrement = (state, action) => {
    return action.payload
}

const Reducers = {
    [INCREMENT]: increment,
    [DECREMENT]: decrement,
}

const reducer = (state, action) => {
    return Reducers[action.type] ? Reducers[action.type](state, action) : state
}
