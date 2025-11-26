import React from 'react'

const Loading = () => {
  return (
    <div className='w-screen h-screen'>
        <div className="flex justify-center items-center w-48 h-48">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
    </div>
  )
}

export default Loading