import React from 'react'
import { GiLoveMystery } from "react-icons/gi";
import { AiOutlinePercentage } from "react-icons/ai";
import { Button } from '../ui/button';
import { Input } from '../ui/input';


const Love = () => {
  return (
    <div>
         <div className="max-w-xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between mb-6">
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Male</div>
        <div className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Female</div>
      </div>
      {/* <Input className="mb-4 px-4 py-2 border rounded w-full" placeholder="Name" type="text" /> */}
      <h3 className='font-bold text-gray-500 mb-3'>Relation Type: Love</h3>

      <Input className="mb-4 px-4 py-2 border rounded w-full" placeholder="His Name" type="text" />
      <Input className="mb-4 px-4 py-2 border rounded w-full" placeholder="Her Name" type="text" />

      <div className="flex justify-center mt-6">
        <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
          Calculate
          <GiLoveMystery className="ml-2 text-white" />
        </Button>
      </div>
      <div className="mt-6 flex justify-center">
        <div className="flex items-center space-x-2">
<div className='p-2 border rounded w-28 text-center flex justify-center items-center gap-2'>Result<AiOutlinePercentage className="text-gray-500" /></div>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Love