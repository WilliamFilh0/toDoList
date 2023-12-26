import { Container, Button, Span } from "./styles";
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";

export function ButtonArea() {
  const [color, setColor] = useState("#bfbfbf");
  const [textDecoration, setTextDecoration] = useState("none");

  function handleButton() {
    setColor(color === "#bfbfbf" ? "#41afca" : "#bfbfbf");
    setTextDecoration(textDecoration === "none" ? "line-through" : "none");
  }

  return (
    <Container>
      <Button type="button" color={color} onClick={handleButton}>
        {color === "#41afca" && <GiCheckMark size={12} />}
      </Button>
      <Span textDecoration={textDecoration}>Lorem ipsum dolor sit amet.</Span>
    </Container>
  );
}
