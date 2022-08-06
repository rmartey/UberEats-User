import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import restaurants from "../../../data/restaurants.json";

const dish = restaurants[0].dishes[0];

const DishDetailsScreen = () => {
	const navigation = useNavigation();

	const [quantity, setQuantity] = useState(1);

	const onMinus = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};
	const onPlus = () => {
		setQuantity(quantity + 1);
	};

	const getTotal = () => {
		return (dish.price * quantity).toFixed(2);
	};

	const onPress = () => {
		navigation.navigate("Basket");
	};
	return (
		<View style={styles.page}>
			<Text style={styles.name}>{dish.name}</Text>
			<Text style={styles.description}>{dish.description}</Text>
			<View style={styles.seperator} />
			<View style={styles.row}>
				<AntDesign
					name="minuscircle"
					size={60}
					color={"black"}
					onPress={onMinus}
				/>
				<Text style={styles.quantity}>{quantity}</Text>
				<AntDesign
					name="pluscircle"
					size={60}
					color={"black"}
					onPress={onPlus}
				/>
			</View>
			<Pressable onPress={onPress} style={styles.button}>
				<Text style={styles.buttonText}>
					Add {quantity} items to basket &#8226; ${getTotal()}
				</Text>
			</Pressable>
		</View>
	);
};

export default DishDetailsScreen;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		width: "100%",
		paddingVertical: 30, //temp fix
		padding: 10,
	},
	name: {
		fontSize: 30,
		marginVertical: 10,
		fontWeight: "600",
	},
	seperator: {
		height: 1,
		marginVertical: 10,
		backgroundColor: "lightgrey",
	},
	description: {
		color: "grey",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 50,
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
