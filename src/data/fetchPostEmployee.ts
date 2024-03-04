// import { Response } from 'fetch';

function fetchPostemployee(data: object) {
    
    const myHeaders: Headers = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw: string = JSON.stringify(data
    //   {"user_name": "Yuvi2",
//   "user_type": "Tecnico"}
);

const requestOptions: RequestInit = {
    method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://backendportfolio-r0uf.onrender.com/metalmecanica/employee/create", requestOptions)
  .then((response: Response) => response.text())
  .then((result: string) => console.log(result))
  .catch((error: Error) => console.error(error));
}

export default fetchPostemployee