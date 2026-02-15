'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh } from 'three';
import { Float, Environment, ContactShadows } from '@react-three/drei';

function Card() {
    const meshRef = useRef<Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        meshRef.current.rotation.y += delta * 0.2;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 1.1 : 1}
            >
                {/* Main Card Body */}
                <boxGeometry args={[3, 4, 0.2]} />
                <meshStandardMaterial
                    color={hovered ? '#4f46e5' : '#4338ca'} // Indigo colors
                    roughness={0.3}
                    metalness={0.8}
                />

                <mesh position={[0, 0, 0.11]}>
                    <planeGeometry args={[2.6, 3.6]} />
                    <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.1} />
                </mesh>

                <mesh position={[0, 0, 0.12]}>
                    <planeGeometry args={[2.5, 3.5]} />
                    <meshStandardMaterial color="#1e1b4b" />
                </mesh>

            </mesh>
        </Float>
    );
}

const Hero3D = () => {
    return (
        <div className="w-full h-[500px] md:h-[600px] flex justify-center items-center">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, -10, -10]} intensity={0.5} />

                <Card />

                <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4.5} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default Hero3D;
