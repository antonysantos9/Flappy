import MovingBackGround from "@/components/MovingBackGround";
import Pipe from "@/components/Pipe";
import { DURATION } from "@/constants/animation";
import { useAudioPlayer } from "expo-audio";
import { useEffect, useState } from "react";
import { Image, ImageBackground, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Play() {
  const jumpSound = useAudioPlayer(require("@/assets/audios/wing.mp3"));
  const pointSound = useAudioPlayer(require("@/assets/audios/sfx_point.mp3"));
  const [obstacles, setObstacles] = useState([] as string []);

  function handleJump() {
    jumpSound.seekTo(0);
    jumpSound.play();
  }

  function spawnObstacle(){
    setObstacles((oldValue) => [...oldValue, Date.now().toString()]);
  }

  function removeObstacle(id: string){
    setObstacles((oldValue) => oldValue.filter((item => item !== id)) );
    pointSound.seekTo(0);
    pointSound.play();
  }

  useEffect(() => {
    const interval = setInterval(() => spawnObstacle(), DURATION / 4  )
    return () => clearInterval(interval);
  }, [])

  return (
    <ImageBackground
      source={require("@/assets/images/fundo.png")}
      resizeMode="cover"
      style={styles.background}
    >
      <Pressable onPress={handleJump} style={styles.background}>
        <SafeAreaView style={styles.screen}>
          <Image
            source={require("@/assets/images/RQERYZ9.gif")}
            style={styles.bird}
          />
          {obstacles.map((obstacle) => <Pipe 
          key={obstacle}
          gapY={195} 
          onEnd={() => removeObstacle(obstacle)} 
          />)}
        </SafeAreaView>
      </Pressable>

      <MovingBackGround />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  screen: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  bird: {
    width: 70,
    height: 48,
    position: "absolute",
    top: "50%",
    left: 100,
  },
});