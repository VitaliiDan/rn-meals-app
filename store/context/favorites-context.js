import { createContext, useState } from "react";

export const FavoritesContext = createContext( {
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
  isFavorite: (id) => {},
} );

export const FavoritesContextProvider = ({children}) => {
  const [favoriteMealsId, setFavoriteMealsId] = useState( [] )

  const addFavorite = id => setFavoriteMealsId( prev => [...prev, id] )

  const removeFavorite = id => setFavoriteMealsId( prev => prev.filter( el => el !== id ) )

  const isFavorite = id => favoriteMealsId.includes( id )

  const value = {
    ids: favoriteMealsId,
    addFavorite,
    removeFavorite,
    isFavorite,
  }

  return <FavoritesContext.Provider value={ value }>{ children }</FavoritesContext.Provider>;
};