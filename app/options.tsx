import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";



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
        fontSize: 24,
        fontWeight: "bold",
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