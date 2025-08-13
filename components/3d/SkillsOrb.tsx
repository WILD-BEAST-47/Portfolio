import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

interface SkillsOrbProps {
  position: [number, number, number];
  skill: string;
  level: number;
  color: string;
}

export const SkillsOrb = ({ position, skill, level, color }: SkillsOrbProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(time * 2 + position[0]) * 0.2;
      
      // Rotation
      meshRef.current.rotation.y = time * 0.5;
      
      // Scale based on skill level and hover
      const baseScale = (level / 100) * 0.8 + 0.2;
      const targetScale = hovered ? baseScale * 1.2 : baseScale;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group>
      <Sphere
        ref={meshRef}
        position={position}
        args={[0.5, 32, 32]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={hovered ? 0.9 : 0.7}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </Sphere>
      
      {hovered && (
        <Text
          position={[position[0], position[1] + 1, position[2]]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {skill} - {level}%
        </Text>
      )}
    </group>
  );
};