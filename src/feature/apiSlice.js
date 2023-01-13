import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userCar: [],
  serviced: [],
}

export const apiSlice = createSlice({
  name: 'userCar',
  name: 'serviced',
  initialState,
  reducers: {
    addUserCar: (state, {payload}) => {
      state.userCar = payload
    },
    addServiced: (state, {payload}) => {
      state.serviced = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {addUserCar} = apiSlice.actions
export const {addServiced} = apiSlice.actions
// export const getMovies = (state) => state.movies.movies

export default apiSlice.reducer