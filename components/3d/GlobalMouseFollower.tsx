import { useRef, useEffect, useState } from 'react';

export const GlobalMouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div 
      ref={followerRef}
      className="fixed pointer-events-none z-50"
      style={{ 
        cursor: 'none',
        left: mousePosition.x - 20,
        top: mousePosition.y - 20,
        width: '40px',
        height: '40px',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease',
        zIndex: 9999
      }}
    >
      {/* Main cursor circle */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
        style={{
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.3)',
          animation: 'pulse 2s ease-in-out infinite alternate'
        }}
      />
      
      {/* Inner glow */}
      <div 
        className="absolute inset-2 rounded-full bg-white opacity-30"
        style={{
          filter: 'blur(1px)'
        }}
      />
      
      {/* Outer ring */}
      <div 
        className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-60"
        style={{
          animation: 'spin 3s linear infinite'
        }}
      />
    </div>
  );
};
