/* eslint-disable no-unused-vars */
const API_URL = "https://web2-p3-backend-grupo12-63xvuvdbh-web-p3.vercel.app/";

async function fetchData() {
  await fetch(API_URL, {
    method: "GET",
    // headers: {
    //     'Authorization': `Bearer ${localStorage.getItem('token_access')}`,
    //   },
  }).then((response) => response.json());
}
