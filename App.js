import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsPage from "./src/screens/RestaurantDetailsScreen";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";
import Basket from "./src/screens/BasketScreen";
export default function App() {
	return (
		<View style={styles.container}>
			{/* Restaurant item */}
			<Basket />
			{/*<HomeScreen />*/}

			<StatusBar style="light" />
		</View>
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
