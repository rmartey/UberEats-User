import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsPage from "../screens/RestaurantDetailsScreen";
import DishDetailsScreen from "../screens/DishDetailsScreen";
import Basket from "../screens/BasketScreen";
import OrdersScreen from "../screens/OrdersScreen";
import OrderDetails from "../screens/OrderDetailsScreen";

import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const RootNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="Home Tabs"
				component={HomeTabs}
				//options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

const HomeTabs = () => {
	return (
		<Tab.Navigator barStyle={{ backgroundColor: "white" }}>
			<Tab.Screen
				name="Home"
				component={HomeStackNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<Foundation name="home" size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Orders stack"
				component={OrdersStackNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="list-alt" size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={OrdersScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="user-alt" size={24} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name="Restaurants"
				component={HomeScreen}
				//options={{ headerShown: false }}
			/>
			<HomeStack.Screen
				name="Restaurant"
				component={RestaurantDetailsPage}
				options={{ headerShown: false }}
			/>
			<HomeStack.Screen
				name="Dish"
				component={DishDetailsScreen}
				//options={{ headerShown: false }}
			/>
			<HomeStack.Screen
				name="Basket"
				component={Basket}
				//options={{ headerShown: false }}
			/>
		</HomeStack.Navigator>
	);
};

const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
	return (
		<OrdersStack.Navigator>
			<OrdersStack.Screen
				name="Orders"
				component={OrdersScreen}
				//options={{ headerShown: false }}
			/>
			<OrdersStack.Screen
				name="Order"
				component={OrderDetails}
				options={{ headerShown: false }}
			/>
		</OrdersStack.Navigator>
	);
};

export default RootNavigator;
