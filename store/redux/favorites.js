import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice( {
  name: 'favorites',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push( action.payload.id )
    },
    removeFavorite: (state, action) => {
      state.ids = state.ids.filter( el => el !== action.payload.id )
    },
  }
} )

export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;
export default favoriteSlice.reducer;