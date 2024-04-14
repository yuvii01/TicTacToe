import React, { useContext, useEffect, useRef } from 'react';
import { GiCrossMark } from "react-icons/gi";
import { FaRegCircle } from "react-icons/fa";
import { MainContext } from '../COntext/Context';




const Tictactoe = () => {


  



    const {lock, setLock, count, setCount, data,setData, Winner } = useContext(MainContext);

    useEffect(
        ()=>{



setTimeout(
    ()=>{
checkWin()
    },[100]
)

        },[count]
    )

   async function toggle(e, num){
     
     
      if(lock){
          return 
      }
      else{
          if(count%2 == 0){
             e.target.innerHTML = `X`;
               data[num] = 'x';
              await setData(data);
               await setCount(count + 1);
          }
          else{
            e.target.innerHTML = `O`;
            data[num] = 'o';

           await  setData(data);
          
             await  setCount(count+1);
          }

      }
    }


    const checkWin = () =>{
        if(data[0]==data[1] && data[1]==data[2] && data[2]!="" ){
 Winner.innerHTML = `${data[2] } Won`;
alert(`${data[2]} won`)
        }
        else  if(data[0]==data[3] && data[3]==data[6] && data[6]!="" ){
            setLock(true)
            alert(`${data[6]} won`)
                    }
                    else  if(data[0]==data[4] && data[4]==data[8] && data[8]!="" ){
                        setLock(true)
                        alert(`${data[8]} won`)
                                }   
                                
                                
                                else  if(data[1]==data[4] && data[4]==data[7] && data[7]!="" ){
                                    setLock(true)
                                    alert(`${data[7]} won`)
                                            }


                                            else  if(data[2]==data[5] && data[5]==data[8] && data[8]!="" ){
                                                setLock(true)
                                                alert(`${data[8]} won`)
                                                        }


                                                        else  if(data[2]==data[4] && data[4]==data[6] && data[6]!="" ){
                                                            setLock(true)
                                                            alert(`${data[6]} won`)
                                                                    }



                                                                    else  if(data[3]==data[4] && data[4]==data[5] && data[5]!="" ){
                                                                        setLock(true)
                                                                        alert(`${data[5]} won`)
                                                                                }


                                                                                else  if(data[6]==data[7] && data[7]==data[8] && data[8]!="" ){
                                                                                    setLock(true)

                                                                                    alert(`${data[8]} won`)
                                                                                            }
    }
    return (
        <div>
            <div className='grid grid-cols-3 w-[540px] mx-auto my-10 gap-3'>


            <div onClick={(e)=>{toggle(e,0)}}  className='cursor-pointer relative z-[100] w-full h-[150px] text-5xl text-center pt-[45px]  border border-gray-600 text-white bg-gray-800 rounded-lg'> </div>
            <div onClick={(e)=>{toggle(e,1)}}  className='cursor-pointer relative z-[100] w-full h-[150px] text-5xl text-center pt-[45px] border border-gray-600 bg-gray-800  text-white rounded-lg'> </div>
            <div onClick={(e)=>{toggle(e,2)}}  className='cursor-pointer relative z-[100] w-full h-[150px] text-5xl text-center pt-[45px] border border-gray-600 bg-gray-800   text-white rounded-lg'> </div>
            <div onClick={(e)=>{toggle(e,3)}}  className='cursor-pointer relative z-[100] w-full h-[150px] text-5xl text-center pt-[45px] border border-gray-600 bg-gray-800  text-white rounded-lg'> </div>
            <div onClick={(e)=>{toggle(e,4)}}  className='cursor-pointer relative z-[100] w-full h-[150px] text-5xl text-center pt-[45px] border border-gray-600 bg-gray-800  text-white rounded-lg'> </div>
            <div onClick={(e)=>{toggle(e,5)}}  className='cursor-pointer relative z-[100] w-full h-[150px] text-5xl text-center pt-[45px] border border-gray-600 bg-gray-800  text-white rounded-lg'> </div>
            <div onClick={(e)=>{toggle(e,6)}}  className='cursor-pointer relative z-[100] w-full h-[150px]  text-5xl text-center pt-[45px] border border-gray-600 bg-gray-800  text-white rounded-lg'> </div>
            <div onClick={(e)=>{toggle(e,7)}}  className='cursor-pointer relative z-[100] w-full h-[150px] text-5xl text-center pt-[45px] border border-gray-600 bg-gray-800  text-white rounded-lg'> </div>
            <div onClick={(e)=>{toggle(e,8)}}  className='cursor-pointer relative z-[100] w-full h-[150px] text-5xl text-center pt-[45px] border border-gray-600 bg-gray-800  text-white rounded-lg'> </div>



            </div>
        </div>
    );
}



const Box = () =>{
    return (
        <div className='cursor-pointer relative z-[100] w-full h-[150px] border border-gray-600 bg-gray-800 rounded-lg'>
    
        </div>
    );
    }



export default Tictactoe;




{/* <GiCrossMark />
<FaRegCircle /> */}