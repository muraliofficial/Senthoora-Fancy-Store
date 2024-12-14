import React, { useContext, useState } from 'react'
import { Context } from './Test'

export default function Basic() {
    const [singIn,setSing]=useContext(Context)
  return (
    <div>
        <h1>welcome...</h1>
<button onClick={()=>setSing(!singIn)}>
    {singIn ? "SINGIN":"SINGOUT"}
</button>
    </div>
  )
}
