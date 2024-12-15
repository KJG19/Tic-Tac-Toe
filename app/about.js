import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Text style={styles.subtitle}>Made by:</Text>
      <View style={styles.namesContainer}>
        <Text style={styles.names}>Kyle Guenter</Text>
        <Text style={styles.names}>Logan Buye</Text>
        <Text style={styles.names}>Connor Davison</Text>
      </View>
      <Text style={styles.description}>
        This app was made by us for you to enjoy. We hope you have fun playing!
      </Text>
      <Text style={styles.footer}>Thanks for playing!</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#555",
    marginBottom: 10,
  },
  namesContainer: {
    marginBottom: 20,
  },
  names: {
    fontSize: 18,
    color: "#007BFF",
    marginBottom: 5,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  footer: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    fontStyle: "italic",
  },
});

export default About;
