import { styled } from 'styled-components'
import { Title } from './title'
import { ArrowDownIcon, ArrowUpIcon, CloseIcon } from './icons'

const WeatherContainer = styled.div`
  width: 30em;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100vw;
    box-shadow: 0px 54px 38px -64px rgba(0, 0, 0, 0.71);
  }
`

const Location = styled.h2`
  font-size: 1.2em;
  font-weight: semibold;
  color: #515151;
  padding-right: 7em;
  padding-left: 2.5em;
`

const SubContainer = styled.div<{
  $justifyContent?: string
  $padding?: string
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$justifyContent || 'center'};
  width: 35vw;
  background-color: #fff3e4;
  padding: ${(props) => props.$padding || '0'};

  button {
    border: none;
    background-color: transparent;
    :hover {
      cursor: pointer;
    }
  }

  span {
    color: #515151;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`

interface WeatherDetailsProps {
  cityName: string
  stateAcronym: string
  countryName: string
  weatherCelcius: number
  maxtempC: number
  mintempC: number
  feelslikeC: number
  windKph: number
  avghumidity: number
  weatherDay: string
}

function WeatherDetails({
  cityName,
  avghumidity,
  countryName,
  feelslikeC,
  maxtempC,
  mintempC,
  stateAcronym,
  weatherCelcius,
  windKph,
  weatherDay,
}: WeatherDetailsProps) {
  return (
    <WeatherContainer>
      <SubContainer $justifyContent="space-around">
        <Location>
          {cityName}, {stateAcronym} - {countryName}
        </Location>
        <CloseIcon />
      </SubContainer>

      <SubContainer $justifyContent="space-evenly">
        <Title
          $margin="0"
          $padding="0 0 0 1.5em"
          $color="#515151"
          $fontSize="2.5em"
        >
          {weatherCelcius}°C
        </Title>
        <Title
          $margin="0"
          $padding="0 3em 0 10px"
          $color="#515151"
          $fontSize="2.5em"
        >
          {weatherDay}
        </Title>
      </SubContainer>

      <SubContainer $padding="5px 0 1em 0">
        <SubContainer>
          <ArrowDownIcon />
          <Title $padding="0 1em 0 5px" $color="#515151" $fontSize="1em">
            {mintempC}°
          </Title>
          <ArrowUpIcon />
          <Title $padding="0 0 0 5px" $color="#515151" $fontSize="1em">
            {maxtempC}°
          </Title>
        </SubContainer>
        <SubContainer $justifyContent="start">
          <span>
            Sensação <strong>{feelslikeC}°</strong>
          </span>
        </SubContainer>
      </SubContainer>

      <SubContainer $padding="0 0 1em 0">
        <SubContainer>
          <span>
            Vento <strong>{windKph}km/h</strong>
          </span>
        </SubContainer>
        <SubContainer $justifyContent="start">
          <span>
            Humidade <strong>{avghumidity}%</strong>
          </span>
        </SubContainer>
      </SubContainer>
    </WeatherContainer>
  )
}

export default WeatherDetails
