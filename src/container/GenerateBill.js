import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

function GenerateBill() {
  const [charge1, setCharge1] = useState(0);
  const [charge2, setCharge2] = useState(0);
  const [charge3, setCharge3] = useState(0);
  const [charge4, setCharge4] = useState(0);
  const [charge5, setCharge5] = useState(0);
  const userCar = useSelector((state) =>
    state.userCar.userCar ? state.userCar.userCar : "no data rcv"
  );
  const serviced = useSelector((state) =>
    state.serviced.serviced ? state.serviced.serviced : "no data rcv"
  );
useEffect(()=>{
if(userCar == "Hatchback"){
   serviced.map((el, i)=>{
    if(el.code == 'BS01'){
     setCharge1(2000)
    }
    if(el.code == 'EF01'){
     setCharge2(5000)
    }
    if(el.code == 'CF01'){
     setCharge3(2000)
    }
    if(el.code == 'BF01'){
     setCharge4(1000)
    }
    if(el.code == 'GF01'){
     setCharge5(3000)
    }

   })
}

if(userCar == "Sedan"){
  serviced.map((el, i)=>{
   if(el.code == 'BS01'){
    setCharge1(4000)
   }
   if(el.code == 'EF01'){
    setCharge2(8000)
   }
   if(el.code == 'CF01'){
    setCharge3(4000)
   }
   if(el.code == 'BF01'){
    setCharge4(1500)
   }
   if(el.code == 'GF01'){
    setCharge5(6000)
   }
  })
}

if(userCar == "SUV"){
  serviced.map((el, i)=>{
   if(el.code == 'BS01'){
    setCharge1(5000)
   }
   if(el.code == 'EF01'){
    setCharge2(10000)
   }
   if(el.code == 'CF01'){
    setCharge3(6000)
   }
   if(el.code == 'BF01'){
    setCharge4(2500)
   }
   if(el.code == 'GF01'){
    setCharge5(8000)
   }
  })
}
// console.log(charge1, charge2, charge3, charge4, charge5)
},[charge1,userCar,serviced])

 const totalAmount = charge1+charge2+charge3+charge4+charge5
 let message = "";
 if(totalAmount >= 10000){
   message = "*Free Cleaning Service Applied";
 }
  return (
    <div>
      <h1
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        Invoice
      </h1>
      <div>
        <h2 style={{ marginLeft: "15px", marginTop: "25px" }}>Customer Name</h2>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            margin: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // width: "20%",
              margin: "15px",
              flexDirection: "column",
            }}
          >
            <h3>Service Code</h3>
            {serviced && serviced.map((el, i) => <p key={i}>{el.code}</p>)}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // width: "20%",
              margin: "15px",
              flexDirection: "column",
            }}
          >
            <h3>Services</h3>
            {serviced && serviced.map((el, i) => <p key={i}>{el.service}</p>)}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // width: "20%",
              margin: "15px",
              flexDirection: "column",
            }}
          >
            <h3>Car Name</h3>
            <p>{userCar}</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // width: "20%",
              margin: "15px",
              flexDirection: "column",
            }}
          >
            <h3>Price</h3>
            {userCar == "Hatchback" &&
              serviced &&
              serviced.map((el, i)=>
              { return (
                <div key={i}>
                {el.code == "BS01" && 
              <p> 2000 Rp </p>}
                {el.code == "EF01" && 
              <p> 5000 Rp </p>}
                {el.code == "CF01" && 
              <p> 2000 Rp </p>}
                {el.code == "BF01" && 
              <p> 1000 Rp </p>}
                {el.code == "GF01" && 
              <p> 3000 Rp </p>}</div>
              )
              })}
            {userCar == "Sedan" &&
              serviced &&
              serviced.map((el, i)=>
              { return (
                <div key={i}>
                {el.code == "BS01" && 
              <p > 4000 Rp </p>}
                {el.code == "EF01" && 
              <p> 8000 Rp </p>}
                {el.code == "CF01" && 
              <p > 4000 Rp </p>}
                {el.code == "BF01" && 
              <p > 1500 Rp </p>}
                {el.code == "GF01" && 
              <p > 6000 Rp </p>}</div>
              )
              })}
            {userCar == "SUV" &&
              serviced &&
              serviced.map((el, i)=>
              { return (
                <div key={i}>
                {el.code == "BS01" && 
              <p > 5000 Rp </p>}
                {el.code == "EF01" && 
              <p> 10000 Rp </p>}
                {el.code == "CF01" && 
              <p > 6000 Rp </p>}
                {el.code == "BF01" && 
              <p > 2500 Rp </p>}
                {el.code == "GF01" && 
              <p > 8000 Rp </p>}</div>
              )
              })}
          </div>
          
        </div>
        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "59%",
          margin: "15px",
          marginRight: "20%"
        }}
        >
          <h3>{message}</h3>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "59%",
            margin: "15px",
            marginRight: "20%"
          }}
        >
            <h2>Total Amount</h2>
            <h3>{totalAmount} Rp</h3>
            
          </div>
          
      </div>
      <div
       style={{
        display: "flex",
        justifyContent: "center",
        width: "59%",
        margin: "15px",
        marginRight: "20%",
        marginTop: '50px'
      }}
      >
      <Button
        variant="contained"
        onClick={()=>window.print()}
        sx={{
          padding: '10px',
          margin: "25px",
          size: "large",
        }}
      >
       Print Bill Detail
      </Button>
      </div>
    </div>
  );
}

export default GenerateBill;
