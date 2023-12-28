import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'
import { Typography } from '@mui/material'

//@ts-ignore
import BrandFluence from "../../assets/Brandfluence-app.png"
//@ts-ignore
import SocialLadder from "../../assets/SocialLadder-app.png"
//@ts-ignore
import Clever from "../../assets/Clever-app.png"
//@ts-ignore
import Skeepers from "../../assets/Skeepers-app.png"



function createData(
  name: any,
  safe: any,
  panic: any,
  liveVid: any,
  location: any,
) {
  return { name, safe, panic, liveVid, location}
}

const rows = [
  createData(
    <img src={BrandFluence} alt="BrandFluence" style={{width: "100%", objectFit: "contain"}}/>,
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
  ),
  createData(
    <img src={SocialLadder} alt="SocialLadder" style={{width: "100%", objectFit: "contain"}}/>,   
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
  ),
  createData(
    <img src={Clever} alt="Clever" style={{width: "100%", objectFit: "contain"}}/>,
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
  ),
  createData(
    <img src={Skeepers} alt="Skeepers" style={{width: "100%", objectFit: "contain"}}/>,
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
  ),
];

export default function BrandFluenceComparisonTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center"><Typography fontWeight={700}>Redeem Points</Typography></TableCell>
            <TableCell align="center"><Typography fontWeight={700}>Gain Rewards</Typography></TableCell>
            <TableCell align="center"><Typography fontWeight={700}>Turn Social Media Engagement Into Rewards</Typography></TableCell>
            <TableCell align="center"><Typography fontWeight={700}>Beneficial For All Users</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.safe}</TableCell>
              <TableCell align="center">{row.panic}</TableCell>
              <TableCell align="center">{row.liveVid}</TableCell>
              <TableCell align="center">{row.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}