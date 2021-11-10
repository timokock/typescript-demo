import { useReducer } from 'react';

interface CounterState {
    count: number
}

interface UpdateAction {
    type: "increment" | "decrement" | "reset"
    payload: number
}

interface ResetAction {
    type: "reset"
}

type CounterAction = UpdateAction | ResetAction


const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
    switch(action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            if(state.count > 0) {
                return { count: state.count - action.payload };
            } else {
                return state;
            }
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <>
            <div>Count: {state.count}</div>
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
            Increment 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
            Decrement 10
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
            Reset
            </button>
        </>
    )
}