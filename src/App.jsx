import { useState } from 'react'
import './App.css'
import MediaCard from './components/employeeCard';
import Data from './data/data.js'
import {Switch, Button, Box, Stack, Typography, Container} from '@mui/material';


function App() {
  const [showOnLeave, setShowOnLeave] = useState(false);
  console.log(showOnLeave);
  const filteredData = showOnLeave ? Data.filter(employee => employee.onLeave) : Data;

  const toggleOnLeave = (event) => {showOnLeave ? setShowOnLeave(false) : setShowOnLeave(true)};

  return (
    <Container fixed>
      <Box>
        <Typography component="h1" variant="h4" gutterBottom>
          Employee Dashboard
        </Typography>
      </Box>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>On Leave Employees</Typography>
        <Switch defaultChecked onClick={toggleOnLeave} />
        <Typography>All Employees</Typography>
      </Stack>
      <MediaCard employee={filteredData}/>
      {console.log(filteredData)}
    </Container>
  )
}

export default App
