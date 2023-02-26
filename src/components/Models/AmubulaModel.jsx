import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function AmbulaModel()
{
    const modelRef = useRef(null);
    const model = useGLTF('./ambula.glb')

    useFrame(() => {
        modelRef.current.rotation.y += 0.01
    });

    return <primitive ref={modelRef}  object={ model.scene } scale={6} position-y={-2} />
}