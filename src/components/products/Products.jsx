import React, { useState } from 'react'

export default function products() {
    let namee='thara'
    const getData= (name)=>{
    console.log(name);
    console.log(useState('Tharaaaa'));

    }
  return (
    <>
    <h1> My Name Is {namee}</h1>
 <div>products</div>
 <button onClick={()=>getData("Thara'a")}>Click</button>
    </>
   
  )
}
