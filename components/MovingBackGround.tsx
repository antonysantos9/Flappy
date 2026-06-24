import { View, Image, StyleSheet } from "react-native";

export default function MovingBackground() {
    return (
        <View style={styles.screen}>
            <View style={styles.conteiner}>
                <Image style={styles.Image} source={require("@/assets/images/chao.webp")} resizeMode="stretch" />
                <Image style={styles.Image} source={require("@/assets/images/chao.webp")} resizeMode="stretch" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
    },
    conteiner: {
        width: '100%',
        flexDirection: 'row',
    },
    Image: {
        width: '100%',
        height: 20,
    }
})