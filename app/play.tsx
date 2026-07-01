import MovingBackGround from "@/components/MovingBackGround";
import Pipe from "@/components/Pipe";
import { DURATION } from "@/constants/animation";
import { CAP_HEIGHT, GAP_SIZE } from "@/constants/pipe";
import { useAudioPlayer } from "expo-audio";
import { useEffect, useState } from "react";
import { Dimensions, Image, ImageBackground, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Obstacle {
  id: string;
  gapY: number;
}

export default function Play() {
  const {height} = Dimensions.get("window");
  const jumpSound = useAudioPlayer(require("@/assets/audios/wing.mp3"));
  const pointSound = useAudioPlayer(require("@/assets/audios/sfx_point.mp3"));
  const [obstacles, setObstacles] = useState([] as Obstacle[]);

  function handleJump() {
    try{
    jumpSound.seekTo(0);
    jumpSound.play();
    } catch (error) {
      console.error("Error playing jump sound:", error);
    }
  }

  function spawnObstacle(){
    setObstacles((oldValue) => [...oldValue, {id: Date.now().toString(), gapY: randonGapY()}]);
  }

  function removeObstacle(id: string){
    setObstacles((oldValue) => oldValue.filter((item) => item.id !== id) );
    try {
      pointSound.seekTo(0);
      pointSound.play();
    } catch (error) {
      console.error("Error playing point sound:", error);
    }
  }

  function randonGapY(){
    const minY = CAP_HEIGHT + GAP_SIZE / 2;
    const maxY = height - CAP_HEIGHT - GAP_SIZE / 2;


    return Math.random() * (maxY - minY) + minY;
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
          {obstacles.map((obstacle) => 
          <Pipe 
          key={obstacle.id}
          gapY={obstacle.gapY} 
          onEnd={() => removeObstacle(obstacle.id)} 
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
    width: 53,
    height: 36,
    position: "absolute",
    top: "50%",
    left: 100,
  },
});