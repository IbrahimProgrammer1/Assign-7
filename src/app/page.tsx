import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white' >


      <h1 className='text-6xl font-bold text-center'>Client and Server-Side Data Fetching</h1>

      <div className='flex justify-between items-center p-12'>

      <button className='text-3xl border-2 border-black px-7 py-3 rounded bg-blue-600 hover:bg-blue-500 font-semibold text-white'><a href="/client">Client</a></button>
      <br />
      <button className='text-3xl border-2 border-black px-6 py-3 rounded bg-blue-600 hover:bg-blue-500 font-semibold text-white'><a href="/server">Server</a></button>
      </div>
      
    </div>
  )
}

export default page