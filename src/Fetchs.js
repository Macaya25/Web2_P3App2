/* eslint-disable no-unused-vars */
// const API_URL = "https://web2-p3-backend-grupo12-63xvuvdbh-web-p3.vercel.app";
const API_URL = "http://localhost:8000";

export default async function fetchData(setTable) {
  await fetch(`${API_URL}/questions/1`, {
    method: "GET",
    headers: {
        // 'Authorization': `Bearer ${localStorage.getItem('token_access')}`,
        // 'Content-type': 'application/json; charset=UTF-8',
      },
  }).then((response) => {
    console.log(response);
    return response.json()
  }).then((data)=> {
    setTable(data);
  })
  .catch((error)=> {
    console.log("Error: ", error);
  })
}
