import React from "react";
import { View, Text, StyleSheet, Pressable, Alert, Linking, FlatList } from "react-native";
import { Image } from "expo-image";
import { theme } from "./theme"; // Assuming you have a theme defined elsewhere
import Card, { CardProps } from "./components/Card";

const App: React.FC = () => {
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

  const cards: CardProps[] = [
    {
      id: "1",
      image: require("./assets/careerWeek.png"),
      title: "Career Week",
      date: "November 8th-14th, 2024",
      description: "Join us for a week exploring careers!",
      slug: "https://ghw.mlh.io/events/career-week",
    },
    {
      id: "2",
      image: require("./assets/dataWeek.png"),
      title: "Data Week",
      date: "December 6th-12th, 2024",
      description: "Join us for a week of all things Data!",
      slug: "https://ghw.mlh.io/events/data",
    },
    {
      id: "3",
      image: require("./assets/beginnersWeek.png"),
      title: "Beginner's Week",
      date: "January, 2025",
      description: "Join us for a week of beginner-friendly content to kick off 2025!",
      slug: "https://ghw.mlh.io/events/beginners-week",
    },
  ];

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./assets/mlh-logo-color.png")}
        transition={1000}
        contentFit="contain"
      />
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

      {/* FlatList for rendering cards */}
      <FlatList
        data={cards}
        style={styles.cardsContainer}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            image={item.image}
            title={item.title}
            date={item.date}
            description={item.description}
            slug={item.slug}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

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
  },
  image: {
    width: 200,
    height: 200,
  },
  signupButton: {
    backgroundColor: theme.colors.purple,
    borderRadius: 5,
    marginVertical: 10,
    padding: 12,
  },
  signupButtonText: {
    color: theme.colors.white,
    fontSize: 16,
    textAlign: "center",
  },
  signupButtonPressed: {
    opacity: 0.7, // Button becomes slightly transparent when pressed
  },
  cardsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flex: 1,
  },
  separator: {
    height: 16,
  },
});

export default App;
