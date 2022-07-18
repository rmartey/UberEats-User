import { View, FlatList } from "react-native";
import DishListItem from "../../components/DishListItem";
import Header from "./header";
import restaurants from "../../../data/restaurants.json";

import styles from "./styles";

const restaurant = restaurants[1];

const RestaurantDetailsPage = () => {
	return (
		<View style={styles.page}>
			<FlatList
				ListHeaderComponent={<Header restaurant={restaurant} />}
				data={restaurant.dishes}
				renderItem={({ item }) => <DishListItem dish={item} />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default RestaurantDetailsPage;
