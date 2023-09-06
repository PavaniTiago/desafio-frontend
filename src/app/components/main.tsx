import { CapitalWrapper } from "./capitalWrapper";
import { Container } from "./container";
import { Title } from "./title";

export default function Main(){
    return (
        <Container $align="start" $justify="start">
            <Title $fontSize="2em">Capitais</Title>
            <CapitalWrapper max={23} min={16} capitalName="Rio de Janeiro"/>
            <CapitalWrapper max={34} min={20} capitalName="Belo Horizonte"/>
            <CapitalWrapper max={18} min={9} capitalName="São Paulo"/>
        </Container>
    )
}