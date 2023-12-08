"use client"
import React, { useState } from 'react'
const page = () => {
  const [title, settitle] = useState("")
  const [Name, setName] = useState("")
  const [maintask, setmaintask] = useState([])
  const deletehandler = (i) => {
    let copytask = [...maintask]
    copytask.splice(i, 1)
    setmaintask(copytask)
  }

  const submithandler = (e) => {
    e.preventDefault()
    setmaintask([...maintask, { Name, title }])
    setName("")
    settitle("")
  }
  let rendertask = <h2 className='text-white font-semibold'> no task available </h2>;

  if (maintask.length > 0) {
    rendertask = maintask.map((t, i) => {
      return (
        <li key={i} className='flex justify-between'>
          <div className=''>

            <div className="">
               <h6 className='my-3  text-white font-bold' >{t.Name} </h6>
              <h6 className='my-3 text-white font-thin '>{t.title} </h6>
            </div>

          </div>

          <button
            onClick={() => { deletehandler(i) }} className='bg-red-700 text-white p-4 rounded-sm my-4'>Delete</button>

        </li>
      );

    })

  }



  return (
    <div className='bg-zinc-800  overflow-hidden'><div className=' flex justify-center w-full items-center'> <h1 className="text-xl font-extrabold uppercase text-center my-2 px-6 py-2 rounded text-zinc-100 ">to-do list </h1></div>
      <div className="w-full  m-8 p-6 h-full flex justify-center items-center ">
        <form className='flex flex-col bg-gradient-to-br from-gray-500 z-3 p-1 shadow-xl rounded-xl shadow-zinc-300 ' onSubmit={submithandler}>
          <input placeholder='enter your name :' type="text" className='bg-white text-black p-3  m-8   uppercase border-2 border-zinc-950 rounded '
            value={Name}
            onChange={(e) => {
              setName(e.target.value)

            }

            } />
          <input placeholder='enter your task :' type="text" className='bg-white text-black p-3 m-8   uppercase border-2 border-zinc-950 rounded '
            value={title}
            onChange={(e) => {
              settitle(e.target.value)

            }

            } />
          <button className='m-4 p-2 border-black border-2 rounded-md z-10 bg-black text-white font-semibold' > Add </button>
        </form>

      </div>
      <div className="bg-zinc-900 p-8 uppercase  ">
        <ul >
          {rendertask} </ul> </div>
    </div>

  )
}

export default page