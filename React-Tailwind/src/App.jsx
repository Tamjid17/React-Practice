import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-white rounded-xl p-4 mb-5">
        Tailwind CSS
      </h1>
      <Card username="Card" btnText = "click me"/>
      <Card username="Rogue" btnText = "Visit me"/>
    </>
  );
}

export default App
