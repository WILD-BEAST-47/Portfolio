import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { FloatingGeometry } from './FloatingGeometry';
import { ParticleField } from './ParticleField';

export const HeroBackground3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas style={{ background: 'transparent' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#8b5cf6" />
        
        {/* Environment */}
        <Environment preset="night" />
        
        {/* Floating Geometries */}
        <FloatingGeometry 
          position={[-4, 2, -3]} 
          shape="sphere" 
          color="#6366f1" 
          speed={0.5} 
          scale={0.8}
        />
        <FloatingGeometry 
          position={[4, -1, -2]} 
          shape="box" 
          color="#8b5cf6" 
          speed={0.7} 
          scale={0.6}
        />
        <FloatingGeometry 
          position={[0, 3, -4]} 
          shape="torus" 
          color="#06b6d4" 
          speed={0.4} 
          scale={0.5}
        />
        <FloatingGeometry 
          position={[-2, -2, -1]} 
          shape="sphere" 
          color="#f59e0b" 
          speed={0.8} 
          scale={0.4}
        />
        <FloatingGeometry 
          position={[3, 2, -5]} 
          shape="box" 
          color="#ef4444" 
          speed={0.6} 
          scale={0.7}
        />
        
        {/* Particle Field */}
        <ParticleField />
        
        {/* Auto-rotating controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};