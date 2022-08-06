import { View, Text, Image, FlatList } from "react-native";
import orders from "../../../data/orders.json";
import restaurants from "../../../data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const order = orders[0];
const OrderDetailsHearder = () => {
	const navigation = useNavigation();

	const onPress = () => {
		navigation.goBack();
	};
	return (
		<View>
			<View style={styles.page}>
				<Image
					source={{
						uri: order.Restaurant.image,
					}}
					style={styles.image}
				/>
				<Ionicons
					onPress={onPress}
					name={"arrow-back-circle"}
					style={styles.iconContainer}
					size={45}
					color="white"
				/>
				<View style={styles.container}>
					<Text style={styles.title}>{order.Restaurant.name}</Text>
					<Text style={styles.subtitle}>
						{order.status} &#8226; 2 days ago{" "}
					</Text>
					<Text style={styles.menuTitle}>Your Orders</Text>
				</View>
			</View>
		</View>
	);
};

const OrderDetails = () => {
	return (
		<View>
			<FlatList
				ListHeaderComponent={OrderDetailsHearder}
				data={restaurants[0].dishes}
				renderItem={({ item }) => <BasketDishItem basketDish={item} />}
			/>
		</View>
	);
};

export default OrderDetails;
