import {createSlice} from '@reduxjs/toolkit'

const counterSlice =createSlice({
    name: 'counter',
    reducers:{
        increment: (state) => {
            state.value += 1
          },
          decrement: (state) => {
            state.value -= 1
          },
          incrementByAmount: (state, action) => {
            state.value += action.payload
          }
        }
})

export default counterSlice.reducer
export const {increment,decrement,incrementByAmount} =counterSlice.actions