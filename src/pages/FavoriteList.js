import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AnimalList from "../components/AnimalList";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoriteList = ({ navigation }) => {
	const [favorites, setFavorites] = useState([]);

	const getFavoriteAnimals = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("favorites");
			if (jsonValue !== null) {
				setFavorites(JSON.parse(jsonValue));
			}
		} catch (e) {
			console.log("Error getting favorite animals:", e);
		}
	};

	useEffect(() => {
		getFavoriteAnimals();
	}, [favorites]);

	if (favorites.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.emptyText}>No favorite animals yet.</Text>
			</View>
		);
	}
	return (
		<View style={styles.container}>
			{favorites.map((animal) => (
				<AnimalList
					key={animal.name}
					animal={animal}
					onPress={() => navigation.navigate("DetailsPage", { animal })}
				/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 10,
		paddingTop: 10,
	},
	emptyText: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default FavoriteList;
