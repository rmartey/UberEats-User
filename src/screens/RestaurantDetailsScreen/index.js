import { View, FlatList } from "react-native";
import DishListItem from "../../components/DishListItem";
import Header from "./header";
import restaurants from "../../../data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";

import { useRoute } from "@react-navigation/native";

import styles from "./styles";

const restaurant = restaurants[1];

const RestaurantDetailsPage = () => {
	const route = useRoute();
	const id = route.params?.id;
	console.warn(id);
	return (
		<View style={styles.page}>
			<FlatList
				ListHeaderComponent={<Header restaurant={restaurant} />}
				data={restaurant.dishes}
				renderItem={({ item }) => <DishListItem dish={item} />}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item.name}
			/>
		</View>
	);
};

export default RestaurantDetailsPage;
