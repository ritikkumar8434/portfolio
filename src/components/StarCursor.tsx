import React, { useEffect, useRef } from 'react';

const StarCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<any[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const addStar = (x: number, y: number) => {
      const star = {
        x,
        y,
        size: Math.random() * 3 + 1,
        opacity: 1,
        decay: 0.02,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 2 + 1,
      };
      starsRef.current.push(star);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current = starsRef.current.filter(star => {
        star.opacity -= star.decay;
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.size *= 0.98;

        if (star.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = star.opacity;
          ctx.fillStyle = '#3B82F6';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#3B82F6';
          
          // Draw star shape
          ctx.beginPath();
          const spikes = 5;
          const outerRadius = star.size;
          const innerRadius = outerRadius * 0.5;
          
          for (let i = 0; i < spikes * 2; i++) {
            const angle = (i * Math.PI) / spikes;
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const x = star.x + Math.cos(angle) * radius;
            const y = star.y + Math.sin(angle) * radius;
            
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          
          ctx.closePath();
          ctx.fill();
          ctx.restore();
          
          return true;
        }
        return false;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() < 0.3) {
        addStar(e.clientX, e.clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};

export default StarCursor;