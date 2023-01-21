// import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MealCard } from "../components/MealCard";
import { MEALS } from "../data/dummy-data";

export const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext( FavoritesContext );
  const favoriteMealsIds = useSelector( (state) => state.favoriteMeals.ids )

  return (
    <View style={ styles.container }>
      <Text>Favorite Meals</Text>
      <FlatList
        data={ favoriteMealsIds.map( id => MEALS.find( meal => meal.id === id ) ) }
        // data={ favoriteMealsCtx.ids.map( id => MEALS.find( meal => meal.id === id ) ) }
        renderItem={ itemData => <MealCard mealInfo={ itemData.item }/> }
        keyExtractor={ item => item.id }
      />
    </View>
  )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1, padding: 8,
  },
} );