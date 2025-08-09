import React from 'react'

interface prop
{
  message: string
}

const Component = ({message} : prop) => {
  return (
    <div className='border-4 rounded-xl bg-black'>
      <p className='text-white'>
        Current:
      </p>
      <p className='text-white'>
        {message}
      </p>
    </div>
  )
}

export default Component
