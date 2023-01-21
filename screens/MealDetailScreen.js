import { FavoritesContext } from "../store/context/favorites-context";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import { MealDetails } from "../components/MealDetails";
import { SubTitle } from "../components/mealDetail/SubTitle";
import { List } from "../components/mealDetail/List";
import { IconButton } from "../components/IconButton";

export const MealDetailScreen = () => {
  const favoriteMealsCtx = useContext( FavoritesContext );

  const route = useRoute();
  const navigation = useNavigation();
  const mealId = route.params.mealId;
  const displayedMeal = MEALS.find( meal => meal.id === mealId )

  const headerButtonPressHandler = () => favoriteMealsCtx.isFavorite( mealId )
    ? favoriteMealsCtx.removeFavorite( mealId )
    : favoriteMealsCtx.addFavorite( mealId );

  useLayoutEffect( () => {
    navigation.setOptions( {
      title: displayedMeal.title,
      headerRight: () => (
        <IconButton
          icon='star'
          color={ favoriteMealsCtx.isFavorite( mealId ) ? 'yellow' : 'white' }
          onPress={ headerButtonPressHandler }
        />
      )
    } )
  }, [mealId, navigation, headerButtonPressHandler, favoriteMealsCtx] )

  return (
    <ScrollView style={ styles.container }>
      <Image
        style={ styles.image }
        source={ {uri: displayedMeal.imageUrl} }
      />
      <Text style={ styles.title }>{ displayedMeal.title }</Text>
      <MealDetails
        affordability={ displayedMeal.affordability }
        complexity={ displayedMeal.complexity }
        duration={ displayedMeal.duration }
        textStyle={ styles.detailText }
      />
      <View style={ styles.listOuterContainer }>
        <View style={ styles.listContainer }>
          <SubTitle>Ingredients</SubTitle>
          <List textArray={ displayedMeal.ingredients }/>
          <SubTitle>Steps</SubTitle>
          <List textArray={ displayedMeal.steps }/>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
    color: '#fff'
  },
  detailText: {
    color: '#fff'
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  }
} );