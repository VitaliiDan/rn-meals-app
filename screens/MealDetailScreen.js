import { useLayoutEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

import { useNavigation, useRoute } from "@react-navigation/native";

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { MealDetails } from "../components/MealDetails";
import { SubTitle } from "../components/mealDetail/SubTitle";
import { List } from "../components/mealDetail/List";
import { IconButton } from "../components/IconButton";

export const MealDetailScreen = () => {
  // const favoriteMealsCtx = useContext( FavoritesContext );
  const favoriteMealsIds = useSelector( (state) => state.favoriteMeals.ids )
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const mealId = route.params.mealId;
  const displayedMeal = MEALS.find( meal => meal.id === mealId )
  const isFavorite = favoriteMealsIds.includes( mealId )

  const headerButtonPressHandler = () => isFavorite
    ? dispatch( removeFavorite( {id: mealId} ) )
    : dispatch( addFavorite( {id: mealId} ) )

  // const headerButtonPressHandler = () => favoriteMealsCtx.isFavorite( mealId )
  //   ? favoriteMealsCtx.removeFavorite( mealId )
  //   : favoriteMealsCtx.addFavorite( mealId );

  useLayoutEffect( () => {
    navigation.setOptions( {
      title: displayedMeal.title,
      headerRight: () => (
        <IconButton
          icon={ isFavorite ? 'star' : 'star-outline' }
          color='white'
          onPress={ headerButtonPressHandler }
        />
      )
    } )
  }, [mealId, navigation, headerButtonPressHandler, isFavorite] )

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