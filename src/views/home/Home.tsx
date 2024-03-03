import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/parcials/navbar/Navbar";
import Loading from "../../components/loading/Loading";
import style from "./home.module.css";
import Footer from "../../components/parcials/footer/Footer";

const notify = () => {
  toast("Hello World");
};
const Home = () => {
  return (
    <div className={style.bodyHome}>
      <div className={style.containerBody}>
        <Navbar />
        <button onClick={notify}>Notify !</button>
        <input type="reset" onClick={notify} />
        <ToastContainer />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        Home
      </div>
      <div className={style.footerHome}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
