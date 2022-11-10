import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface BasicTableProps {
  data: any[];
  headings: string[];
}

export const BasicTable = (props: BasicTableProps) => {
  const { data, headings } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headings.map((column) => {
              return <TableCell>{column}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right">{row.item}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
