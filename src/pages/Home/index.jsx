import { Container, ContainerItens } from "./styles.js";
import { ButtonArea } from "../../components/ButtonArea";
import { ButtonSave } from "../../components/ButtonSave/index.jsx";
import { Header } from "../../components/Header";

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
