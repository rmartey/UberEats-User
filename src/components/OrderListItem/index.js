import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const OrderListItem = ({ order }) => {
	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate("Order");
	};
	//console.log(order.item.Restaurant.image);
	//console.log(order);
	return (
		<Pressable
			onPress={onPress}
			style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
		>
			<Image
				source={{ uri: order.item.Restaurant.image }}
				style={{ width: 100, height: 100, marginRight: 10 }}
			/>
			<View>
				<Text style={{ fontWeight: "600", fontSize: 16 }}>
					{order.item.Restaurant.name}
				</Text>
				<Text style={{ marginVertical: 5 }}>3 items &#8226; $38.33</Text>
				<Text>2 days ago &#8226; {order.item.status}</Text>
			</View>
		</Pressable>
	);
};

export default OrderListItem;
