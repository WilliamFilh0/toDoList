import {
  Container,
  ContainerIten,
  HeaderNew,
  Button,
  Return,
  BarNavigation,
  input,
} from "./styles";
import { FaChevronLeft } from "react-icons/fa";

export function New() {
  return (
    <Container>
      <ContainerIten>
        <HeaderNew>
          <BarNavigation>
            <Return>
              <FaChevronLeft size={10} /> List
            </Return>
            <Button>Save</Button>
          </BarNavigation>
        </HeaderNew>
        <input1 type="text"></input1>
      </ContainerIten>
    </Container>
  );
}
