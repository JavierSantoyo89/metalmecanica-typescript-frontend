import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../common/Input";
const resetNotify = () => {
  toast("Formulario reseteado");
};
const sendNotify = () => {
  toast("Formulario enviado");
};

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch("example"));
  console.log(watch("exampleRequired"));
  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          dataInput={{ ...register("example", { required: true }) }}
          labelHTMLFor="Usuario"
          labelName="Usuario: "
          plaseholder="Ingresa el usuario"
        />
        <br></br>
        <Input
          type="text"
          dataInput={{ ...register("exampleRequired") }}
          labelHTMLFor="email"
          labelName="Correo: "
          plaseholder="correo@example.com"
        />{" "}
        <br></br>
        {/* <Input 
          type="password"
          labelHTMLFor="password"
          labelName="Contraseña: "
          plaseholder="Contraseña"
        /> */}
        <Input type="submit" value="Enviar" notify={sendNotify} />
        <br></br>
        <Input type="reset" value="Limpiar" notify={resetNotify} /> <br></br>
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
      <ToastContainer />
    </div>
  );
};
