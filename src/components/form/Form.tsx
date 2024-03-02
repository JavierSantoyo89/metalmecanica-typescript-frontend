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
  user_name: string;
  user_type: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  // console.log(watch("user_name"));
  // console.log(watch("user_type"));
  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          dataInput={{ ...register("user_name", { required: true }) }}
          labelHTMLFor="Usuario"
          labelName="Usuario: "
          plaseholder="Ingresa el usuario"
        />
        <br></br>
        <Input
          type="email"
          dataInput={{ ...register("user_type", { required: true }) }}
          labelHTMLFor="email"
          labelName="Correo: "
          plaseholder="correo@example.com"
        />{" "}
        <br></br>
      
        <Input type="submit" value="Enviar" notify={sendNotify} />
        <br></br>
        <Input type="reset" value="Limpiar" notify={resetNotify} /> <br></br>
        {errors.user_name && <span>User field is required</span>}
        <br></br>
        {errors.user_type && <span>Email field is required</span>}
      </form>
      <ToastContainer />
    </div>
  );
};
