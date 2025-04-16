import React,{useState,useEffect} from "react";
import axios from "axios";
// import {positions} from '../data/data';
const Positions = () => {
  const[allPositions,setAllPositions]=useState([]);
  //useEffect comes to play after the loading
  useEffect(()=>{
    axios.get("http://localhost:3002/allPositions").then((res)=>{
      setAllPositions(res.data);
    })
  },[]) 
  return (
    <>
      <h3 className="title">Positions({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {allPositions.map((pos,index)=>{
             const curValue=pos.price*pos.qty;
             const isProfit=curValue-pos.avg* pos.qty>=0.0;
             const profClass=isProfit?"profit":"loss";
             const dayClass=pos.isLoss ?"loss":"profit";
            return(
            <tr key={index}>
            <td>{pos.product}</td>
            <td>{pos.name}</td>
            <td>{pos.qty}</td>
            <td>{pos.avg.toFixed(2)}</td>
            <td>{pos.price.toFixed(2)}</td>
            <td className={profClass}>
                {(curValue - pos.avg *pos.qty).toFixed(2)}
              </td>
              <td className={dayClass}>{pos.day}</td>
          </tr>

            )

          })}
        </table>
      </div>
    </>
  );
};

export default Positions;