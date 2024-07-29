import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import * as THREE from 'three';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as fiber from '@react-three/fiber';
import * as drei from '@react-three/drei';
import * as reactSpring from '@react-spring/three';

const App = () => {
  return React.createElement(ShaderGradientCanvas, {
    importedFiber: { ...fiber, ...drei, ...reactSpring },
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
    }
  }, 
  React.createElement(ShaderGradient, {
    control: 'query',
    urlString: 'https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ffffff&color2=%23FFA500&color3=%23d0bce1&embedMode=off&envPreset=city&fov=45&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=0&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false&zoomOut=false'
  })
  );
};

ReactDOM.render(React.createElement(App), document.body);