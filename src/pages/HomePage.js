import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import SearchBar from "../components/SearchBar";
import data from "../../assets/data/animals.json";
import AnimalList from "../components/AnimalList";
import FavoriteButton from "../components/FavoriteButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const HomePage = ({ navigation }) => {
	const [animals, setAnimals] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [favorites, setFavorites] = useState([]);
	// const [isFavorite, setIsFavorite] = useState([]);

	// const favoriteAnimals = useSelector((state) => state.favorites);

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

	const loadAnimals = async () => {
		await setAnimals(data);
	};
	const handleSearch = (text) => {
		setSearchQuery(text);
	};
	const filteredAnimals = animals.filter((animal) =>
		animal.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const navigateToDetails = (animal) => {
		navigation.navigate("DetailsPage", { animal });
	};

	useEffect(() => {
		getFavoriteAnimals();
		// const fetchFavorites = async () => {
		// 	try {
		// 		const storedFavorites = await AsyncStorage.getItem("favorites");
		// 		let favorites = [];
		// 		if (storedFavorites !== null) {
		// 			favorites = JSON.parse(storedFavorites);
		// 			setIsFavorite(true);
		// 			return;
		// 		} else if (favorites.length == 0) {
		// 			setIsFavorite(false);
		// 		}
		// 		// if (favorites.length > 0) {
		// 		// 	setIsFavorite(true);
		// 		// } else {
		// 		//
		// 		// }
		// 	} catch (error) {
		// 		console.log("error", error);
		// 	}
		// };
		// fetchFavorites();
		loadAnimals();
	}, [favorites]);

	return (
		<View>
			<SearchBar searchQuery={searchQuery} setSearchQuery={handleSearch} />
			{favorites.length > 0 && (
				<FavoriteButton onPress={() => navigation.navigate("FavoriteList")} />
			)}
			<FlatList
				data={filteredAnimals}
				renderItem={({ item }) => (
					<AnimalList animal={item} onPress={() => navigateToDetails(item)} />
				)}
				keyExtractor={(item) => item.name}
			/>
		</View>
	);
};

export default HomePage;
