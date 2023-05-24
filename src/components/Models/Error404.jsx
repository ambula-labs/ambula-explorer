import { useGLTF, OrbitControls, useTexture } from "@react-three/drei";

export default function Error404()
{
    const { nodes } = useGLTF('./error404-Ambula.glb');
    const bakedTexture = useTexture('./bakedError404.jpg');
    bakedTexture.flipY = false;

    return <>
        {/* <OrbitControls makeDefault /> */}
        
        <mesh geometry={ nodes.baked.geometry } position-x={-4} position-z={1} position-y={1} scale={1.4}>
            <meshBasicMaterial map={ bakedTexture } />
        </mesh>
    </>
}



