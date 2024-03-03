import { Form } from "../../components/form/Form";
import Navbar from "../../components/parcials/navbar/Navbar";
import Footer from "../../components/parcials/footer/Footer";
import styles from "./Login.module.css";
export default function Login() {
  return (
    <div className={styles.bodyLogin}>
      <Navbar />
      <div className={styles.containerForm}>
        {/* <h1>Login</h1> */}
        <Form formType="Login" />
      </div>
      <Footer />
    </div>
  );
}
