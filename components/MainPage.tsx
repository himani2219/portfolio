import React from 'react'

const MainPage = () => {
    const arr = [
        {title:'featured', link:'#featured'},
        {title:'projects', link:'#projects'},
        {title:'about', link:'#about'},
        {title:'contact', link:'#contact'},
    ]
  return (
    <section className="container">
        <div className="flex flex-col justify-center items-center my-12 gap-3">
            <div className="line bg-red-500 w-15 h-2 my-6"></div>
            <h1 className="font-headline text-8xl font-extrabold text-center">THE <br /><span className='text-red-600 italic'>Himani</span><br />JOURNAL</h1>
            <div className="flex items-center gap-3 mt-5">
                <div className="bg-gray-500 w-15 h-0.5"></div>
                <div className="text-gray-500 tracking-widest uppercase text-xs">full stack developer</div>
                <div className="bg-gray-500 w-15 h-0.5"></div>
            </div>
        </div>
        <div className="flex flex-col gap-0.5">
            <div className="w-full h-0.5 bg-black"></div>
            <div className="w-full h-0.5 bg-black"></div>
        </div>
        <div className="flex justify-center items-center my-5">
            <div className="flex gap-8">
                {
                    arr.map((item, index) =>(
                        <a key={index} href={item.link} className='uppercase tracking-wider text-sm'>{item.title}</a>
                    ))
                }
            </div>
        </div>
        <hr className="h-[0.5px] w-full bg-gray-400 border-0" />
    </section>
  )
}

export default MainPage