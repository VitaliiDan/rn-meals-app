import { StyleSheet, View, Image, Text, Pressable, Platform } from "react-native";
import { projectShadow } from "../consts/css/projectShadow";

export const MealCard = ( { mealInfo } ) => {
	const onPressHandler = () => {
		console.log( 'MealCard onPressHandler' )
	}

	return (
		<View style={ styles.mealItem }>
			<Pressable
				android_ripple={ { color: '#ccc' } }
				style={ ( { pressed } ) => [ styles.button, pressed ? styles.buttonPressed : null ] }
				onPress={ onPressHandler }
			>
				<View
					style={ styles.button }
				>
					<View>
						<Image style={ styles.image } source={ { uri: mealInfo.imageUrl } }/>
						<Text style={ styles.title }>{ mealInfo.title }</Text>
					</View>
					<View style={ styles.details }>
						<Text style={ styles.detailItem }>{ mealInfo.duration }m</Text>
						<Text style={ styles.detailItem }>{ mealInfo.complexity.toUpperCase() }</Text>
						<Text style={ styles.detailItem }>{ mealInfo.affordability.toUpperCase() }</Text>
					</View>
				</View>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create( {
	mealItem: {
		margin: 16,
		borderRadius: 8,
		backgroundColor: '#fff',
		...projectShadow,
	},
	button: {
		flex: 1,
		borderRadius: 8,
		overflow: 'hidden',
	},
	buttonPressed: {
		opacity: 0.5,
	},
	image: {
		width: '100%',
		height: 200,
	},
	title: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 18,
		margin: 8,
	},
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	}
} );