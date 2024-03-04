import { useEffect, useState } from "react";
// import fetchAll from "../../data/fetchAll";
import { Table } from "../../components/common/Table";
import Loading from "../../components/loading/Loading";
import { Form } from "../../components/form/Form";
import Navbar from "../../components/parcials/navbar/Navbar";
import Footer from "../../components/parcials/footer/Footer";
import fetchTodos from "../../data/fetchGet";
export default function Dashboard() {

  const [contar, setContar] = useState(0);

  // console.log(data);
  // console.log(isLoading);
  // console.log(isLoading);

  useEffect(() => {
    // if (!fetchGet) {
    //   <Loading />
    // }else{
    // fetchGet("/employee/detailall")}
    // fetchAll("/employee/detailall");
 
fetchTodos("/metalmecanica/employee/detailall")
  .then(data => {
    console.log('datos:', data.data);
    console.log('datoscount:', data.count);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  // fetchTodos("/stadistics")
  // .then(data => {
  //   console.log('DatosEstadisticos:', data.data);
  //   console.log('DatosCount:', data.count);
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // });
    setTimeout(() => {
      setContar(contar + 1);
    }, 1000);
  }, []);


  return (
    <div>
      <Navbar />
      <h2> Dashboard</h2>
      <p>Contador: {contar}</p>
      <Loading />
      <Form formType="Employee" />
      <Table />
      <Footer/>
    </div>
  );
}
