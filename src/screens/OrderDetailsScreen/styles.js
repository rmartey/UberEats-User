import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	image: {
		width: "100%",
		aspectRatio: 5 / 3,
	},
	title: {
		fontSize: 35,
		fontWeight: "600",
	},
	subtitle: {
		color: "grey",
	},
	container: {
		margin: 10,
	},
	iconContainer: {
		position: "absolute",
		top: 40,
		left: 20,
	},
	menuTitle: {
		marginTop: 20,
		letterSpacing: 0.7,
		fontSize: 18,
	},
});

export default styles;
