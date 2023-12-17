import { Container } from "./styles.js";
import { ButtonArea } from '../../components/ButtonArea'
import { ButtonSave } from "../../components/ButtonSave/index.jsx";

export function Home() {
  return (
    <Container>

      <ButtonArea />
      <ButtonSave />

    </Container>
  )
}
