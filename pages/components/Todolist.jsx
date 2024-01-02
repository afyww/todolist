import React from 'react'
import Link from 'next/link'

const Todolist = () => {
  return (
<div className='mx-auto space-y-4 my-auto bg-white p-3 xl:p-24 rounded-3xl'>
    <h1 className='text-6xl font-bold'>Todo List</h1>
    <div className='gap-3 flex'>
    <input placeholder='Add your new todo w-full' className='border-2 p-2 w-full' type="text" />
    <button className='text-light bg-blue-700 p-3 text-white'>Add</button>
    </div>
    <div>
    <div className='space-y-3'>
        <div className='flex justify-between'>       
        <li className='bg-gray-400 w-full p-3'>Making Website
        </li>
        <Link className='text-light bg-blue-700 p-3 text-white' href="/edit">Edit</Link>
        </div>
        <div className='flex justify-between'>       
        <li className='bg-gray-400 w-full p-3'>Making Website
        </li>
        <Link className='text-light bg-blue-700 p-3 text-white' href="/edit">Edit</Link>
        </div>
        <div className='flex justify-between'>       
        <li className='bg-gray-400 w-full p-3'>Making Website
        </li>
        <Link className='text-light bg-blue-700 p-3 text-white' href="/edit">Edit</Link>
        </div>
        <div className='flex justify-between'>       
        <li className='bg-gray-400 w-full p-3'>Making Website
        </li>
        <Link className='text-light bg-blue-700 p-3 text-white' href="/edit">Edit</Link>
        </div>

    <button className='text-light bg-red-700 w-full p-3 text-white'>Clear All</button>
    </div>
    </div>
</div> )
}

export default Todolist