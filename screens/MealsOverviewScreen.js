import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealCard } from "../components/MealCard";
import { useNavigation, useRoute } from "@react-navigation/native";

export const MealsOverviewScreen = () => {
// second way to get params
// export const MealsOverviewScreen = ({navigation, route}) => {

  const route = useRoute();
  const navigation = useNavigation()
  const catId = route.params.categoryId

  const title = CATEGORIES.find( el => el.id === catId ).title

  useLayoutEffect( () => {
    navigation.setOptions( {title} )
  }, [title] )

  const displayedMeals = MEALS.filter( mealItem => mealItem.categoryIds.indexOf( catId ) >= 0 )

  return (
    <View style={ styles.container }>
      <FlatList
        data={ displayedMeals }
        renderItem={ itemData => <MealCard mealInfo={ itemData.item }/> }
        keyExtractor={ item => item.id }
      />
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1, padding: 8,
  },
} );