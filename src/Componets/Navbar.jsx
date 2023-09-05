import React from 'react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { useTema } from '../context/Tema';

export default function Navbar() {
  const { color, setColor, tema, setTema } = useTema();

  const trocarTema = () => {
    tema === 'white'
      ? setTema('bg-gradient-to-r from-red-400 to-zinc-500') || setColor('text-white')
      : setTema('white') || setColor('black');
  };

  return (
    <div
      className={`w-[100%] h-[10vh] border-b-[3px] ${tema} ${color} transition-colors duration-1000`}
    >
      <ul className='flex items-center justify-between h-[100%] px-11'>
        <li>Home</li>
        <li>Contatos</li>
        <li>
          <button onClick={trocarTema}>
            {tema === 'white' ? (
              <div className="transition-opacity duration-300 opacity-100 hover:opacity-75">
                <BsFillSunFill size={25} />
              </div>
            ) : (
              <div className="transition-opacity duration-300 opacity-100 hover:opacity-75">
                <BsFillMoonStarsFill size={25} />
              </div>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
}
