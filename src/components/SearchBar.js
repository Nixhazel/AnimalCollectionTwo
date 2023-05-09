import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
	return (
		<View style={styles.container}>
			<Ionicons name='search' size={24} color='black' style={styles.icon} />
			<TextInput
				style={styles.input}
				placeholder='Search animals...'
				value={searchQuery}
				onChangeText={setSearchQuery}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#f0f0f0",
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	icon: {
		marginRight: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "90%",
		marginRight: 8,
		padding: 8,
	},
});

export default SearchBar;
