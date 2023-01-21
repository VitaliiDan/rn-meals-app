import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { projectShadow } from "../consts/css/projectShadow";
import { MealDetails } from "./MealDetails";

export const MealCard = ( {mealInfo} ) => {
  const navigation = useNavigation();

  const onPressHandler = () => navigation.navigate( 'MealDetail', {mealId: mealInfo.id} );

  return (
    <View style={ styles.mealItem }>
      <Pressable
        android_ripple={ {color: '#ccc'} }
        style={ ( {pressed} ) => [styles.button, pressed ? styles.buttonPressed : null] }
        onPress={ onPressHandler }
      >
        <View
          style={ styles.button }
        >
          <View>
            <Image style={ styles.image } source={ {uri: mealInfo.imageUrl} }/>
            <Text style={ styles.title }>{ mealInfo.title }</Text>
          </View>
          <MealDetails
            affordability={ mealInfo.affordability }
            complexity={ mealInfo.complexity }
            duration={ mealInfo.duration }
          />
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
  }
} );