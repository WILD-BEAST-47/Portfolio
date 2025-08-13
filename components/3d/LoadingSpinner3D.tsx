import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

export const LoadingSpinner3D = () => {
  const torusRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 2;
      torusRef.current.rotation.y = state.clock.getElapsedTime() * 1.5;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = -state.clock.getElapsedTime() * 1.5;
      boxRef.current.rotation.z = state.clock.getElapsedTime() * 1;
    }
  });

  return (
    <group>
      <Torus ref={torusRef} args={[1, 0.3, 16, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#6366f1"
          transparent
          opacity={0.8}
          emissive="#6366f1"
          emissiveIntensity={0.2}
        />
      </Torus>
      
      <Box ref={boxRef} args={[0.8, 0.8, 0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#8b5cf6"
          transparent
          opacity={0.6}
          wireframe
        />
      </Box>
    </group>
  );
};