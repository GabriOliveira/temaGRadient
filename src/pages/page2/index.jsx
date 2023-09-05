import React, { useState } from 'react';
import "./page2.css"
import { useTema } from '../../context/Tema';

export default function ThemeToggle() {
    const [darkModeActive, setDarkModeActive] = useState(false);

    const { color, setColor, tema, setTema } = useTema()

    const toggleDarkMode = () => {
        setDarkModeActive(!darkModeActive);
    };

    const gradientClass = darkModeActive ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700' : 'bg-gradient-to-br from-white via-gray-200 to-gray-100';

    return (
        <div className={`relative ${gradientClass} w-screen h-screen overflow-hidden transition-all duration-1000 ease-in-out transform ${darkModeActive ? 'scale-110' : ''}`}>
            <div className={`w-screen  h-screen flex items-center justify-evenly flex-col z-10 transition-all duration-1000 ease-in-out`}>
                <h1 className={`text-3xl ${darkModeActive ? 'text-white' : 'text-black'}`}>DarkMode</h1>

                <p className={`text-lg ${darkModeActive ? 'text-white' : 'text-black'}`}>
                    Este é um exemplo de conteúdo que pode ser exibido na tela.
                </p>
                <button className={`px-4 py-2 mt-4 ${darkModeActive ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} rounded-full hover:bg-gray-600 hover:text-white transition-all duration-300 ease-in-out`} onClick={toggleDarkMode}>
                    Clique em mim
                </button>
            </div>
        </div>
    );
}
