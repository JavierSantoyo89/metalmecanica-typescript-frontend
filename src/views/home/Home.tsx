import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../components/parcials/navbar/Navbar"
import Loading from "../../components/loading/Loading";


const notify = () =>{ 
  toast("Hello World")};
const Home = () => {
  return (
    <div>
      <Navbar />
      <button onClick={notify}>Notify !</button>
      <input type="reset" onClick={notify} />
      <ToastContainer />
      <Loading />
      Home</div>
  )
}

export default Home