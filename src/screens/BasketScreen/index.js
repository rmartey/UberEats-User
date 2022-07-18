import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import BasketDishItem from "../../components/BasketDishItem";

import restaurants from "../../../data/restaurants.json";

const restaurant = restaurants[0];

const Basket = () => {
	return (
		<View style={styles.page}>
			<Text style={styles.name}>{restaurant.name}</Text>
			<Text style={{ fontWeight: "bold", marginTop: 20, fontSize: 19 }}>
				Your items
			</Text>
			<FlatList
				data={restaurant.dishes}
				renderItem={({ item }) => <BasketDishItem basketDish={item} />}
			/>

			<View style={styles.seperator} />

			<View style={styles.button}>
				<Text style={styles.buttonText}>Order</Text>
			</View>
		</View>
	);
};

export default Basket;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		width: "100%",
		paddingVertical: 30, //temp fix
		padding: 10,
	},
	name: {
		fontSize: 24,
		marginVertical: 10,
		fontWeight: "600",
	},
	seperator: {
		height: 1,
		marginVertical: 10,
		backgroundColor: "lightgrey",
	},

	quantity: {
		fontSize: 25,
		marginHorizontal: 20,
	},
	button: {
		backgroundColor: "black",
		marginTop: "auto",
		padding: 20,
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontWeight: "600",
		fontSize: 20,
	},
});
