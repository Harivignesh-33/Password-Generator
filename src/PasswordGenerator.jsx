import React, { useState } from 'react'

export const PasswordGenerator = () => {
  const [length, setLength] =useState();
  const [includeUppercase , setincludeUppercase] =useState(true);
  const [includeLowercase , setincludeLowercase] =useState(true);
  const [includeNumbers , setincludeNumbers] =useState(true);
  const [includeSymbols , setincludeSymbols] =useState(true);
  const [password , setPassword] = useState("")

  const generatePassword = () =>{
    let charset= "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+=";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyToCliboard = () =>{
    navigator.clipboard.writeText(password);
    alert("password copied to clipboard successfully")
}
  return (
    <div className='password-generator'>
      <h2>Strong Password Generator</h2>
      <div className="input-group">
        <label htmlFor="num">Password Length : </label>
        <input type="number"  id="num" value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
      </div>
      <div className="checkbox-group">
        <input type="checkbox"  id="upper" checked={includeUppercase} onChange={(e)=> setincludeUppercase(e.target.checked)}/>
        <label htmlFor="upper">include Uppercase</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox"  id="lower" checked={includeLowercase} onChange={(e)=> setincludeLowercase(e.target.checked)}/>
        <label htmlFor="lower">include Lowercase</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox"  id="number" checked={includeNumbers} onChange={(e)=> setincludeNumbers(e.target.checked)}/>
        <label htmlFor="number">include Numbers</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox"  id="symbol" checked={includeSymbols} onChange={(e)=> setincludeSymbols(e.target.checked)}/>
        <label htmlFor="symbol">include Symbols</label>
      </div>
      <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
      <div className="generated-password">
        <input type="text" readOnly value={password}/>
        <button className='copy-btn' onClick={copyToCliboard}>📋COPY</button>
      </div>
    </div>
  )
}
