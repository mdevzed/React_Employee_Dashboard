import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MediaCard from './components/employeeCard';
import ContainedButtons from './components/containedButton';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <MediaCard/> 
      <ContainedButtons/>
    </div>
  )
}

export default App
