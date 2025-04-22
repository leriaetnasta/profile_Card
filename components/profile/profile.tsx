import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./profile.style";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useState } from "react";
export function Profile({firstName, lastName, img}:any) {
  // fragment : <></>
  let [age, setAge]=useState(1)
  function greetings(){
    return 'Welcome!'
  }
  function increase(){
    return setAge(++age);
  }
  function hello(){
    return Alert.alert(firstName)
  }
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: "https://i.pravatar.cc/300" }}
      />
      <Text style={styles.name} onPress={hello} >{firstName} {lastName} {greetings()}</Text>
      <TouchableOpacity onPress={increase} >
      <Text style={styles.text}>
        Hi! I'm a software engineer, I'm {age}, let's get in touch
      </Text></TouchableOpacity>
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
