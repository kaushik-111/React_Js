import React, { useState } from 'react'

export default function DymanicForm() {
    const [name , setName] = useState("");
    const [password , setPassword] = useState("");
    const [email , setEmail] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");

    const [error , setError] = useState("");

    const phoneRegex = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!phoneRegex.test(phoneNumber)) {
        setError("phone Number is incorrect");
      }else{
        setError("");
      }
    }

  return (
    <div>
      <h1>DynamicFromCom</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
        <input type="password" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)}/>
        <input type="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
        <input type="phoneNumber" placeholder='Enter Your Phone Number' onChange={(e) => setPhoneNumber(e.target.value)}/>
        {
          error && <span>{error}</span>
        }
        <input type="submit"/>
      </form>
    </div>
  )
}
