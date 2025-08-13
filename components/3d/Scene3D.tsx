import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { FloatingGeometry } from './FloatingGeometry';
import { InteractiveOrb } from './InteractiveOrb';
import { ParticleField } from './ParticleField';

interface Scene3DProps {
  enableControls?: boolean;
  children?: React.ReactNode;
}

export const Scene3D = ({ enableControls = false, children }: Scene3DProps) => {
  return (
    <Canvas style={{ background: 'transparent' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      
      {/* Environment */}
      <Environment preset="city" />
      
      {/* 3D Objects */}
      <FloatingGeometry position={[-3, 2, 0]} shape="sphere" color="#6366f1" speed={0.8} />
      <FloatingGeometry position={[3, -1, -2]} shape="box" color="#8b5cf6" speed={1.2} />
      <FloatingGeometry position={[0, 3, -1]} shape="torus" color="#06b6d4" speed={0.6} />
      
      <InteractiveOrb position={[2, 1, 1]} color="#f59e0b" />
      <InteractiveOrb position={[-2, -2, 0]} color="#ef4444" />
      
      <ParticleField />
      
      {children}
      
      {/* Controls */}
      {enableControls && (
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
      )}
    </Canvas>
  );
};