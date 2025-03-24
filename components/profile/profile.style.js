import { Image, StyleSheet, Platform } from "react-native";
export const styles = StyleSheet.create({
    container: {
        padding:20,
        backgroundColor: "white",
        elevation: 5,
        shadowColor:"#000",
        shadowOffset: {
            width:0,
            height:2
        },
        shadowOpacity: 0.25,
        shadowRadius:3.84
    },
    avatar: {
        width:70,
        height:70,
        borderRadius: 50
    },
    header: {
        flexDirection: "row"
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5
    },
    text: {
        paddingLeft: 15
    },
    social: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10
    },
    socialBtn: {
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: "50%"
    }
})