import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

const Header = ({ restaurant }) => {
	const navigation = useNavigation();
	return (
		<View style={styles.page}>
			<Image
				source={{
					uri: restaurant.image,
				}}
				style={styles.image}
			/>
			<Ionicons
				onPress={() => {
					navigation.goBack();
				}}
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
				<Text style={styles.menuTitle}>Menu</Text>
			</View>
		</View>
	);
};

export default Header;
