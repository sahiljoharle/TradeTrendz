import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StockRow from "./components/StockRow.js";
import { useEffect } from "react";
import Axios from "axios";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <table className="table mt-5">
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Price</th>
                <th>Data</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <StockRow ticker="IBM" />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
