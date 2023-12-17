import { Button } from './styles';

export function ButtonSave() {
  return (
    <Button type='button' onClick={() => { console.log('Botão ButtonSave clicado!'); }}></Button>
  )
}