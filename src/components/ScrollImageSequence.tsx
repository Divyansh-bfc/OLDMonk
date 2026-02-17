'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const frameCount = 240;

const ScrollImageSequence = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises: Promise<void>[] = [];

      for (let i = 1; i <= frameCount; i++) {
        const promise = new Promise<void>((resolve) => {
          const img = new Image();
          img.src = `/frames/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
          img.onload = () => {
            loadedImages[i - 1] = img;
            resolve();
          };
        });
        promises.push(promise);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setLoaded(true);
    };

    loadImages();
  }, []);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Maintain aspect ratio and cover the screen
    const img = images[index];
    
    // Set canvas dimensions to window size for high DPI
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    
    ctx.scale(dpr, dpr);
    
    // Calculate scaling to cover
    const scale = Math.max(
      window.innerWidth / img.width,
      window.innerHeight / img.height
    );
    
    const w = img.width * scale;
    const h = img.height * scale;
    const x = (window.innerWidth - w) / 2;
    const y = (window.innerHeight - h) / 2;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.drawImage(img, x, y, w, h);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!loaded || images.length === 0) return;
    
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(latest * frameCount)
    );
    
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  // Initial render when loaded
  useEffect(() => {
    if (loaded) {
      renderFrame(0);
    }
  }, [loaded]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
        if (loaded) {
             // Re-render current frame based on scroll
             const currentScroll = window.scrollY;
             const maxScroll = document.body.scrollHeight - window.innerHeight;
             const progress = maxScroll > 0 ? currentScroll / maxScroll : 0;
             const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(progress * frameCount)
              );
             renderFrame(frameIndex);
        }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [loaded]);


  return (
    <div className="fixed inset-0 z-0 bg-black">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-amber-500 font-serif text-2xl z-50 bg-black">
          Loading Setup...
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block"
      />
    </div>
  );
};

export default ScrollImageSequence;
