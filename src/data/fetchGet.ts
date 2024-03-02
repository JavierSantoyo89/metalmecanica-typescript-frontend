
import axios from "axios";


export  const fetchGet = async (urlDirection: string)=>{
  console.log("Prosesando peticion");
    await axios
    
    .get(`${import.meta.env.VITE_BASE_URL}${urlDirection}`)
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });

    }


