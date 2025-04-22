import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Profile } from "@/components/profile/profile";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Text, TextInput, View } from "react-native";
import { styles } from "../app.styles";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Profile
          firstName={"loubna"}
          lastName={"Talha"}
          img={
            <Image
              source={{ uri: "https://i.pravatar.cc/300" }}
            />
          }
        >
          <View
            style={{ height: 30, width: 30, backgroundColor: "pink" }}
          ></View>{" "}
        </Profile>
        <Profile firstName={"Sara"} lastName={"Yul"}>
          {" "}
        </Profile>
        <Profile firstName={"Java"} lastName={"JEE"}>
          {" "}
        </Profile>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
