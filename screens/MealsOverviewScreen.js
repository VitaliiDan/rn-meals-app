import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealCard } from "../components/MealCard";
// import { useRoute } from "@react-navigation/native";

export const MealsOverviewScreen = ( { route } ) => {
	// const route = useRoute();
	const catId = route.params.categoryId

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