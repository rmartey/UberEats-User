import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BasketDishItem = ({ basketDish }) => {
	return (
		<View style={styles.row}>
			<View style={styles.quantityContainer}>
				<Text>1</Text>
			</View>
			<Text style={{ fontWeight: "bold" }}>{basketDish.name}</Text>
			<Text style={{ marginLeft: "auto" }}>${basketDish.price.toFixed(2)}</Text>
		</View>
	);
};

export default BasketDishItem;

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 15,
		paddingHorizontal: 10,
	},

	quantityContainer: {
		backgroundColor: "lightgrey",
		paddingHorizontal: 5,
		marginRight: 10,
		paddingVertical: 2,
		borderRadius: 3,
	},
});
