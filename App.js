// import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
// import { FavoritesContextProvider } from "./store/context/favorites-context";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { CategoriesScreen, MealsOverviewScreen, MealDetailScreen, FavoritesScreen } from "./screens";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={ {
        headerStyle: {
          backgroundColor: '#351401',
        },
        headerTintColor: '#fff',
        sceneContainerStyle: {
          backgroundColor: '#3f2f25',
        },
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: '#fff',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e2b497',
      } }
    >
      <Drawer.Screen
        name="Categories"
        component={ CategoriesScreen }
        options={ {
          title: 'All Categories',
          drawerIcon: ({color, size}) => <Ionicons name='list' color={ color } size={ size }/>,
        } }
      />
      <Drawer.Screen
        name='Favorites'
        component={ FavoritesScreen }
        options={ {
          drawerIcon: ({color, size}) => <Ionicons name='star' color={ color } size={ size }/>,
        } }
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <Provider store={ store }>
        {/*<FavoritesContextProvider>*/ }
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={ {
              headerStyle: {
                backgroundColor: '#351401',
              },
              headerTintColor: '#fff',
              contentStyle: {
                backgroundColor: '#3f2f25',
              }
            } }
          >
            <Stack.Screen
              name='Drawer'
              component={ DrawerNavigator }
              options={ {
                headerShown: false,
              } }
            />
            <Stack.Screen
              name='MealsOverview'
              component={ MealsOverviewScreen }
              // options={({route, navigation}) => {
              // 	const catID = route.params.categoryId
              // 	const title = CATEGORIES.find(el => el.id === catID).title
              //
              // 	return {
              // 		title
              // 	}
              // }}
            />
            <Stack.Screen
              name={ 'MealDetail' }
              component={ MealDetailScreen }
              // options={{
              // 	headerRight: () => <Button title='press'/>
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/*</FavoritesContextProvider>*/ }
    </>
  );
}
