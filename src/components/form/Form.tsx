import { ToastContainer, toast } from "react-toastify";
import { Input } from "../common/Input";
const resetNotify = () => {
  toast("Formulario reseteado");
};
const sendNotify = () => {
  toast("Formulario enviado");
};
export const Form = () => {
  return (
    <div>
      <h2>Form</h2>
      <form>
        <Input
          type="text"
          labelHTMLFor="Usuario"
          labelName="Usuario: "
          plaseholder="Ingresa el usuario"
        />
        <Input
          type="email"
          labelHTMLFor="email"
          labelName="Correo: "
          plaseholder="correo@example.com"
        />
        <Input
          type="password"
          labelHTMLFor="password"
          labelName="Contraseña: "
          plaseholder="Contraseña"
        />
        <Input type="submit" value="Enviar" notify={sendNotify} />
        <Input type="reset" value="Limpiar" notify={resetNotify} />
      </form>
      <ToastContainer />
    </div>
  );
};
