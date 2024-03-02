/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
interface Todo {
    id_employee: number;
    user_name: string;
    user_type: string;
    urlDirection: string;
    userId: number;
    getfetch: () => void;
  }
  

  
  const apiUrl = `${import.meta.env.VITE_BASE_URL}`;
  const fetchAll = async () => {
  const [Data, setData] = useState({data:[]})
  
  const getFetch = async (urlDirection:string ): Promise<Todo[]>=> {
    
    try {
      const url = `${apiUrl}${urlDirection}`;
      
      
      const response = await fetch(url, {
        method: 'GET',
      });
      
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
  
      const data = await response.json();
      setData(Data);
      // console.log(data.data);
      
      return data || [];
    } catch (error) {
      console.error('Error fetching get:', error);
      return [];
    }
    finally {
      console.log("Procesada peticion");
      
    }
  }
  return{
    data: Data.data || [],
    getFetch   
  }
  };
      export default fetchAll;