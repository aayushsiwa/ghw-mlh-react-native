import { View, Text, ImageSourcePropType, Pressable, Linking, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FC } from "react";
import { theme } from "../theme";

export type CardProps = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  date: string;
  description: string;
  slug: string;
};

const Card: FC<CardProps> = ({ image, title, date, description, slug }) => {
  const handlePress = () => {
    Linking.openURL(slug);
  };

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.headlineText}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.description}>{description}</Text>
      <Pressable onPress={handlePress}>
        <Text style={styles.learnMore}>Learn more &gt;</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: theme.colors.darkGrey50,
    borderRadius: 10,
    width: "100%", // Use full width for the card
    overflow: "hidden",
    alignItems: "flex-start",
    marginBottom: 16, // Space between cards
  },
  image: {
    width: 48,
    height: 48,
    marginBottom: 10,
  },
  headlineText: {
    fontSize: 24,
    color: theme.colors.darkGrey,
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    color: theme.colors.red,
  },
  description: {
    fontSize: 18,
    color: theme.colors.lightGrey,
    marginVertical: 10,
  },
  learnMore: {
    fontSize: 16,
    color: theme.colors.yellow,
  },
});

export default Card;
