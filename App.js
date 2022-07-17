import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import RestaurantItem from "./src/components/RestaurantItem";
import restaurant from "./data/restaurants.json";

export default function App() {
	return (
		<View style={styles.container}>
			{/* Restaurant item */}
			<RestaurantItem restaurant={restaurant[0]} />
			<RestaurantItem restaurant={restaurant[1]} />

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	},
});
