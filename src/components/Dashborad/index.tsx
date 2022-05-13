import { Summary } from "../Summary";
import { Transations } from "../Transations/Index";
import { Container } from "./style";

export function Dashborad() {
    return (

        <Container>
            <Summary/>
            <Transations/>
        </Container>
    )
}