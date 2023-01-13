import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {addUserCar} from "../feature/apiSlice";
import {addServiced} from "../feature/apiSlice";
import { Link } from "react-router-dom";


function SelectService() {
  const [userCar, setUserCar] = useState([]);
  const [serviced, setServiced] = useState([]);
  const [serviceCode, setServiceCode] = useState([]);
  const [price, setPrice] = useState([]);
 
const dispatch = useDispatch();

  const CarList = [
    { carName: "Hatchback" },
    { carName: "Sedan" },
    { carName: "SUV" },
  ];
  const serviceList = [
    { service: "Basic Servicing", code: 'BS01'},
    { service: "Engine Fixing", code: 'EF01'},
    { service: "Clutch Fixing", code: 'CF01'},
    { service: "Brake Fixing", code: 'BF01'},
    { service: "Gear Fixing", code: 'GF01'},
  ];
  const defaultProps = {
    options: CarList,
    getOptionLabel: (option) => option.carName,
  };

  useEffect(()=>{
    dispatch(addUserCar(userCar)) 
    dispatch(addServiced(serviced)) 
  },[dispatch, userCar, serviced]) 
  
  const onSelectServices = (value) => {
    setServiced(value)
 
   }
const disableBtn = userCar.length == 0 ? true : false || serviced.length == 0 ? true : false

  return (
    <>
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "bold",
          marginTop: "25px",
          paddingLeft: "16px",
          paddingBottom: "1px",
        }}
      >
        Customer Service Detail
      </Typography>
      <div
        style={{
          margin: "20px",
          padding: "10px",
        }}
      >
        <Stack spacing={1} sx={{ width: 400 }}>
          <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            clearOnEscape
            onChange={(e, value) => {
              value && value.carName
                ? setUserCar(value.carName)
                : setUserCar("");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Your Car"
                variant="standard"
              />
            )}
          />
        </Stack>
        <Stack spacing={3} sx={{ width: 400, marginTop: "15px" }}>
          <Autocomplete
            multiple
            id="tags-standard"
            options={serviceList}
            filterSelectedOptions
            isOptionEqualToValue={(option, value) => option.service == value.service}
            getOptionLabel={(option) => option.service}
            onChange={(e,value)=>onSelectServices(value)}
            
            renderInput={(params) => (
                
              <TextField
                {...params}    
                variant="standard"
                label="Select Services"
                value={serviced}
              />   
            )}
          />
        </Stack>
      </div>
      <Link style={{textDecoration:'none', marginBottom:'70px'}} to="/customer-bill">
      <Button
        variant="contained"
        disabled = {disableBtn}
        sx={{
          padding: '10px',
          margin: "25px",
          size: "large",
        }}
      >
       Generate Bill Detail
      </Button>
      </Link>
    </>
);
}





export default SelectService;
