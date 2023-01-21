import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MealCard } from "../components/MealCard";
import { MEALS } from "../data/dummy-data";

export const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext( FavoritesContext );

  return (
    <View style={ styles.container }>
      <Text>Favorite Meals</Text>
      <FlatList
        data={ favoriteMealsCtx.ids.map( id => MEALS.find( meal => meal.id === id ) ) }
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