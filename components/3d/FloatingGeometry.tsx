import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  scale?: number;
  color?: string;
  shape?: 'sphere' | 'box' | 'torus';
  speed?: number;
}

export const FloatingGeometry = ({ 
  position, 
  scale = 1, 
  color = '#6366f1', 
  shape = 'sphere',
  speed = 1 
}: FloatingGeometryProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const startTime = useRef(Math.random() * Math.PI * 2);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() * speed + startTime.current;
      
      // Floating motion
      meshRef.current.position.y = position[1] + Math.sin(time) * 0.5;
      
      // Rotation
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.3;
      meshRef.current.rotation.y = time * 0.5;
      meshRef.current.rotation.z = Math.cos(time * 0.3) * 0.2;
    }
  });

  const renderShape = () => {
    const material = (
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.8}
        emissive={color}
        emissiveIntensity={0.2}
      />
    );

    switch (shape) {
      case 'box':
        return (
          <Box ref={meshRef} position={position} scale={scale} args={[1, 1, 1]}>
            {material}
          </Box>
        );
      case 'torus':
        return (
          <Torus ref={meshRef} position={position} scale={scale} args={[0.8, 0.3, 16, 32]}>
            {material}
          </Torus>
        );
      default:
        return (
          <Sphere ref={meshRef} position={position} scale={scale} args={[0.8, 32, 32]}>
            {material}
          </Sphere>
        );
    }
  };

  return renderShape();
};