import { Container } from "./container";
import { InputContainerWIcon } from "./inputContainerWIcon";
import { Separator } from "./separator";
import { Title } from "./title";

export default function Header() {
  return (
    <Container>
      <Title>Previsão do Tempo</Title>
      <InputContainerWIcon placeholder="Insira aqui o nome da cidade"/>
      <Separator />
    </Container>
  )
}
