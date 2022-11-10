import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { SetStateAction, useState } from "react";
import moment from "moment";
import { BasicTable } from "../../components/Tables/BasicTable/BasicTable";

// Get the list from API
const currencies = [
  {
    value: "a",
    label: "reddy",
  },
  {
    value: "b",
    label: "prasanth",
  },
  {
    value: "c",
    label: "setti",
  },
];

const reasons = [
  {
    value: "low_income",
    label: "Low Income Family",
  },
  {
    value: "homeless",
    label: "HomeLess",
  },
  {
    value: "orphan",
    label: "Orphan",
  },
];

export default function ServiceEntry() {
  const [reason, setReason] = useState("");
  const [currency, setCurrency] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCurrency(event.target.value);
  };

  return (
    <Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h6" padding={2}>
          Medi Agency CA - Service Entry
        </Typography>
        <Grid container spacing={3} width={0.5}>
          <Grid item xs={12}>
            <TextField
              select
              label="Client"
              value={currency}
              onChange={handleChange}
              fullWidth
              variant="standard"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Student"
              value={currency}
              onChange={handleChange}
              fullWidth
              variant="standard"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Service Type"
              value={currency}
              onChange={handleChange}
              fullWidth
              variant="standard"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Reason For Service"
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
              }}
              fullWidth
              variant="standard"
            >
              {reasons.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="date"
              fullWidth
              variant="standard"
              defaultValue={moment().format("yyyy-mm-dd")}
              onChange={(e) =>
                console.log(`your input's value is: ${e.target.value}`)
              }
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          width={0.5}
          justifyContent="flex-end"
          marginTop={4}
        >
          <Button variant="outlined" sx={{ marginRight: 1}}>Cancel</Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Box>
      <Box display="flex">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          <Grid item xs={12} width={0.8}>
            <BasicTable data={[]} headings={['Client', 'Student', 'Service Type', 'State']}/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
