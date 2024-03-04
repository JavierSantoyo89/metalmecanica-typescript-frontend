/* eslint-disable @typescript-eslint/no-explicit-any */


// import axios from "axios";

// export  const fetchGet = async (urlDirection: string)=>{
//   console.log("Prosesando peticion");
//     await axios
    
//     .get(`${import.meta.env.VITE_BASE_URL}${urlDirection}`)
//     .then((res) => {
//       console.log(res.data.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//     }
// interface fetchGet {
//   urlDirection: string
//   method: string;
//   body: string;
//   redirect: string;
// }

//     const fetchGet = async (urlDirection: string) =>{
//       const raw = "";

//       const requestOptions = {
//         method: "GET",
//         body: raw,
//         redirect: "follow"
//       };
      
//       try {
//         const response = await fetch(`https://backendportfolio-r0uf.onrender.com/metalmecanica${urlDirection}`, requestOptions);
//         const result = await response.text();
//         console.log(result)
//       } catch (error) {
//         console.error(error);
//       }
//     }
    
//       // /employee/detailall

// export default fetchGet


// interface RequestOptions {
//   // method: string;
//   // headers?: { [key: string]: string };
//   body?: string;
//   method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     }
// }



const fetchTodos = async (urlDirection: string): Promise<any> => {
  try {
    const response = await fetch(import.meta.env.VITE_BASE_URL+`${urlDirection}`,{method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    } });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return {};
  }
};
  export default fetchTodos
  