import world from "@/assets/pixel-world.png";
import runner from "@/assets/pixel-runner.png";
import robot from "@/assets/pixel-robot.png";
import camera from "@/assets/pixel-camera.png";
import coins from "@/assets/pixel-coins.png";

export function PixelWorld() {
  return (
    <div className="pixel-world" role="img" aria-label="A retro Hyderabad arcade world with Charminar, a sunset skyline, floating platforms, a running player, coins and filmmaking characters">
      <img className="world-layer" src={world} alt="" width={942} height={846} />
      <img className="sprite sprite-runner" src={runner} alt="" />
      <img className="sprite sprite-robot" src={robot} alt="" />
      <img className="sprite sprite-camera" src={camera} alt="" />
      <img className="sprite sprite-coins" src={coins} alt="" />
    </div>
  );
}