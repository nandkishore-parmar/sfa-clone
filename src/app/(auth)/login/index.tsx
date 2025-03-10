import React, { useState } from "react";
import Header from "@/src/components/header";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { sendOTP } from "@/src/services/api";

const LoginScreen: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetOTP = async () => {
    if (mobileNumber.length !== 10) {
      Alert.alert("Invalid Number", "Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);
      const response = await sendOTP(mobileNumber);
      console.log("response",response.data)
      Alert.alert("OTP Sent", response.message || "Check your phone for the OTP.");
    } catch (error) {
      Alert.alert( "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        
        <Image
          source={{
            uri: "https://www.sfaplay.com/championship/static/media/Login-banner.df9160e4.jpg",
          }}
          style={styles.banner}
        />
<View style={{paddingHorizontal:20}}>
        <Text style={styles.title}>Participated before?</Text>
        <Text style={styles.subtitle}>
          Login to register for the SFA Championships 2024-25
        </Text>

        <Text style={styles.label}>Enter your registered mobile number*</Text>
        <TextInput
          style={styles.input}
          placeholder="9900 0000 00"
          keyboardType="phone-pad"
          maxLength={10}
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />

        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.7 }]}
          onPress={handleGetOTP}
          disabled={loading}
        >
          {loading ? <ActivityIndicator color="#FFF" /> : <Text style={styles.buttonText} onPress={handleGetOTP}>Get OTP</Text>}
        </TouchableOpacity>

        <Text style={styles.note}>
          Note: To update your mobile number, email{" "}
          <Text style={styles.email}>info@sfaplay.com</Text> with your name, school, SFA ID, old and new numbers.
        </Text>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.divider} />
        </View>
        </View>
      </View>
    </>
  );
};

// Styles remain unchanged
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  banner: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#00215E",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginVertical: 10,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "bold",
    color: "#00215E",
    marginTop: 15,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
    fontSize: 16,
    marginTop: 5,
  },
  button: {
    width: "100%",
    backgroundColor: "#00215E",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  note: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
  },
  email: {
    color: "#00215E",
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#CCC",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#666",
  },
});

export default LoginScreen;
