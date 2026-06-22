import { StyleSheet, Text , TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.text}>pao</Text>
            <Text style={styles.text2}>Flappy bird</Text>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Clique aqui</Text></TouchableOpacity>
        </SafeAreaView>
    )
}

 const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 100,
    }, 
    text2:{
        color: '#ff0000',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'SpaceMono',
        padding: 100,
     }, 
        button: {
        backgroundColor: '#ffffff',
        },
        buttonText: {
            color: '#000000',
            fontSize: 16,
        }

     
 });