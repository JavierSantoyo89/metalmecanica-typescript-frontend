import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/parcials/navbar/Navbar";
import Loading from "../../components/loading/Loading";
import style from "./home.module.css";
import Footer from "../../components/parcials/footer/Footer";

const notify = () => {
  toast("Hello World");
};

const handleDelete = () => {
  toast.info('¿Estás seguro de que quieres eliminar este registro?', {
    position: "top-center",
    closeButton: (
      <div>
        <button onClick={() => handleConfirmDelete()}>Confirmar</button>
        <button onClick={() => toast.dismiss()}>Cancelar</button>
      </div>
    ),
  });
};

const handleConfirmDelete = () => {
  // Lógica para eliminar el registro
  toast.success('Registro eliminado con éxito');
};
const Home = () => {
  return (
    <div className={style.bodyHome}>
      <div className={style.containerBody}>
        <Navbar />
        <button onClick={notify}>Notify !</button>
        <input type="reset" onClick={notify} />
        
        <button onClick={handleDelete}>Eliminar Registro</button>
        
        <Loading />
        Home
      </div>
      <div className={style.footerHome}>
        <ToastContainer />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
