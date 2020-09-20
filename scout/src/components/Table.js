import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Company, Location, Position, Date) {
    return { Company, Location, Position, Date};
}

const rows = [
    createData('Google', 'San Francisco', 'SWE Intern', '9/20/2020'),
    createData('Facebook', 'Chicago', 'SWE New Grad', '9/20/2020'),
    createData('Netflix', 'New York', 'SWE Intern', '9/20/2020'),
    createData('Apple', 'Los Angeles', 'SWE Co-op', '9/20/2020'),
    createData('Microsoft', 'Seattle', 'SWE New Grad', '9/20/2020'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer id= "table" component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Date Posted</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.Company}</TableCell>
              <TableCell>{row.Location}</TableCell>
              <TableCell>{row.Position}</TableCell>
              <TableCell>{row.Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
