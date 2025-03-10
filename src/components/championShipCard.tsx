import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface ChampionshipCardProps {
  championship_name: string;
  championshipYear: string;
  championship_thumbnail_image_url: string;
  championship_location: string;
  start_date: string;
  end_date: string;
  championship_status: string;
}

const ChampionshipCard: React.FC<ChampionshipCardProps> = ({
  championship_name,
  championshipYear,
  championship_thumbnail_image_url,
  championship_location,
  start_date,
  end_date,
  championship_status,
}) => {
  return (  
    <View style={styles.card}>
      {/* Championship Image */}
      <Image source={{ uri: championship_thumbnail_image_url }} style={styles.image} />

      {/* Championship Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{championship_name}</Text>
        <Text style={styles.subtitle}>{championship_location} • {championshipYear}</Text>

        {/* Championship Dates */}
        <View style={styles.row}>
          <Text style={styles.label}>Start Date:</Text>
          <Text style={styles.value}>{start_date}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>End Date:</Text>
          <Text style={styles.value}>{end_date}</Text>
        </View>

        {/* Championship Status */}
        <View style={[styles.statusContainer, championship_status === "championship_completed" ? styles.completed : styles.ongoing]}>
          <Text style={styles.statusText}>{championship_status.replace("_", " ")}</Text>
        </View>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
    margin: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    color: "#444",
  },
  value: {
    color: "#666",
  },
  statusContainer: {
    marginTop: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  statusText: {
    fontWeight: "bold",
    color: "#fff",
    textTransform: "capitalize",
  },
  completed: {
    backgroundColor: "#28a745",
  },
  ongoing: {
    backgroundColor: "#ffc107",
  },
});

export default ChampionshipCard;
