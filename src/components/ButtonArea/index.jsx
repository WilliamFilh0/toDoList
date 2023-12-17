import { Container, Button, Span } from "./styles"
import { useState } from 'react';

export function ButtonArea(title, ...rest) {
  const [color, setColor] = useState("#bfbfbf")

  function handleButtonColor() {
    setColor(color === '#bfbfbf' ? '#41afca' : '#bfbfbf')
  }

  return (
    < Container >
      <Button type="button" color={color} onClick={handleButtonColor}></Button>
      <Span>Lorem ipsum dolor sit amet.</Span>
    </Container >
  )
}

