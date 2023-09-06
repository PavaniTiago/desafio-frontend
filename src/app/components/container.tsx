import { styled } from "styled-components";

export const Container = styled.div<{$align?: string, $justify?: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.$justify || 'start'};
    width: 100vw;
    height: 100vh;

    @media screen and (max-width: 768px){
        align-items: ${props => props.$align || 'center'};
    }
`;