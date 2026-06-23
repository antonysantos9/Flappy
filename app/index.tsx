import { Link } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const bestScore = 0;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/fundo.png")}
        resizeMode="stretch"
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>
            Flappy Bird
          </Text>

          <View style={styles.scoreBox}>
            <Text style={styles.score}>
              🏆 Melhor Pontuação: {bestScore}
            </Text>
          </View>

          <Link href="/play" asChild>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>
                ▶ JOGAR
              </Text>
            </TouchableOpacity>
          </Link>

          
          <View style={styles.buttonRow}>
            <Link href="/ranking" asChild>
              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>
                  🏅 RANKING
                </Text>
              </TouchableOpacity>
            </Link>
            <Link href="/options" asChild>
              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>
                  ⚙ OPÇÕES
                </Text>
              </TouchableOpacity>
            </Link>
          </View>

          <Text style={styles.footer}>
            Toque em JOGAR para começar
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.15)",
  },

  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 20,

    textShadowColor: "#000",
    textShadowOffset: {
      width: 4,
      height: 4,
    },
    textShadowRadius: 3,
  },

  scoreBox: {
    backgroundColor: "rgba(0,0,0,0.55)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 25,
  },

  score: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  playButton: {
    width: 250,
    height: 75,
    backgroundColor: "#FFD700",

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 15,
    borderWidth: 4,
    borderColor: "#C49000",

    marginBottom: 20,
  },

  playButtonText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },

  buttonRow: {
    flexDirection: "row",
    marginBottom: 25,
  },

  secondaryButton: {
    width: 140,
    height: 50,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#4CAF50",

    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#2E7D32",

    marginHorizontal: 8,
  },

  secondaryButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  footer: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",

    textShadowColor: "#000",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
  },
});