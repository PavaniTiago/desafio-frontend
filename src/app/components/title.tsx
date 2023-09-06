import { styled } from "styled-components";

export const Title = styled.h1<{ $fontSize?: string}>`
    font-size: ${props => props.$fontSize || "3em"};
    color: #fefefe;
    font-weight: semibold;
    text-align: start;
    
    @media screen and (max-width:768px){
        padding: 0 40px;
    }
`;