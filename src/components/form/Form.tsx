import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../common/Input";
import style from "./Form.module.css";
const resetNotify = () => {
  toast("Formulario reseteado");
};
const sendNotify = () => {
  toast("Formulario enviado");
};
interface formTypes {
  formType: string;
}
type Inputs = {
  user_name: string;
  user_type: string;
};

export const Form: React.FC<formTypes> = ({ ...props }: formTypes) => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className={style.loginContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.loginForm}>
        {props.formType === "Login" ? (
          <>
            <Input
              type="text"
              dataInput={{ ...register("user_name", { required: true }) }}
              labelHTMLFor="Usuario"
              labelName="Usuario: "
              plaseholder="Ingresa el usuario"
            />
            {errors.user_name && <span>User field is required</span>}
            <br></br>
            <Input
              type="email"
              dataInput={{ ...register("user_type", { required: true }) }}
              labelHTMLFor="email"
              labelName="Correo: "
              plaseholder="correo@example.com"
            />
            {errors.user_type && <span>Email field is required</span>}
<div className={style.containerButton}>
            <Input type="submit" className={style.bottomText + " " + style.button}  value="Enviar" notify={sendNotify} />
            <br></br>
            <Input type="reset" className={style.bottomText + " " + style.button} value="Limpiar" notify={resetNotify} />{" "}
            <br></br>
</div>
            <br></br>
          </>
        ) : (
          <></>
        )}
        {props.formType === "Employee" ? (
          <>
            <Input
              type="text"
              dataInput={{ ...register("user_name", { required: true }) }}
              labelHTMLFor="Employee"
              labelName="Emploeado: "
              plaseholder="Ingresa el usuario"
            />
            <br></br>
            <Input
              type="text"
              dataInput={{ ...register("user_type", { required: true }) }}
              labelHTMLFor="typeUser"
              labelName="Typo de empleado: "
              plaseholder="Typo de empleado"
            />{" "}
            <br></br>
            <Input type="submit" value="Enviar" notify={sendNotify} />
            <br></br>
            <Input type="reset" value="Limpiar" notify={resetNotify} />{" "}
            <br></br>
            {errors.user_name && <span>User field is required</span>}
            <br></br>
            {errors.user_type && <span>Email field is required</span>}
          </>
        ) : (
          <></>
        )}
      </form>
      <ToastContainer />



    </div>
  );
};
