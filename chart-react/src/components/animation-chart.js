import { keyframes } from "styled-components";

export const showFromDown = keyframes`
0%{
    transform: translateY(20px);
    opacity: 0;
}

100%{
    transform: translateY(0px);
    opacity: 1;
}
`;

export const charge = value => keyframes`
0%{
    width: 0;
    background-color: green;
}

100%{
    background-color: greenyellow;
    width: ${value}%;
}
`;