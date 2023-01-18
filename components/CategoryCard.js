import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { projectShadow } from "../consts/css/projectShadow";

export const CategoryCard = ( { title, color, categoryId } ) => {
	const navigation = useNavigation();
	const onPressHandler = () => navigation.navigate( 'MealsOverview', { categoryId } );

	return (
		<View style={ styles.gridItem }>
			<Pressable
				android_ripple={ { color: '#ccc' } }
				style={ ( { pressed } ) => [ styles.button, pressed ? styles.buttonPressed : null ] }
				onPress={ onPressHandler }
			>
				<View style={ [ styles.innerContainer, { backgroundColor: color } ] }>
					<Text style={ styles.title }>{ title }</Text>
				</View>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create( {
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		backgroundColor: '#fff',
		...projectShadow,
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
	}
} )