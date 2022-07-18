import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const DishListItem = ({ dish }) => {
	//console.log(dish);
	return (
		<View style={styles.container}>
			<View style={{ flex: 1 }}>
				<Text style={styles.name}>{dish.name}</Text>
				<Text style={styles.description} numberOfLines={2}>
					{dish.description}
				</Text>
				<Text style={styles.price}>${dish.price}</Text>
			</View>
			{dish.image && (
				<Image source={{ uri: dish.image }} style={styles.image} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		marginHorizontal: 20,
		paddingVertical: 10,
		paddingBottom: 10,
		borderBottomColor: "lightgrey",
		borderBottomWidth: 1,
		flexDirection: "row",
	},
	name: {
		fontSize: 17,
		fontWeight: "600",
		letterSpacing: 0.5,
	},
	price: {
		fontSize: 16,
	},
	description: {
		color: "grey",
		marginVertical: 5,
	},
	image: {
		height: 100,
		aspectRatio: 1,
	},
});
export default DishListItem;
