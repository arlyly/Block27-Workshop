import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'


function App() {
  const [token, setToken] = useState(null);
  return (
    <div>
        <h2>Block 27 - Authentication</h2>
        <Authenticate token={token} setToken={setToken} />
        <SignUpForm token={token} setToken={setToken} />

    </div>
 
  );
}

export default App
