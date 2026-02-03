import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

const AnimatedShape = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Gentle floating rotation
        meshRef.current.rotation.x = t * 0.2;
        meshRef.current.rotation.y = t * 0.3;

        // Mouse interaction (subtle follow)
        const mouseX = state.mouse.x * 0.5;
        const mouseY = state.mouse.y * 0.5;
        meshRef.current.rotation.x += mouseY * 0.1;
        meshRef.current.rotation.y += mouseX * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} scale={2.2}>
                {/* Abstract distorted sphere */}
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color="#8b5cf6" // Violet-500
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
};

const Hero3D = () => {
    return (
        <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center relative cursor-move">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[2, 1, 1]} />
                <AnimatedShape />
            </Canvas>
        </div>
    );
};

export default Hero3D;
