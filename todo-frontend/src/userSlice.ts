import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  _id?: number;
  name?: string;
}

const initialState: UserState = {};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   setUser: (state, action: PayloadAction<UserState>) => {
        return action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = counterSlice.actions

export default counterSlice.reducer