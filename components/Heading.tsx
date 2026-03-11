import React from 'react'

const Heading = () => {
  return (
    <div className="container">
        <div className="flex w-full justify-between uppercase tracking-[3px] text-xs text-gray-500 scale-y-120 my-3 ">
            <p>issue no. 01</p>
            <p>date</p>
            <p>magazine</p>
        </div>
        <hr className="h-1 w-full bg-black" />
    </div>
  )
}

export default Heading