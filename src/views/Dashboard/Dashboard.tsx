import { useEffect } from "react";
// import fetchAll from "../../data/fetchAll";
import TableData from "../../components/common/table/TableData";
// import Loading from "../../components/loading/Loading";
import { Form } from "../../components/form/Form";
import Navbar from "../../components/parcials/navbar/Navbar";
import Footer from "../../components/parcials/footer/Footer";
import style from "./dashboard.module.css";
// import { Pruebas } from "../../components/pruebas/Pruebas";
// import fetchGet from "../../data/fetchGet";
// import useFetch from "../../hooks/useFetch";
export default function Dashboard() {
  // const [contar, setContar] = useState(0);
  
  useEffect(() => {
    
  }, []);
 

  return (
    <div className={style.bodyDashboard}>
      <div className={style.containerDashboard}></div>
      <div>
        <Navbar />
        <h2> Dashboard</h2>
        {/* <p>Contador: {contar}</p> */}

        {/* <Form formType="Employee" urlDirection="/metalmecanica/employee/create"/> */}
        <Form formType="Product" urlDirection="/metalmecanica/product/create"/>
        {/* <TableData urlDirection='/metalmecanica/employee/detailall' /> */}
        <TableData urlDirection='/metalmecanica/product/detailall' />
        {/* <Table tableFrom='Employee' /> */}
        {/* <Pruebas/> */}
        <Footer />
      </div>
    </div>
  );
}
