// import { useState } from "react";
import axios from "axios";
// interface DataFetch {
//   data: object
//   error?: string | null
//   isLoading: boolean
//   getFetch: (uslstring:string) => void
// }
const  useFetch = ()=> {

  // const [dataFetch, setDataFetch] = useState(Object);
  // const [isLoading, setIsLoading] = useState(true);
  // const [errors, setErrors] = useState();



const getFetch = async (urlString:string )=> {
  axios
  .get(`${import.meta.env.VITE_BASE_URL}${urlString}`)
  .then((res) => {
    console.log(res.data.data);
  })
  .catch((err) => {
    console.log(err);
  });

  }

  // const getFetch = async (urlstring:string )=> {
  //   try {
  //     const response = await fetch(`${import.meta.env.VITE_BASE_URL}${urlstring}`);
      
  //     const dataFetch = await response.json();
  //     setDataFetch(dataFetch);
  //     setIsLoading(false);
  //     // console.log(dataFetch);
  //     // console.log(dataFetch.data);
  //   } 
  //   catch (error) {
  //     // console.log(error);
  //     // const err = error as Error;
  //     setErrors(errors);
  //   }
  // };
  return {
    // data: dataFetch.data.data ,
    // isLoading,
    // // error,
    getFetch,
  };
};

export default useFetch;