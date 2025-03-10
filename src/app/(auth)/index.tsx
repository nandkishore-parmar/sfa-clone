import React from "react";
import { View ,SafeAreaView} from "react-native";
import { ScrollView } from "react-native";
import Header from "../../components/header";// Adjust the path based on your project structure
// import ChampionshipCard from "../components/championShipCard";
import ChampionshipsScreen from "../../screens/ChampionshipsScreen";
const App: React.FC = () => {
  // const championshipData = {
  //   championship_name: "Hyderabad 2022",
  //   championshipYear: "2022",
  //   championship_thumbnail_image_url:
  //     "https://docs.sfaplay.com/img_tile_1/20231026050212629079.jpg",
  //   championship_location: "Hyderabad",
  //   start_date: "2022-10-08",
  //   end_date: "2022-10-22",
  //   championship_status: "championship_completed",
  // };
  
  return (
    <>
    <View>
      <Header />
      {/* Other components */}
      
    </View>
    <SafeAreaView style={{ flex: 1 }}>
      <ChampionshipsScreen />
    </SafeAreaView>
    </>
  );
};

export default App;
