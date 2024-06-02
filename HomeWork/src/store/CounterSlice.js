import { createSlice } from '@reduxjs/toolkit'
import { actions } from '../storeContext'

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremantCounter: (state) => {
            state.count += 1
        },
        decrementCounter: (state) => {
            state.count -= 1
        },
        multiplicationCounter: (state, actions) => {
            state.count *= actions.payload
        },
        divisionCounter: (state, actions) => {
            state.count /= actions.payload
        },
        factorialCounter: (state) => {
            for (let i = state.count - 1; i > 0; i--) {
                state.count *= i;
            }
        },

    }
})

export const { incremantCounter, decrementCounter, multiplicationCounter, divisionCounter, factorialCounter } = counterSlice.actions;
export default counterSlice.reducer;