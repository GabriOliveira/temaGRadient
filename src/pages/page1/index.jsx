import React from 'react'
import { useTema } from '../../context/Tema';
import Navbar from '../../Componets/navbar';

export default function Page1() {

    const { color, setColor, tema, setTema } = useTema()

    return (
        <>
            <Navbar />
            <div className={`App w-screen h-[100vh] flex items-center flex-col justify-center gap-24 ${color} ${tema} transition-colors duration-1000 `}>

                <h1 className='text-4xl'>Hello word</h1>
            </div>

        </>

    );
}
