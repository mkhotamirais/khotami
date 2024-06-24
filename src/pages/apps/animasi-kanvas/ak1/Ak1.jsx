import { useEffect, useRef } from "react";

export default function Ak1() {
  const ak1Ref = useRef();
  useEffect(() => {
    const canvas = ak1Ref.current;
    const ctx = canvas.getContext("2d");

    let x = 50;
    let y = 50;
    let dx = 1;
    let dy = 1;
    const width = 20;
    const height = 20;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      x += dx;
      y += dy;

      if (x + width > canvas.width || x < 0) {
        dx = -dx;
      }
      if (y + height > canvas.height || y < 0) {
        dy = -dy;
      }

      ctx.fillStyle = "cyan";
      ctx.fillRect(x, y, width, height);

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => cancelAnimationFrame(animate);
  }, []);
  return <canvas ref={ak1Ref} width={100} height={100} className="border rounded"></canvas>;
}
