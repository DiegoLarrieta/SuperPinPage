import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./ModelViewer.css"; // Archivo CSS para los estilos

const ModelViewer: React.FC<{ modelPath: string }> = ({ modelPath }) => {
  const Model = () => {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={0.5} />;
  };

  return (
    <div className="model-viewer">
      <Canvas style={{ position: 'relative', width: '100%', height: '100%' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;