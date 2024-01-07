import { Container, ContainerItens, StyledButtonSave } from "./styles.js";
import { ButtonArea } from "../../components/ButtonArea";
import { ButtonSave } from "../../components/ButtonSave/index.jsx";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <Container>
      <ContainerItens>
        <Header />
        <ButtonArea />
        <StyledButtonSave />
      </ContainerItens>
    </Container>
  );
}
