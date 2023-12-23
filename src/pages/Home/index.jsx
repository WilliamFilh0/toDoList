import { Container, ContainerItens, Header } from "./styles.js";
import { ButtonArea } from "../../components/ButtonArea";
import { ButtonSave } from "../../components/ButtonSave/index.jsx";

export function Home() {
  return (
    <Container>
      <ContainerItens>
        <Header />
        <ButtonArea />
        <ButtonSave />
      </ContainerItens>
    </Container>
  );
}
