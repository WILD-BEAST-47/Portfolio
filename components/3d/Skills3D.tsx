import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { SkillsOrb } from './SkillsOrb';

export const Skills3D = () => {
  const skills = [
    { name: "Figma", level: 95, color: "#6366f1", position: [-2, 0, 0] as [number, number, number] },
    { name: "UI Design", level: 95, color: "#8b5cf6", position: [0, 1, -1] as [number, number, number] },
    { name: "Prototyping", level: 90, color: "#06b6d4", position: [2, 0, 0] as [number, number, number] },
    { name: "HTML/CSS", level: 88, color: "#f59e0b", position: [-1, -1, 1] as [number, number, number] },
    { name: "JavaScript", level: 80, color: "#ef4444", position: [1, -1, -1] as [number, number, number] },
    { name: "AWS Cloud", level: 85, color: "#10b981", position: [0, 0, 1] as [number, number, number] },
  ];

  return (
    <div className="h-96 w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        
        {/* Environment */}
        <Environment preset="studio" />
        
        {/* Skills Orbs */}
        {skills.map((skill, index) => (
          <SkillsOrb
            key={index}
            position={skill.position}
            skill={skill.name}
            level={skill.level}
            color={skill.color}
          />
        ))}
        
        {/* Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={1}
          maxDistance={8}
          minDistance={3}
        />
      </Canvas>
    </div>
  );
};