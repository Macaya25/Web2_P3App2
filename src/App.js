import { useEffect, useState } from "react";
import fetchData from "./Fetchs";
import Table from "./Table"

function App() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setTable(data));
  }, []);

  return (
    <div>
        <Table elements={ table }/>
    </div>
  );
}

export default App;
