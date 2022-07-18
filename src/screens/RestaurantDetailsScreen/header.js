import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
//import restaurant from "../../../data/restaurants.json";
import styles from "./styles";

const Header = ({ restaurant }) => {
	return (
		<View style={styles.page}>
			<Image
				source={{
					uri: restaurant.image,
				}}
				style={styles.image}
			/>
			<Ionicons
				name={"arrow-back-circle"}
				style={styles.iconContainer}
				size={45}
				color="white"
			/>
			<View style={styles.container}>
				<Text style={styles.title}>{restaurant.name}</Text>
				<Text style={styles.subtitle}>
					${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
					{restaurant.maxDeliveryTime} minutes
				</Text>
			</View>
		</View>
	);
};

export default Header;
