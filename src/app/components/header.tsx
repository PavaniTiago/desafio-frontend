import { InputContainerWIcon } from './inputContainerWIcon'
import { Separator } from './separator'
import { Title } from './title'
import WeatherDetails from './weatherDetails'

export default function Header() {
  return (
    <>
      <Title>Previsão do Tempo</Title>
      <WeatherDetails
        avghumidity={12}
        cityName="Salto"
        countryName="Brasil"
        feelslikeC={20}
        maxtempC={22}
        mintempC={10}
        stateAcronym="Sp"
        weatherCelcius={20}
        weatherDay="Nublado"
        windKph={32}
      />
      <InputContainerWIcon placeholder="Insira aqui o nome da cidade" />
      <Separator />
    </>
  )
}
