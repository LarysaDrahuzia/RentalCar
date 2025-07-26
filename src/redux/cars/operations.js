import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (
    { page = 1, totalCars, rentalPrice, mileageFrom, mileageTo } = {},
    thunkAPI
  ) => {
    try {
      const response = await axios.get(`/cars`, {
        page,
        totalCars,
        rentalPrice,
        mileageFrom,
        mileageTo,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Error fetching cars'
      );
    }
  }
);

export const fetchBrands = createAsyncThunk(
  'filters/fetchBrands',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/brands');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
