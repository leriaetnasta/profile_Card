import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Profile } from "@/components/profile/profile";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {Text, TextInput, View} from 'react-native';
import {styles} from '../app.styles';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView >
        <Profile/>
      
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

