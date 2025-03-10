import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather"; // ✅ Correct import
import { router } from "expo-router";

const Header: React.FC = () => {  // ✅ Correctly define router

  const handleLogin = () => {
    router.push("/(auth)/login");  // ✅ Use route, NOT file path
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/sfa_new-logo.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Login Button */}
      <View style={{ flexDirection: "row", gap: 5 }}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* Menu Icon */}
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#00215E", // Dark blue background
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  logo: {
    width: 70,
    height: 30,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "white",
  },
  loginButton: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  loginText: {
    color: "black",
    fontWeight: "bold",
  },
  menuButton: {
    padding: 8,
  },
});

export default Header;
