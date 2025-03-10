import axios from "axios";

// API Base URL
const API_BASE_URL = "https://data.sfaplay.com/api";

// Function to fetch championships
export const fetchChampionships = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get_ongoing_and_past_championships/`);
    // console.log("response",response.data)
    return response.data; // API response
  } catch (error) {
    console.error("Error fetching championships:", error);
    throw error; // Handle errors
  }
};
export const sendOTP = async (mobileNumber:any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/generate_resend_otp/`, {
      mobile_number: mobileNumber,
    });
    return response.data; // API response
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error; // Handle errors
  }
};