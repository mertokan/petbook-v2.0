import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface UserState {
  user: object | null
}

const initialState: UserState = {
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload // Kullanıcıyı state'e kaydet
    },
    clearUser: (state) => {
      state.user = null // Logout olduğunda kullanıcıyı temizle
    },
  },
})

export const {setUser, clearUser} = userSlice.actions
export default userSlice.reducer
