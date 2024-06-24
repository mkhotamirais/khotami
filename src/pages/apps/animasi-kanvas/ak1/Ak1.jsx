import { useEffect, useRef, useState } from "react";

export default function Ak1() {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const animRef = useRef({ x: 0, y: 0, dx: 1, dy: 1, width: 30, height: 30 });
  const [animating, setAnimating] = useState(true);

  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let { x, y, dx, dy, width, height } = animRef.current;
    x += dx;
    y += dy;
    if (x + width > ctx.canvas.width || x < 0) {
      dx = -dx;
    }
    if (y + height > ctx.canvas.height || y < 0) {
      dy = -dy;
    }
    animRef.current = { x, y, dx, dy, width, height };
    ctx.fillRect(x, y, width, height);
    requestRef.current = requestAnimationFrame(() => draw(ctx));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (animating) {
      requestRef.current = requestAnimationFrame(() => draw(ctx));
    }
    // else {
    //   cancelAnimationFrame(requestRef.current);
    // }
    return () => cancelAnimationFrame(requestRef.current);
  }, [animating]);

  const toggleAnimating = () => {
    setAnimating((prev) => !prev);
    if (!animating) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      requestRef.current = requestAnimationFrame(() => draw(ctx));
    } else {
      cancelAnimationFrame(requestRef.current);
    }
  };
  return (
    <div>
      <canvas ref={canvasRef} width={100} height={100} className="border rounded"></canvas>
      <button
        onClick={toggleAnimating}
        className="border rounded-lg p-2 text-sm leading-none my-2 text-white bg-cyan-500"
      >
        {animating ? "skip" : "run"}
      </button>
    </div>
  );
}
