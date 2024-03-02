import { useEffect, useState } from "react";
// import fetchAll from "../../data/fetchAll";
import { Table } from "../../components/common/Table";
import Loading from "../../components/loading/Loading";
import Navbar from "../../components/parcials/navbar/Navbar";
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
  }, []);

  setTimeout(() => {
    setContar(contar + 1);
  }, 1000);

  return (
    <div>
      <Navbar />
      <h2> Dashboard</h2>
      <p>Contador: {contar}</p>
      <Loading />
      <Table />
    </div>
  );
}
