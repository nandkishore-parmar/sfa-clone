import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ChampionshipCard from "../components/championShipCard";
import { fetchChampionships } from "../services/api";

const ChampionshipsScreen: React.FC = () => {
  const [pastChampionships, setPastChampionships] = useState<any[]>([]);
  const [upcomingChampionships, setUpcomingChampionships] = useState<any[]>([]);
  const [visiblePastCount, setVisiblePastCount] = useState(5); // Initially show 5 past championships
  const [visibleUpcomingCount, setVisibleUpcomingCount] = useState(5); // Initially show 5 upcoming championships
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getChampionships = async () => {
      try {
        const data = await fetchChampionships();
        setPastChampionships(data.past_championships || []);
        setUpcomingChampionships(data.upcoming_championships || []);
      } catch (err) {
        setError("Failed to load championships. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getChampionships();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#00215E" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Past Championships */}
      {pastChampionships.length > 0 && (
        <>
          <Text style={styles.heading}>Past Championships</Text>
          {pastChampionships.slice(0, visiblePastCount).map((championship, index) => (
            <ChampionshipCard key={index} {...championship} />
          ))}
          {pastChampionships.length > 5 && (
            <View style={styles.buttonContainer}>
              {visiblePastCount < pastChampionships.length ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setVisiblePastCount(pastChampionships.length)}
                >
                  <Text style={styles.buttonText}>Show More</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setVisiblePastCount(5)}
                >
                  <Text style={styles.buttonText}>Show Less</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </>
      )}

      {/* Upcoming Championships */}
      {upcomingChampionships.length > 0 && (
        <>
          <Text style={styles.heading}>Upcoming Championships</Text>
          {upcomingChampionships.slice(0, visibleUpcomingCount).map((championship, index) => (
            <ChampionshipCard key={index} {...championship} />
          ))}
          {upcomingChampionships.length > 5 && (
            <View style={styles.buttonContainer}>
              {visibleUpcomingCount < upcomingChampionships.length ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setVisibleUpcomingCount(upcomingChampionships.length)}
                >
                  <Text style={styles.buttonText}>Show More</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setVisibleUpcomingCount(5)}
                >
                  <Text style={styles.buttonText}>Show Less</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    paddingBottom: 20, // Prevent cut-off at bottom
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: "#00215E",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    textAlign: "center",
    color: "red",
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#00215E",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    minWidth: 120,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ChampionshipsScreen;
