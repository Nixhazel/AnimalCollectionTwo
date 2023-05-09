import { StatusBar } from "expo-status-bar";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./src/pages/HomePage";
import DetailsPage from "./src/pages/DetailsPage";
import FavoriteList from "./src/pages/FavoriteList";

const Stack = createStackNavigator();
export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='HomePage'>
					<Stack.Screen
						name='HomePage'
						component={HomePage}
						options={{ title: "Animal List" }}
					/>
					<Stack.Screen name='DetailsPage' component={DetailsPage} />
					<Stack.Screen
						name='FavoriteList'
						component={FavoriteList}
						options={{ title: "Favorites" }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
