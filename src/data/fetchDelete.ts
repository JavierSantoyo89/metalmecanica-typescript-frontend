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
  
  const fetchDelete = async (urlDirection: string, key: number) => {
    try {
      const response = await fetch(import.meta.env.VITE_BASE_URL+`${urlDirection}+${key}`,{method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      } });
      const data: Data = await response.json();
      return {
        data: data.data
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
    export default fetchDelete
  