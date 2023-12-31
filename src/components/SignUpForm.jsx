import { useState } from 'react'


export default function SignUpForm({setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [signUp, setSignUp] = useState(null);
    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Hello 👋");
        if((username.length<8) ||(password.length<8)){
            setUsername('')
            setPassword('')
            return(setError("Username and Password must be eight characters or more"))
        }
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
              { 
                method: "POST", 
                headers: { 
                  "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                  username: username, 
                  password
                }) 
              })
            const result = await response.json();
            setToken(result.token)
            console.log(result);
            console.log("Token: ", result.token)
            setUsername('')
            setPassword('')
            setSignUp(result.message)
        } catch (error) {
          setError(error.message);
        }
        
      }
    
    return (
        <div>
            <h2>Sign Up!</h2>
            {error && <p className='error'>{error}</p>}
            {signUp && <p className='success'>{signUp}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input  value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password: <input  type ="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button>Submit</button>
            </form>

        </div>

    );

}