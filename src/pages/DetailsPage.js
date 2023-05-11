import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DetailsPage = ({ route }) => {
	const dispatch = useDispatch();
	const { animal } = route.params;
	const [isFavorite, setIsFavorite] = useState(false);

	const loadFavorites = async () => {
		try {
			const favorites = await AsyncStorage.getItem("favorites");
			if (favorites !== null) {
				dispatch(setFavorites(JSON.parse(favorites)));
			}
		} catch (error) {
			console.log(error);
		}
	};

	const toggleFavoriteHandler = () => {
		setIsFavorite(!isFavorite);
		if (isFavorite) {
			AsyncStorage.getItem("favorites").then((favorites) => {
				const updatedFavorites = JSON.parse(favorites).filter(
					(fav) => fav.name !== animal.name
				);
				AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
			});
		} else {
			AsyncStorage.getItem("favorites").then((favorites) => {
				const updatedFavorites = favorites
					? JSON.parse(favorites).concat(animal)
					: [animal];
				AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
			});
		}
	};

	useEffect(() => {
		const fetchFavorites = async () => {
			try {
				const storedFavorites = await AsyncStorage.getItem("favorites");
				let favorites = [];
				if (storedFavorites !== null) {
					favorites = JSON.parse(storedFavorites);
				}
				setIsFavorite(favorites.some((fav) => fav.name === animal.name));
			} catch (error) {
				console.log("error", error);
			}
		};
		fetchFavorites();
		loadFavorites();
	}, []);

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
