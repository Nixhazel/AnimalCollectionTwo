import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const AnimalList = ({ animal, onPress }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			{/* <Image
				// source={{ uri: `../../assets/animals/${animal.img}` }}
				// source={require("../../assets/images/heart-filled.png")}
				style={styles.image}
			/> */}
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{animal.name}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	image: {
		width: 64,
		height: 64,
		borderRadius: 32,
		marginRight: 10,
	},
	detailsContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
	favoriteIcon: {
		width: 24,
		height: 24,
	},
});

export default AnimalList