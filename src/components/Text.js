import React, { Suspense, forwardRef, useMemo } from 'react';
import { useLoader, useUpdate } from 'react-three-fiber';
import * as THREE from 'three';

const Text = forwardRef(
    (
        {
            children,
            vAlign = 'center',
            hAlign = 'center',
            size = 1,
            color = '#000000',
            ...props
        },
        ref
    ) => {
        const font = useLoader(
            THREE.FontLoader,
            'https://raw.githubusercontent.com/yvesgurcan/3d-menu-alt/master/public/font.json'
        );
        const config = useMemo(() => ({ font, size: 5, height: 1 }), [font]);
        const mesh = useUpdate(
            self => {
                const size = new THREE.Vector3();
                self.geometry.computeBoundingBox();
                self.geometry.boundingBox.getSize(size);
                self.position.x =
                    hAlign === 'center'
                        ? -size.x / 2
                        : hAlign === 'right'
                        ? 0
                        : -size.x;
                self.position.y =
                    vAlign === 'center'
                        ? -size.y / 2
                        : vAlign === 'top'
                        ? 0
                        : -size.y;
            },
            [children]
        );
        return (
            <group ref={ref} {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
                <mesh ref={mesh} position={[0, 0, 7]}>
                    <textGeometry attach="geometry" args={[children, config]} />
                    <meshStandardMaterial attach="material" />
                </mesh>
            </group>
        );
    }
);

export default props => (
    <Suspense fallback={null}>
        <Text {...props} />
    </Suspense>
);
