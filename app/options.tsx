import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";



export default function Options() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("@/assets/images/options.png")}
                style={styles.ImageBackground}
            >
                <Text style={styles.text}>Options</Text>

                <TouchableOpacity style={styles.button}>
                    <ImageBackground
                        source={require("@/assets/images/teste.png")}
                        style={styles.buttonImage}
                        resizeMode="cover"
                    >
                        <Text style={styles.buttonText}>Back</Text> 
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <ImageBackground
                        source={require("@/assets/images/teste.png")}
                        style={styles.buttonImage}
                        resizeMode="cover"
                    >
                        <Text style={styles.buttonText}>Back</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <ImageBackground
                        source={require("@/assets/images/teste.png")}
                        style={styles.buttonImage}
                        resizeMode="cover"
                    >
                        <Text style={styles.buttonText}>Back</Text>
                    </ImageBackground>
                </TouchableOpacity>

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
    ImageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    text: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#ffffff",

    textShadowColor: "#000",
    textShadowOffset: {
      width: 4,
      height: 4,
    },
    textShadowRadius: 3,
  },


    buttonText: {
        fontSize: 18,
        color: "blue",
    },
    button: {
        borderRadius: 5,
        width: 220,
        height: 50,
    },
    buttonImage: {
        width: 250,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
});