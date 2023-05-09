import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

import { addToFavorites, removeFromFavorites } from "../redux/actions";

const DetailsPage = ({ route }) => {
	const dispatch = useDispatch();
	const { animal } = route.params;
	const isFavorite = useSelector((state) =>
		state.favorites.some((fav) => fav.name === animal.name)
	);

	const toggleFavoriteHandler = () => {
		if (isFavorite) {
			dispatch(removeFromFavorites(animal));
			
		} else {
			dispatch(addToFavorites(animal));
			
		}
	};

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{ uri: `https://reactnative.dev/img/tiny_logo.png` }}
			/>
			<Text style={styles.title}>{animal.name}</Text>
			<Text style={styles.description}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nulla
				tincidunt, pharetra velit a, malesuada neque. Nullam id pharetra lectus,
				ut porttitor turpis. Donec id dui nulla. Proin luctus, nisi a sagittis
				molestie, velit libero aliquet lacus, in consequat augue nibh vel ipsum.
				Maecenas convallis orci eget sapien commodo, sit amet blandit nibh
				eleifend.
			</Text>
			<MaterialIcons
				name={isFavorite ? "favorite" : "favorite-border"}
				color={isFavorite ? "red" : "#888"}
				size={32}
				onPress={toggleFavoriteHandler}
				style={styles.favoriteIcon}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		paddingTop: 20,
	},
	image: {
		width: 200,
		height: 200,
		resizeMode: "contain",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginVertical: 20,
	},
	description: {
		fontSize: 16,
		textAlign: "justify",
		marginHorizontal: 20,
	},
	favoriteIcon: {
		position: "absolute",
		top: 20,
		right: 20,
	},
});

export default DetailsPage;
