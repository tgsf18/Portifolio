import React, { useEffect, useRef } from 'react';

export const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Stardust & stars configuration
    const starCount = Math.min(Math.floor((width * height) / 9000), 160);
    interface Star {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      maxOpacity: number;
      fadeSpeed: number;
      blur: number;
      color: string;
    }

    const starColors = [
      'rgba(255, 255, 255,',
      'rgba(226, 232, 240,', // Slate 200
      'rgba(186, 230, 253,', // Sky 200
      'rgba(216, 180, 254,', // Purple 300
      'rgba(203, 213, 225,'  // Slate 300
    ];

    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.4,
      speedY: -(Math.random() * 0.18 + 0.04), // gentle upward float
      speedX: (Math.random() - 0.5) * 0.08,
      opacity: Math.random() * 0.7 + 0.2,
      maxOpacity: Math.random() * 0.6 + 0.4,
      fadeSpeed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
      blur: Math.random() > 0.7 ? Math.random() * 3 + 1 : 0, // stardust blur effect
      color: starColors[Math.floor(Math.random() * starColors.length)]
    }));

    // Shooting stars
    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      active: boolean;
    }

    const shootingStars: ShootingStar[] = [
      { x: 0, y: 0, length: 120, speed: 12, angle: Math.PI / 4, opacity: 0, active: false },
      { x: 0, y: 0, length: 90, speed: 10, angle: Math.PI / 4, opacity: 0, active: false }
    ];

    const triggerShootingStar = (s: ShootingStar) => {
      s.x = Math.random() * (width * 0.8);
      s.y = Math.random() * (height * 0.4);
      s.opacity = 1;
      s.speed = Math.random() * 6 + 10;
      s.length = Math.random() * 60 + 80;
      s.active = true;
    };

    let shootingTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render drifting stars & blurred stardust particles
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Animate drift
        s.y += s.speedY;
        s.x += s.speedX;

        // Wrap around boundaries
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;

        // Twinkle effect
        s.opacity += s.fadeSpeed;
        if (s.opacity > s.maxOpacity || s.opacity < 0.15) {
          s.fadeSpeed = -s.fadeSpeed;
        }

        ctx.beginPath();
        if (s.blur > 0) {
          ctx.shadowBlur = s.blur * 2;
          ctx.shadowColor = s.color + '0.8)';
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${s.opacity})`;
        ctx.fill();
      }

      // Reset shadow for performance
      ctx.shadowBlur = 0;

      // Handle shooting stars
      shootingTimer++;
      if (shootingTimer > 280) {
        shootingTimer = 0;
        const star = shootingStars.find(s => !s.active);
        if (star) triggerShootingStar(star);
      }

      for (let i = 0; i < shootingStars.length; i++) {
        const s = shootingStars[i];
        if (!s.active) continue;

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.015;

        if (s.opacity <= 0 || s.x > width || s.y > height) {
          s.active = false;
          continue;
        }

        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        grad.addColorStop(1, `rgba(255, 255, 255, ${s.opacity * 0.9})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      {/* Absolute space background base */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* Cosmic Nebula Glow 1: Deep blue & cyan halo */}
      <div 
        className="absolute -top-[20%] left-[15%] w-[60vw] h-[60vw] rounded-full opacity-35 mix-blend-screen filter blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(99, 102, 241, 0.08) 45%, rgba(0, 0, 0, 0) 75%)'
        }}
      />

      {/* Cosmic Nebula Glow 2: Purple & silver starlight cloud */}
      <div 
        className="absolute top-[45%] -right-[10%] w-[55vw] h-[55vw] rounded-full opacity-25 mix-blend-screen filter blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(203, 213, 225, 0.06) 50%, rgba(0, 0, 0, 0) 80%)'
        }}
      />

      {/* Cosmic Nebula Glow 3: Center deep metallic flare */}
      <div 
        className="absolute bottom-[-10%] left-[25%] w-[50vw] h-[50vw] rounded-full opacity-20 filter blur-[150px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(148, 163, 184, 0.05) 50%, rgba(0, 0, 0, 0) 75%)'
        }}
      />

      {/* Subtle fine cosmic star grid texture */}
      <div className="absolute inset-0 space-stars opacity-40" />

      {/* Canvas for dynamic floating stardust and twinkling space debris */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Vignette effect for deep contrast focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />
    </div>
  );
};
