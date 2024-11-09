import React from "react";
import { SafeAreaView, Text, StyleSheet, Button, Alert } from "react-native";
import { theme } from "./theme";

const App: React.FC = () => {
  // Handle button press
  const handlePress = (): void => {
    Alert.alert("Button pressed!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to React&apos;s Native!</Text>
      <Button title="Press Me" onPress={handlePress} />
    </SafeAreaView>
  );
};

// Define styles
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "#bb2cd9",
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
