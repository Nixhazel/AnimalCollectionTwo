import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import SearchBar from "../components/SearchBar";
import data from "../../assets/data/animals.json";
import AnimalList from "../components/AnimalList";
import FavoriteButton from "../components/FavoriteButton";
import { useSelector } from "react-redux";

const HomePage = ({ navigation }) => {
	const [animals, setAnimals] = useState([]);
     const [searchQuery, setSearchQuery] = useState("");

	const favoriteAnimals = useSelector((state) => state.favorites);

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
		loadAnimals();
	}, []);

	return (
		<View>
			<SearchBar searchQuery={searchQuery} setSearchQuery={handleSearch} />
			{favoriteAnimals.length > 0 && (
				<FavoriteButton
					onPress={() =>
						navigation.navigate("FavoriteList")
					}
				/>
			)}
			<FlatList
				data={filteredAnimals}
				renderItem={({ item }) => (
					<AnimalList
						animal={item}
						onPress={() => navigateToDetails(item)}
					/>
				)}
				keyExtractor={(item) => item.name}
			/>
		</View>
	);
};


export default HomePage;
