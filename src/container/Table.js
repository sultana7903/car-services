import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../data/db';
import { Typography } from '@mui/material';
import SelectService from './SelectService';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function CustomizedTables() {
  return (
    <>
      <TableContainer component={Paper}>
        <Typography 
         sx={{fontSize:'30px',
          fontWeight: 'bold',
          marginTop: '25px',
          paddingLeft: '16px',
          paddingBottom: '1px'
        }}
        >Price List</Typography>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Service Code</StyledTableCell>
            <StyledTableCell align="left">Service</StyledTableCell>
            {data && data.carList.map((el,i)=>(

            <StyledTableCell align="left">{el.carType}</StyledTableCell>
        ))}
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.services.map((el,i) => (
            <StyledTableRow key={el.serviceCode}>
              <StyledTableCell component="th" scope="row">
                {el.serviceCode}
              </StyledTableCell>
              <StyledTableCell align="left">{el.service}</StyledTableCell>
              <StyledTableCell align="left">{el.charge1}</StyledTableCell>
              <StyledTableCell align="left">{el.charge2}</StyledTableCell>
              <StyledTableCell align="left">{el.charge3}</StyledTableCell>
              
            </StyledTableRow>
  
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <SelectService/>

    </>
  );
}