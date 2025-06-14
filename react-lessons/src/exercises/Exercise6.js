"use client";

import React, {useState} from "react";

//Example6 : Event in Functional Component
export default function Person(){
    const [name, setName] = useState();
    const [email, setEmail] = useState("mkm@gmail.com");
    const [phoneNo, setPhoneNo] = useState("09784919517");

    const onChangeEmail = (changedEmail) => {
        setEmail(changedEmail);
    };

    const onChangePhoneNo = (event) => {
        console.log('onChangePhoneNo', event)
        setPhoneNo(event.target.value);
   };

   const onClickButton = () => {
      alert("Button 1 clicked!");
   };

   const onClickButton2 = () => {
    alert("Button 2 clicked!");
   };
   return(
    <div>
        <h1>Event in Functional Component</h1>
        <input
        value={name}
        placeholder="Enter Name"
        onChange={(event) => setName(event.target.value)}
        />

        <input
        value={email}
        placeholder="Enter Email"
        onChange={(event) => onChangeEmail(event.target.value)}
        />

        <input
        value={phoneNo}
        placeholder="Enter Phone No."
        onChange={onChangePhoneNo}
        />

        <button onClick={onClickButton}>Button 1</button>
        <button onClick={() => onClickButton2()}>Button 2</button>


    </div>
   )
}