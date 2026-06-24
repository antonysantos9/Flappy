import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import MovingBackground from "@/components/MovingBackGround";

export default function Home() {
  const bestScore = 0;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/fundo.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.overlay}>

          <View style={styles.titleContainer}>
            <Image
              source={require("@/assets/images/bird.png")}
              style={styles.birdImage}
            />

            <Text style={styles.title}>
              Flappy Bird
            </Text>
          </View>

          <View style={styles.scoreBox}>
            <Text style={styles.score}>
              🏆 Melhor Pontuação: {bestScore}
            </Text>
          </View>

          <Link href="/play" asChild>
            <TouchableOpacity>
              <LinearGradient
                colors={["#FFD700", "#C49000"]}
                style={styles.playButton}
              >
                <Text style={styles.playButtonText}>
                  ▶ JOGAR
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </Link>

          <View style={styles.buttonRow}>
            <Link href="/ranking" asChild>
              <TouchableOpacity style={styles.secondaryButton}>
                <LinearGradient
                  colors={["#26a100", "#51dd74"]}
                  style={styles.secondaryButton}
                >
                  <Text style={styles.secondaryButtonText}>
                    🏅 RANKING
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </Link>

            <Link href="/options" asChild>
              <TouchableOpacity style={styles.secondaryButton}>
                <LinearGradient
                  colors={["#26a100", "#51dd74"]}
                  style={styles.secondaryButton}
                >
                  <Text style={styles.secondaryButtonText}>
                    ⚙ OPÇÕES
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </Link>
          </View>

          <Text style={styles.footer}>
            Toque em JOGAR para começar
          </Text>

        </View>
        <MovingBackground />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  birdImage: {
    width: 80,
    height: 80,
    marginRight: 15,
    transform: [{ rotate: "-15deg" }],
  },

  title: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#FFD700",

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