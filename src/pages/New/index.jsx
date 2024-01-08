import { FaChevronLeft, FaRegCalendar } from "react-icons/fa";
import { BsClock } from "react-icons/bs";

import {
  Container,
  ContainerIten,
  HeaderNew,
  Button,
  Return,
  BarNavigation,
  Input,
  TextArea,
  RememberDate,
  RememberTime,
} from "./styles";

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
        <Input type="text" placeholder="New Task"></Input>
        <RememberDate>
          <FaRegCalendar size={16} />
          <p>Wed, Jan20</p>
        </RememberDate>
        <RememberTime>
          <BsClock />
          <p>12:00PM</p>
        </RememberTime>
        <TextArea placeholder="Here will be the text of the new task" />
      </ContainerIten>
    </Container>
  );
}
