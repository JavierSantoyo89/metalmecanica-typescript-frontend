import { useEffect } from "react";
import Loading from "../loading/Loading";
import fetchGet, { Datum } from "../../data/fetchGet";
import { useState } from "react";
export const Table = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetchGet("/metalmecanica/employee/detailall")
      .then((data) => {
        //  console.log('DatosEstadisticos:', {data}.data);
        //   console.log('DatosCount:', data);
        setList(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const [list, setList] = useState<Datum[]>([]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div></div>
      {list.map((data) => (
          <p key={data.id_employee}>{data.user_name}</p>
      ))}
    </>
  );
};

// <div>
// Table
// {/* <Button type = "button"  className={styleTrash.binButton}/> */}
// <ol>
// <li>Item 1</li>
// </ol>
// </div>
