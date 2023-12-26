import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'

//@ts-ignore
import BeeSafeApp from "../../assets/Beesafe-app.png"
//@ts-ignore
import CitizenApp from "../../assets/Citizen-app.png"
//@ts-ignore
import Life360 from "../../assets/Life360-app.png"
//@ts-ignore
import Noonlight from "../../assets/Noonlight-app.png"
import { Typography } from '@mui/material'



function createData(
  name: any,
  safe: any,
  panic: any,
  liveVid: any,
  location: any,
  safety: any,
  community: any,
  direct: any,
) {
  return { name, safe, panic, liveVid, location, safety, community, direct}
}

const rows = [
  createData(
    <img src={BeeSafeApp} alt="BeeSafeApp" style={{width: "100%", objectFit: "contain"}}/>, 
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
  ),
  createData(
    <img src={CitizenApp} alt="CitizenApp" style={{width: "100%", objectFit: "contain"}}/>, 
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
  ),
  createData(
    <img src={Life360} alt="Life360" style={{width: "100%", objectFit: "contain"}}/>, 
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
  ),
  createData(
    <img src={Noonlight} alt="Noonlight" style={{width: "100%", objectFit: "contain"}}/>,  
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <CheckIcon sx={{color: "#10991D", fontWeight: 900, fontSize: 40}}/>, 
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
    <ClearIcon sx={{color: "#A62626", fontWeight: 900, fontSize: 40}}/>,
  ),
];

export default function ComparisonCheckTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center"><Typography fontWeight={700}>Safest Map Route</Typography></TableCell>
            <TableCell align="center"><Typography fontWeight={700}>Panic Button</Typography></TableCell>
            <TableCell align="center"><Typography fontWeight={700}>Community Live Video Incident</Typography></TableCell>
            <TableCell align="center"><Typography fontWeight={700}>24/7 Location Share</Typography></TableCell>
            <TableCell align="center"><Typography fontWeight={700}>Safety Challenges / Gamification</Typography></TableCell>
            <TableCell align="center"><Typography fontWeight={700}>Community Bulletin Board</Typography></TableCell>
            <TableCell align="center"><Typography fontWeight={700}>Direct Messaging</Typography></TableCell>
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
              <TableCell align="center">{row.safety}</TableCell>
              <TableCell align="center">{row.community}</TableCell>
              <TableCell align="center">{row.direct}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}