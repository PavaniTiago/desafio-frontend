import { styled } from 'styled-components'
import { MinFahrenheit } from './minFahrenheit'
import { MaxFahreinheit } from './maxFahrenheit'
import { StateCapitals } from './stateCapitals'

const CapitalWrapperDiv = styled.div<{ $justify?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;

  @media screen and (max-width: 768px) {
    padding: 0 40px;
    justify-content: ${(props) => props.$justify};
  }
`

interface CapitalWrapperProps {
  min: number
  max: number
  capitalName: string
}

export function CapitalWrapper({ min, max, capitalName }: CapitalWrapperProps) {
  return (
    <CapitalWrapperDiv $justify="start">
      <MinFahrenheit>{min}°</MinFahrenheit>
      <MaxFahreinheit>{max}°</MaxFahreinheit>
      <StateCapitals>{capitalName}</StateCapitals>
    </CapitalWrapperDiv>
  )
}
