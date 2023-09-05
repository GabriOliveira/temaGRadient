import React, { createContext, useContext, useState } from 'react'



const TemaContext  = createContext()

export default function TemaProvider({children}) {

    const [tema,setTema] = useState('white')
    const [color,setColor] = useState('black')

  return (
    <TemaContext.Provider value={{tema,setTema,color,setColor}}>
        {children}
    </TemaContext.Provider>
  )
}

export function useTema(){
  const Tema = useContext(TemaContext)
  return Tema;
}
