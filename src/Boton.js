import { useState } from 'react';

export default function Boton(props) {
  const [cont, setCont] = useState(0);

  return (
    <div className='flex flex-col items-center mx-20'>
      <button 
        className='text-white rounded-lg p-2 text-xl bg-orange-800 hover:bg-white hover:text-orange-800' 
        onClick={() => (cont <100 && cont >=0 ? setCont(props.suma ? cont + 1 : cont - 1) : setCont(cont))}>
        {props.cartel}
      </button>
      <p className='text-white text-3xl'>{cont}</p>
    </div>
  );
}
