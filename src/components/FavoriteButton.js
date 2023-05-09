import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FavoriteButton = ({ onPress, isActive }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Ionicons name='heart' size={24} color='red' />
			<Text style={styles.goalText}>My Favorites</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	goalText: {
		color: "white",
		fontWeight: "bold",
	},
});

export default FavoriteButton;
