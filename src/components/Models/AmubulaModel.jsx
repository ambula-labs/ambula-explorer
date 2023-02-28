import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF, OrbitControls, useTexture } from "@react-three/drei";

export default function AmbulaModel()
{
   // const modelRef = useRef(null);
    const { nodes } = useGLTF('./AmbulaModel/ambulaModel.glb');
    const bakedTexture = useTexture('./AmbulaModel/bakedAmbulaModel.jpg');
    bakedTexture.flipY = false;

    console.log(nodes);

    // useFrame(() => {
    //     modelRef.current.rotation.y += 0.01
    // });

    return <group dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base.geometry}
            scale={[0.27, 0.13, 0.27]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ambula.geometry}
            position={[0, 0.32, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.29}
        />
    </group>
}

useGLTF.preload("./AmbulaModel/ambulaModel.glb");

