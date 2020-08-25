import React from 'react';
import Text from './Text';

export default ({
    text = '',
    to = '/inside',
    x = 0,
    y = 0,
    z = 0,
    color = 'rgb(230, 230, 230)',
    textRotation = [Math.PI / 2, 0, 0],
    textOffset = [0, 0, 0],
    ...props
}) => {
    return (
        <mesh position={[0 + x, 0 + y, 0 + z]} {...props}>
            <boxBufferGeometry attach="geometry" args={[0.025, 0.025, 1]} />{' '}
            <Text
                onClick={() => window.appHistory.push(to)}
                onPointerUp={() => window.appHistory.push(to)}
                rotation={textRotation}
                offset={textOffset}
            >
                {text}
            </Text>
            <meshStandardMaterial
                attach="material"
                color={color}
                roughness={0.5}
            />
        </mesh>
    );
};
