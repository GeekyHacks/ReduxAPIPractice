// usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://randomuser.me/api/?results=5';

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

// create a function that deals with fetching using thunk
export const fetchApi = createAsyncThunk('users/fetchApi', async () => {
  return await fetch(apiUrl)
    .then((response) => response.json())
    .catch((error) => console.log(error));
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.results;
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default usersSlice.reducer;
