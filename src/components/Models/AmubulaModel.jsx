import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import {
	useGLTF,
	OrbitControls,
	useTexture,
	GradientTexture,
} from "@react-three/drei";

export default function AmbulaModel() {
	const ambulaRef = useRef();

	useFrame((state) => {
		ambulaRef.current.rotation.z += 0.01;
		ambulaRef.current.position.y =
			Math.sin(state.clock.getElapsedTime()) * 0.5 + 0.5;
	});

	// const modelRef = useRef(null);
	const { nodes } = useGLTF("./AmbulaModel/ambulaModel.glb");
	const bakedTexture = useTexture("./AmbulaModel/bakedAmbulaModel.jpg");
	bakedTexture.flipY = false;

	console.log(nodes);

	// useFrame(() => {
	//     modelRef.current.rotation.y += 0.01
	// });

	return (
		<group dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Base.geometry}
				position={[1, -2, 0]}
				scale={2}
			>
				<meshBasicMaterial map={bakedTexture} />
			</mesh>
			<mesh
				ref={ambulaRef}
				castShadow
				receiveShadow
				geometry={nodes.Ambula.geometry}
				rotation={[Math.PI / 2, 0, 0]}
				position={[1, 0.5, 0]}
				scale={7}
			>
				<meshBasicMaterial map={bakedTexture} />
			</mesh>
		</group>
	);
}

useGLTF.preload("./AmbulaModel/ambulaModel.glb");