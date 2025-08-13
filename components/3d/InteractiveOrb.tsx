import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveOrbProps {
  position: [number, number, number];
  color?: string;
}

export const InteractiveOrb = ({ position, color = '#8b5cf6' }: InteractiveOrbProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { mouse, viewport } = useThree();
  
  const targetPosition = useRef(new THREE.Vector3(...position));
  const currentPosition = useRef(new THREE.Vector3(...position));

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Mouse interaction
      const mouseInfluence = 0.5;
      targetPosition.current.x = position[0] + (mouse.x * viewport.width * mouseInfluence) / 10;
      targetPosition.current.y = position[1] + (mouse.y * viewport.height * mouseInfluence) / 10;
      
      // Smooth movement
      currentPosition.current.lerp(targetPosition.current, 0.05);
      meshRef.current.position.copy(currentPosition.current);
      
      // Floating animation
      meshRef.current.position.y += Math.sin(time * 2) * 0.1;
      
      // Rotation
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.3;
      meshRef.current.rotation.y = time * 0.3;
      
      // Scale based on interaction
      const targetScale = hovered ? 1.2 : clicked ? 0.8 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Sphere
      ref={meshRef}
      args={[0.5, 32, 32]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerDown={() => setClicked(true)}
      onPointerUp={() => setClicked(false)}
    >
      <meshStandardMaterial
        color={color}
        transparent
        opacity={hovered ? 0.9 : 0.7}
        emissive={color}
        emissiveIntensity={hovered ? 0.3 : 0.1}
        wireframe={clicked}
      />
    </Sphere>
  );
};