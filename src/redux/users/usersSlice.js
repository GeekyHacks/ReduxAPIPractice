import { createSlice } from '@reduxjs/toolkit';

const initialeState = () => {
  users: [];
  isLoading: false;
  error: undefined;
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: '',
});

export default userSlice.reducer;
