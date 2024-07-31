import { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.height = document.documentElement.scrollHeight - 200;
    canvas.width = document.documentElement.scrollWidth;

    const ctx = canvas.getContext('2d');
    const stars = 1000;

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random();

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      }
    };

    const handleResize = () => {
      canvas.width = document.documentElement.scrollWidth;
      canvas.height = document.documentElement.scrollHeight - 200;
      drawStars();
    };

    window.addEventListener('resize', handleResize);
    drawStars();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      />
    </>
  );
};

export default StarryBackground;