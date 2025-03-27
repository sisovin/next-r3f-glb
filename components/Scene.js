import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import Lights from './Lights';
import Controls from './Controls';

const Scene = () => {
  return (
    <Canvas>
      <Lights />
      <Model />
      <Controls />
    </Canvas>
  );
};

export default Scene;
