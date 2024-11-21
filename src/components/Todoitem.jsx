import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

function Todoitem({text,id,isComplete,deleteTodo,toggle}) {
  return (
    <div className='flex items-center h-12 my-4 gap-2 bg-gray-200 rounded-full'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer gap-1'>
         {isComplete ?(
        <FaCheckCircle className='text-orange-500  text-3xl ' />
    ):(
        <MdOutlineRadioButtonUnchecked className='text-gray-500  text-3xl ' />
    )
    } 
     
            <p className={`text-3xl ${isComplete ? "line-through":""}`}>{text}</p>
        </div>

        

        <RiDeleteBinLine  onClick={()=>{deleteTodo(id)}} className='text-3xl pr-3 cursor-pointer'/>

    </div>
  )
}

export default Todoitem