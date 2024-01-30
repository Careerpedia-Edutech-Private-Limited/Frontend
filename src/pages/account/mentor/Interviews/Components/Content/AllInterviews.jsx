import React from 'react';
import { Table, TableBody, TableContainer, TableCell, TableHead, TableRow, Typography, Paper, Avatar, Button } from '@mui/material';
import profileImage from '../../../../../../assets/profile-image.svg';

function createData(Profile, studentName, date, Time, Level, Status) {
  return { Profile, studentName, date, Time, Level, Status };
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};


const buttonStyle = {
  color: 'orange',
  borderColor: 'orange',
  textTransform: 'none', // To prevent automatic capitalization
  borderRadius: '12px', // Set the desired border radius
};


const rows = [
  createData(<Avatar alt="Profile Image" src={profileImage} />, 'John Doe', '20 Apr 2023', '10:00 to 11:00', 5, <Typography variant="subtitle1"  color="#28C76F">Promoted</Typography>),
  createData(<Avatar alt="Profile Image" src={profileImage} />, 'Monica Geller', '20 Apr 2023', '10:00 to 11:00', 5, <Typography variant="subtitle1"  color="#FF9F43">Demoted</Typography>),
  createData(<Avatar alt="Profile Image" src={profileImage} />, 'Chandler Bing', '20 Apr 2023', '10:00 to 11:00', 5, <Typography variant="subtitle1"  color="#28C76F">Promoted</Typography>),
  createData(<Avatar alt="Profile Image" src={profileImage} />, 'Joey Tribbiani', '20 Apr 2023', '10:00 to 11:00', 5, <Typography variant="subtitle1"  color="red">Declined</Typography>),
  createData(<Avatar alt="Profile Image" src={profileImage} />, 'Phoebe Buffay', '20 Apr 2023', '10:00 to 11:00', 5, <Typography variant="subtitle1"  color="#28C76F">Promoted</Typography>),
  createData(<Avatar alt="Profile Image" src={profileImage} />, 'Janice Wheeler', '20 Apr 2023', '10:00 to 11:00', 5, <Typography variant="subtitle1"  color="red">Declined</Typography>),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>
              <Typography variant="subtitle1" fontWeight="bold">Profile</Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant="subtitle1" fontWeight="bold">Student name</Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant="subtitle1" fontWeight="bold">Date</Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant="subtitle1" fontWeight="bold">Time</Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant="subtitle1" fontWeight="bold">Level</Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant="subtitle1" fontWeight="bold">Status</Typography>
            </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.studentName}>
              <TableCell>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {row.Profile}
                </div>
              </TableCell>
              <TableCell align="center">{row.studentName}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.Time}</TableCell>
              <TableCell align="center">{row.Level}</TableCell>
              <TableCell align="center">{row.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
