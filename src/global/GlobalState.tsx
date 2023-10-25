import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user : {},
    toggle : false,
    toggle2 : false
}

const GlobalState = createSlice({
  name: "state",
  initialState,
  reducers: {
    createUser : (state : any, {payload } : any) =>{
        state.user = payload
    },
    logOut : (state : any) =>{
        state.user = null
    },
    toggleState: (state: any) => {
        state.toggle = true;
      },
      changedToggle: (state: any) => {
        state.toggle = false
      },
    toggleState2: (state: any) => {
        state.toggle2 = true;
      },
      changedToggle2: (state: any) => {
        state.toggle2 = false
      },
  }
});

export const {toggleState,changedToggle, toggleState2,changedToggle2, logOut, createUser} = GlobalState.actions

export default GlobalState.reducer