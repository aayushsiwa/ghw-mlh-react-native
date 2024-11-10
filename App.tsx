import React from "react";
import { View, Text, StyleSheet, Pressable, Alert, Linking } from "react-native";
import { theme } from "./theme"; // Assuming you have a theme defined elsewhere

const App: React.FC = () => {
  // Correcting the function name
  const handleSignup = () => {
    Alert.alert("Register for GHW", "Are you interested in signing up for Global Hack Week?", [
      {
        text: "No",
        style: "cancel",
        onPress: () => {
          console.log("User cancelled signup :(");
        },
      },
      {
        text: "Yes!",
        style: "default",
        onPress: () => {
          Linking.openURL("https://events.mlh.io/events/11595");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headlineText}>Global Hack Week</Text>
      <Text style={styles.bodyText}>
        Each month we host a Global Hack Week where you can learn new skills, build your portfolio,
        attend fun sessions and connect with other hackers in the MLH community.
      </Text>
      <Text style={styles.bodyText}>
        It&apos;s free and easy to get started! Sign up now and get ready to hack!
      </Text>

      {/* Added Pressable feedback */}
      <Pressable
        style={({ pressed }) => [
          styles.signupButton,
          pressed && styles.signupButtonPressed, // Conditional styling for when pressed
        ]}
        onPress={handleSignup}
      >
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </Pressable>
    </View>
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
  bodyText: {
    color: theme.colors.black,
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    width: "80%",
  },
  headlineText: {
    ...theme.textVariants.title,
    fontWeight: "bold",
  },
  signupButton: {
    backgroundColor: theme.colors.purple,
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
  },
  signupButtonText: {
    color: theme.colors.white,
    fontSize: 16,
    textAlign: "center",
  },
  // Adding feedback when the button is pressed
  signupButtonPressed: {
    opacity: 0.7, // Button becomes slightly transparent when pressed
  },
});

export default App;
