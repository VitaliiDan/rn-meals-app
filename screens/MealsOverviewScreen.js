import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

export const MealsOverviewScreen = ( {route} ) => {
	route.params

	return (
		<View style={ styles.container }>
			<Text>The Meals Overview Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		padding: 16,
	},
} );