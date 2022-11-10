import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { SetStateAction, useState } from "react";
import { BasicTable } from "../../components/Tables/BasicTable/BasicTable";

// Get the list from API
const roles = [
  {
    value: "student",
    label: "Student",
  },
  {
    value: "practitioner",
    label: "Pactitioner",
  },
  {
    value: "orphan",
    label: "Orphan",
  },
];

export default function UserRegistration() {
  const [reason, setReason] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setReason(event.target.value);
  };

  return (
    <Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h6" padding={2}>
          Medi Agency CA - User Registration
        </Typography>
        <Grid container spacing={3} width={0.5}>
          <Grid item xs={12}>
            <TextField
              label="First Name"
              value=""
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              value=""
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Username"
              value=""
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Password"
              value=""
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Confirm Password"
              value=""
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Roles"
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
              }}
              fullWidth
              variant="standard"
            >
              {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
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
            <BasicTable data={[]} headings={['First Name', 'Last Name', 'Username', 'Roles', 'Status']}/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
