import world from "@/assets/pixel-world.png.asset.json";
import runner from "@/assets/pixel-runner.png.asset.json";
import robot from "@/assets/pixel-robot.png.asset.json";
import camera from "@/assets/pixel-camera.png.asset.json";
import coins from "@/assets/pixel-coins.png.asset.json";

export function PixelWorld() {
  return (
    <div className="pixel-world" role="img" aria-label="A retro Hyderabad arcade world with Charminar, a sunset skyline, floating platforms, a running player, coins and filmmaking characters">
      <img className="world-layer" src={world.url} alt="" width={942} height={846} />
      <img className="sprite sprite-runner" src={runner.url} alt="" />
      <img className="sprite sprite-robot" src={robot.url} alt="" />
      <img className="sprite sprite-camera" src={camera.url} alt="" />
      <img className="sprite sprite-coins" src={coins.url} alt="" />
    </div>
  );
}