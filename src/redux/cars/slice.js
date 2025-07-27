import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCarById } from './operations.js';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const sliceCars = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    totalCars: null,
    page: 1,
    hasMore: true,
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    selectedCar: null,
  },
  reducers: {
    addToFavorites(state, action) {
      const car = action.payload;
      const exists = state.favorites.some(item => item.id === car.id);
      if (!exists) {
        state.favorites.push(car);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        car => car.id !== action.payload
      );
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    resetCars(state) {
      state.items = [];
      state.page = 1;
      state.hasMore = true;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)

      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;

        const { cars, totalCars, totalPages } = action.payload;
        const page = Number(action.payload.page);

        if (!Array.isArray(cars)) {
          state.error = 'Invalid cars payload';
          return;
        }

        if (page > 1) {
          const existingIds = new Set(state.items.map(car => car.id));
          const newCars = cars.filter(car => !existingIds.has(car.id));
          state.items = [...state.items, ...newCars];
        } else {
          state.items = cars;
        }

        state.totalCars = totalCars;
        state.totalPages = totalPages;
        state.page = page;
        state.hasMore = page < totalPages;
      })
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.selectedCar = action.payload;
      });
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  resetCars, // ← додали для скидання, якщо фільтри міняються
} = sliceCars.actions;

export default sliceCars.reducer;
