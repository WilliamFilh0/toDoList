import { Header1, Span1, Span2, Div, Date } from "./styles";
import { FaRegCalendar } from "react-icons/fa";

export function Header() {
  return (
    <Header1>
      <Date>
        <Span1>24</Span1>

        <Div>
          <Span2>Wednesday</Span2>
          <Span2>jan, 2021</Span2>
        </Div>
      </Date>

      <FaRegCalendar size={35} />
    </Header1>
  );
}
