import React, { useContext, useRef } from 'react'
import Tictactoe from './Components/Tictactoe'
import { MainContext } from './COntext/Context'



export default function App() {

 const {Winner, lock} = useContext(MainContext);
  return (

    <div className='text-center w-screen  bg-gray-900 h-screen'>
      <div className='flex gap-5 items-center text-center w-full justify-center'>
      <div ref={Winner}  className={`${lock==true? 'text-white text-5xl ' : 'text-gray-900  '}`}>
 Won
      </div>
    <div className='text-white text-5xl font-bold py-10'>
      TIC-TAC-<span className='text-[lightgreen]'>TOE</span>
    </div>
      </div>
 <Tictactoe/>
    </div>
  )
}



