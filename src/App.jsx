import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MediaCard from './components/employeeCard';
import Container from '@mui/material/Container';
import Data from './data/data.js'
import { Button } from '@mui/material';

function App() {
  const [onLeave, setLeave] = useState(true);
  console.log(onLeave)
  return (
    <Container fixed>
      <Button variant = "contained"> On Leave </Button>
      <MediaCard employee_data = {Data} />
    </Container>
  )
}

export default App
