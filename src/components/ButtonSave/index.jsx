import { Button, Img } from './styles';
import Adicao from '../../assets/AdicaoNotas.jpg'


export function ButtonSave() {

  return (
    <Button type='button' onClick={() => { console.log('Botão ButtonSave clicado!'); }}><Img src={Adicao} /></Button>
  )
}