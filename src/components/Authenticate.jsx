import { useState } from "react";
export default function Authenticate({token}) {
const [error, setError] = useState(null);
const [successMessage, setSuccessMessage] = useState(null);
  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
         {
           method: "GET",
           headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${token}`,
           }  
          }
       ); 
       const result = await response.json();
            //console.log(result);
            setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }
  //console.log(handleClick);
    return (
    <>
    <h2>Authenticate!</h2>
    {successMessage && <p>{successMessage}</p>}
    {error && <p>{error}</p>}
    <button onClick={handleClick}>Authenticate Token!</button>
      
</>
    );
  }