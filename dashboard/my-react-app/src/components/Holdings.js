// `useEffect` — React hook that runs side effects (like API calls).
//useEffect(() => {
// code to run (side-effect)
// }, [dependencies]);

// Component Loads 
//     ↓
// useEffect triggers 
//     ↓
// axios sends GET request to backend 
//     ↓
// Backend responds with holdings data 
//     ↓
// setAllHoldings updates state 
//     ↓
// Component re-renders with new data in the table

import React,{useState, useEffect} from "react";
import axios from 'axios';
import { VerticalGraph } from "./VerticalGraph";



const Holdings = () => {

  const[allHoldings,setAllHoldings]=useState([]);
  //Whatever your backend sends using res.json() or res.send() — that’s what ends up in res.data.
   useEffect(()=>{
    //  axios.get("http://localhost:3002/allHoldings")
    axios.get("https://zerodha-web-app-backend.vercel.app/allHoldings").then((res)=>{
      console.log(res.data)
      setAllHoldings(res.data);
     });
  },[]);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allHoldings.map((stock,index)=>{
            const curValue=stock.price*stock.qty;
            const isProfit=curValue-stock.avg* stock.qty>=0.0;
            const profClass=isProfit?"profit":"loss";
            const dayClass=stock.isLoss ?"loss":"profit";
            return(
              <tr key={index} >
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td>{curValue.toFixed(2)}</td>
              <td className={profClass}>
                {(curValue - stock.avg *stock.qty).toFixed(2)}
              </td>
              <td className={profClass}>{stock.net}</td>
              <td className={dayClass}>{stock.day}</td>
            </tr>

            )

          })}

        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
