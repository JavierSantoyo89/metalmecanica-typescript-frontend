
function fetchPost(data: object, urlDirection: string) {
  const myHeaders: Headers = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw: string = JSON.stringify(data);

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    `https://backendportfolio-r0uf.onrender.com${urlDirection}`,requestOptions)
    .then((response: Response) => response.text())
    .then((result: string) => console.log(result))
    .catch((error: Error) => console.error(error));
}

export default fetchPost;
// /metalmecanica/employee/create