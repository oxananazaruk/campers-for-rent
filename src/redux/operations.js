import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65742ec8f941bda3f2af738b.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=4`);
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
