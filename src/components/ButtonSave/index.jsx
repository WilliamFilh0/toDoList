import { Button } from "./styles";
import { IoAddSharp } from "react-icons/io5";

export function ButtonSave() {
  return (
    <Button
      type="button"
      onClick={() => {
        console.log("Botão ButtonSave clicado!");
      }}
    >
      <IoAddSharp size={30} />
    </Button>
  );
}
