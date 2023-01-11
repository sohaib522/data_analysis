import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
export default function Formulate_Table(props) {

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
      
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
  return (
    <TableContainer component={Paper}>
   <Typography variant="h6" gutterBottom align='left'>
        Total Site Count : ({props.site_count})
      </Typography>
   <Table sx={{ minWidth: 700 }} aria-label="customized table">
     <TableHead>

       <TableRow>
         <StyledTableCell style={{backgroundColor :'#3333ff'}}>Name</StyledTableCell>
         <StyledTableCell style={{backgroundColor :'#3333ff'}}align="right">Lat</StyledTableCell>
         <StyledTableCell style={{backgroundColor :'#3333ff'}}align="right">long</StyledTableCell>
         <StyledTableCell style={{backgroundColor :'#3333ff'}}align="right">Performance</StyledTableCell>
         <StyledTableCell style={{backgroundColor :'#3333ff'}}align="right">Nor</StyledTableCell>
         <StyledTableCell style={{backgroundColor :'#3333ff'}}align="right">Voltage</StyledTableCell>
         <StyledTableCell style={{backgroundColor :'#3333ff'}}align="right">Current</StyledTableCell>
         <StyledTableCell style={{backgroundColor :'#3333ff'}}align="right">PowerSource</StyledTableCell>
         <StyledTableCell style={{backgroundColor :'#3333ff'}}align="right">Load</StyledTableCell>
         <StyledTableCell style={{backgroundColor :'#3333ff'}}align="right">Fuel</StyledTableCell>
         <StyledTableCell style={{backgroundColor :'#3333ff'}}align="right">Reason</StyledTableCell>
       </TableRow>
     </TableHead>
     <TableBody>
          {Array.from(props.json_list).map((row,i) => (
            <StyledTableRow key={i} >
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.Lat}</StyledTableCell>
              <StyledTableCell align="right">{row.long}</StyledTableCell>
              <StyledTableCell align="right">{row.performance}</StyledTableCell>
              <StyledTableCell align="right">{row.nar}</StyledTableCell>
              <StyledTableCell align="right">{row.voltage}</StyledTableCell>
              <StyledTableCell align="right">{row.current}</StyledTableCell>
              <StyledTableCell align="right">{row.powerSource}</StyledTableCell>
              <StyledTableCell align="right">{row.load}</StyledTableCell>
              <StyledTableCell align="right">{row.fuel}</StyledTableCell>
              <StyledTableCell align="right">{row.reason}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}
