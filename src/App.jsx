import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MediaCard from './components/employeeCard';
import Container from '@mui/material/Container';

function App() {
  const [count, setCount] = useState(0);
  return (
    <Container fixed>
      <MediaCard/> 
    </Container>
  )
}

export default App
