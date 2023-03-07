import { createSlice } from '@reduxjs/toolkit';

const userSlicer = createSlice({
  name: 'user',
  initialState: {
    token: null,
    onboard: true,
    user: [],
  },

  reducers: {
    setOnboard: (state, action) => {
      state.onboard = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setOnboard, setToken, setUser } = userSlicer.actions;

export default userSlicer.reducer;
