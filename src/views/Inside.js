import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Canvas } from 'react-three-fiber';
import { Vector3 } from 'three';
import styled from 'styled-components';

import ViewLayer from '../components/ViewLayer';
import Controls from '../components/Controls';
import Block from '../components/Block';
import Pointer from '../components/Pointer';

// For readability
const Wall = Block;
const Pedestal = Block;

export default () => {
    const size1 = 120;
    const size2 = 120;
    const bottom = -27;
    return (
        <ViewLayer backgroundColor="rgb(140, 140, 255)" zIndex={600}>
            <Route
                exact
                path="/inside"
                render={() => <BackLink to="/">Back</BackLink>}
            />
            <Canvas
                shadowMap
                camera={{
                    position: new Vector3(-35, bottom + 22, 0)
                }}
            >
                <ambientLight intensity={0.5} />
                <hemisphereLight
                    color="rgb(100, 100, 100)"
                    intensity={0.5}
                    position={[10, 5, 0]}
                />
                <Wall
                    color="rgb(0, 168, 224)"
                    x={-size1}
                    y={0}
                    z={0}
                    length={size2}
                    width={size1 / 2}
                />
                <Wall
                    color="rgb(0, 168, 224)"
                    x={size1}
                    y={0}
                    z={0}
                    length={size2}
                    width={size1 / 2}
                />
                <Wall
                    color="rgb(0, 168, 224)"
                    x={0}
                    y={size1 / 4}
                    z={0}
                    length={size2}
                    depth={size1 * 2}
                />
                <Wall
                    color="rgb(0, 168, 224)"
                    x={0}
                    y={-size1 / 4}
                    z={0}
                    length={size2}
                    depth={size1 * 2}
                />
                <Wall
                    color="rgb(0, 168, 224)"
                    x={0}
                    y={0}
                    z={size2 / 2}
                    depth={size1 * 2}
                    width={size1 / 2}
                />
                <Wall
                    color="rgb(0, 168, 224)"
                    x={0}
                    y={0}
                    z={-size2 / 2}
                    depth={size1 * 2}
                    width={size1 / 2}
                />
                <Pointer to="/inside/pin1" x={23} y={bottom} z={-18} />
                <Pointer to="/inside/pin2" x={40} y={bottom} z={5} />
                <Pedestal
                    color="rgb(50, 50, 50)"
                    x={30}
                    y={bottom}
                    z={-10}
                    depth={5}
                    width={5}
                    length={5}
                />
                <Pedestal
                    color="rgb(50, 50, 50)"
                    x={35}
                    y={bottom}
                    z={0}
                    depth={5}
                    width={5}
                    length={5}
                />
                <Pedestal
                    color="rgb(50, 50, 50)"
                    x={30}
                    y={bottom}
                    z={10}
                    depth={5}
                    width={5}
                    length={5}
                />
                <Controls enableZoom={true} />
            </Canvas>
        </ViewLayer>
    );
};

const BackLink = styled(Link)`
    padding: 2rem;
    position: absolute;
    z-index: 610;
`;
