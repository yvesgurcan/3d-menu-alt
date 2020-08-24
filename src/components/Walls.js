import React from 'react';

export default ({ to = '/', y = 0, z = 0, color = 'moccasin', ...props }) => {
    return (
        <mesh
            onClick={() => window.appHistory.push(to)}
            onPointerUp={() => window.appHistory.push(to)}
            position={[0, 0.5 + y, 0 + z]}
            {...props}
        >
            <boxBufferGeometry attach="geometry" args={[2, 1, 2]} />
            <meshStandardMaterial
                attach="material"
                color={color}
                roughness={0.5}
            />
        </mesh>
    );
};
