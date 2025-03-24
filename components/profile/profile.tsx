import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./profile.style";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
export function Profile() {
  // fragment : <></>
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: "https://i.pravatar.cc/300" }}
      />
      <Text style={styles.name}>Loubna Talha</Text>
      <Text style={styles.text}>
        Hi! I'm a software engineer, let's get in touch
      </Text>
      <View style={styles.social}>
        <TouchableOpacity style= {styles.socialBtn}>
          {" "}
          <Entypo name="github" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          {" "}
          <FontAwesome6 name="x-twitter" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Entypo name="linkedin" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
