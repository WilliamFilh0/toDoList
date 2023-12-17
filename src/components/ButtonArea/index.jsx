import { Container } from "./styles"

export function ButtonArea(title, ...rest) {
  return (


    <Container>
      <button type="button" onClick={() => { console.log('Botão ButtonArea clicado!'); }}></button>
      <span>Lorem ipsum dolor sit amet.</span>
    </Container>
  )
}

