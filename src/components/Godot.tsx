import Script from "next/script";

declare global {
  var Engine: any;
}

const GODOT_CONFIG = {
  args: [],
  canvasResizePolicy: 2,
  executable: "godot/index",
  experimentalVK: false,
  focusCanvas: true,
  gdnativeLibs: [],
};

export default function Godot() {
  const onGodotLoad = () => {
    const engine = new window.Engine(GODOT_CONFIG);
    engine.startGame({
      'onProgress': function (current: string, total: string) {
        console.log('Loading... ' + current + ' / ' + total);
      },
    })
  };
  return (
    <>
      <Script
        type="text/javascript"
        src="godot/index.js"
        onLoad={onGodotLoad}
      />
      <canvas id="canvas" />
    </>
  );
}
