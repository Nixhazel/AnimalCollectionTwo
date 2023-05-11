import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import AnimalList from '../components/AnimalList';

const FavoriteList = ({ navigation }) => {
	const favoriteAnimals = useSelector((state) => state.favorites);

	if (favoriteAnimals.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.emptyText}>No favorite animals yet.</Text>
			</View>
		);
	}
     return (
				<View style={styles.container}>
					{favoriteAnimals.map((animal) => (
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

export default FavoriteList