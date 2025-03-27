import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './components/Model';

const HomePage = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <Model />
      </Canvas>
    </div>
  );
};

export default HomePage;
