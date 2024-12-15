import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

export default function LandingPage() {
  const router = useRouter();

  const handlePlayPress = () => {
    router.push("/game");
  };

  const image = require("../assets/ticTacToeBackground.jpg");

  return (
    <ImageBackground source={image} style={styles.image} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>Ticcity Taccity Toe</Text>
        <TouchableOpacity
          style={styles.playButton}
          onPress={handlePlayPress}
          accessible={true}
          accessibilityLabel="Start the game"
        >
          <Text style={styles.playButtonText}>Play</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 40,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  playButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFA500",
    width: 200,
    height: 60,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  playButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  image: {
    flex: 1,
  },
});
