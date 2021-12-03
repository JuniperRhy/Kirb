import "./App.css";
import Kirb from "./kirb";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import { Howl, Howler } from "howler";
import Haaaiiiii from "./kirbSVGmedia/Haaaiiiiii.mp3";
import KirbHuh from "./kirbSVGmedia/KirbHuh.mp3";
import KirbSleep from "./kirbSVGmedia/KirbSleep.mp3";

function App() {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const sound = new Howl({
    src: Haaaiiiii,
    volume: 0.35,
    loop: false,
  });

  const huh = new Howl({
    src: KirbHuh,
    volume: 0.15,
    loop: false,
  });

  const [play, { stop }] = useSound(KirbSleep, { volume: 0.05, loop: true });

  return (
    <div className="App">
      <h1 className={isHover ? "Awake" : "Asleep"}>
        <span className={isHover ? "Awake" : "first"}>Z</span>
        <span className={isHover ? "Awake" : "second"}>z</span>
        <span className={isHover ? "Awake" : "third"}>z</span>
        <span className={isHover ? "Awake" : "fourth"}>.</span>
        <span className={isHover ? "Awake" : "fifth"}>.</span>
        <span className={isHover ? "Awake" : "sixth"}>.</span>
      </h1>
      <Kirb
        isHover={isHover}
        setIsHover={setIsHover}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        huh={huh}
        sound={sound}
        play={play}
        stop={stop}
      />
    </div>
  );
}

export default App;
