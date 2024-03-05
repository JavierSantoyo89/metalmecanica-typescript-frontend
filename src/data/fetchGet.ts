

export interface Data {
  data:      Datum[];
  count:     number;
  SearchAll: string;
}

export interface Datum {
  id_employee: number;
  user_name:   string;
  user_type:   string;
}

const fetchGet = async (urlDirection: string) => {
  try {
    const response = await fetch(import.meta.env.VITE_BASE_URL+`${urlDirection}`,{method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    } });
    const data: Data = await response.json();
    return {
      data: data.data,
      count: data.count,
      SearchAll: data.SearchAll
    } 
    // (data.data, data.count);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
  export default fetchGet


// interface Data {
//   data: JSON;
//   count: number;

// }

// const fetchGet = ()=>{
  
  
//   const fetchdata = async (urlDirection: string): Promise<Data | JSON> => {
//     try {
//       const response = await fetch(import.meta.env.VITE_BASE_URL+`${urlDirection}`,{method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       } });
//       const data = await response.json();
//       return (data.data, data.count);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   };
//   return {
//     data,
//       fetchdata}
// }
//   export default fetchGet