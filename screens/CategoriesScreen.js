import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from '../data/dummy-data';
import { CategoryCard } from "../components/CategoryCard";

export const CategoriesScreen = () => {


	return (<FlatList
		style={ styles.screen }
		data={ CATEGORIES }
		keyExtractor={ item => item.id }
		renderItem={ itemData => <CategoryCard title={ itemData.item.title } color={ itemData.item.color }
																					 categoryId={ itemData.item.id }/> }
		numColumns={ 2 }
	/>);
}

const styles = StyleSheet.create( {
	screen: {
		flex: 1,
	}, gridItem: {},
} );