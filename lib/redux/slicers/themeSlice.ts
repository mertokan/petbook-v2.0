import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  currentTheme: 'light', // Default theme
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.currentTheme = action.payload
    },
  },
})

export const {toggleTheme} = themeSlice.actions
export default themeSlice.reducer
