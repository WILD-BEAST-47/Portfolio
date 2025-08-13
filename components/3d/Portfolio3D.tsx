import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';
import * as THREE from 'three';

interface Portfolio3DProps {
  projects: Array<{
    title: string;
    position: [number, number, number];
    color: string;
  }>;
}

export const Portfolio3D = ({ projects }: Portfolio3DProps) => {
  return (
    <group>
      {projects.map((project, index) => (
        <ProjectCard 
          key={index}
          title={project.title}
          position={project.position}
          color={project.color}
          delay={index * 0.2}
        />
      ))}
    </group>
  );
};

interface ProjectCardProps {
  title: string;
  position: [number, number, number];
  color: string;
  delay: number;
}

const ProjectCard = ({ title, position, color, delay }: ProjectCardProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() + delay;
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(time * 1.5) * 0.1;
      
      // Gentle rotation
      meshRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.cos(time * 0.3) * 0.05;
    }
  });

  return (
    <group>
      <Box
        ref={meshRef}
        position={position}
        args={[1.5, 0.1, 1]}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </Box>
      
      <Text
        position={[position[0], position[1] + 0.3, position[2]]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.2}
      >
        {title}
      </Text>
    </group>
  );
};