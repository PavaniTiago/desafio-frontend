import { styled } from 'styled-components'

export const Title = styled.h1<{
  $fontSize?: string
  $color?: string
  $padding?: string
  $margin?: string
}>`
  font-size: ${(props) => props.$fontSize || '3em'};
  color: ${(props) => props.$color || '#fefefe'};
  font-weight: bold;
  text-align: start;
  padding: ${(props) => props.$padding || '0 40px'};
  margin: ${(props) => props.$margin};

  @media screen and (max-width: 768px) {
  }
`
