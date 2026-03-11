import React from 'react'

const MarqueeHeader = () => {
    const arr = ['accessibility', 'next.js', 'performance', 'animation', 'frontend architecture']
  return (
    <div className=" bg-foreground text-background overflow-hidden ">
    <div className=' py-1 uppercase animate-marquee w-max flex gap-5 tracking-[2px]'>
        {
            [...arr, ...arr, ...arr].map((value, index)=>(
                <div key={index} className='flex gap-5 items-center font-body'>
                    <div>{value}</div>
                    <div className='h-1 w-1 bg-background rounded-full'></div>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default MarqueeHeader