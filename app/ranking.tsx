import { View, ImageBackground, StyleSheet, Text } from "react-native";

export default function Ranking() {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require("@/assets/images/back4.jpg")} >


            <View style={styles.Box}>
                <Text style={styles.title}>Ranking</Text>
            </View>
            </ImageBackground>
            
            
            
             
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
  },

  Box: {
    backgroundColor: "rgba(0, 0, 0, 0.81)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 25,
    width: 500,
    height: 600,
    alignItems: "center",
  },

    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 40,
    },


})