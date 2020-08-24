import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
body {
    font-family: sans-serif;
    margin: 0;
    background: rgb(140, 140, 255);
}

html,
body,
#root {
    width: 100%;
    height: 100%;
}

a {
    text-decoration: none;
    color: white;
    font-weight: bold;

    :hover {
        color: black;
    }
}
`;
