import React, { useState } from 'react'
import Nav from './Nav'

export const Context = React.createContext();
export default function Test() {
  const [Sing,setSingIN]=useState(true)
  return (
    <div>
     <Context.Provider value={[Sing,setSingIN]}>
     <Nav/>
     <h1>{Sing ? "SINGIN ":"SINGOUT"}</h1>
     
     </Context.Provider>

    </div>
  )
}
