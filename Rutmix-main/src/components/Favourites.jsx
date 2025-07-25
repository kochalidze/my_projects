import React from 'react'

const Favourites = () => {
    const favs = JSON.parse(localStorage.getItem('favourite'))

  return (
    <div className='ml-[17vw] mr-[20vw] p-[2vw] flex flex-col items-center'>
      <h2 className='text-[3vw] font-bold mb-[3vw]'>Favourites</h2>
      {favs.length ? <div className='flex flex-wrap gap-[4vw] justify-center'>
         {favs.map((e, i) => (
            <div key={i}>
                <img src={e.cover} className='w-[10vw] h-[10vw] object-cover rounded-xl shadow-xl shadow-black cursor-pointer mb-[0.5vw]' alt={e.title}/>
                <p className='text-[1.04vw] font-bold'>{e.title}</p>
                <p className='text-[0.8vw]'>{e.artist}</p>
            </div>
        ))}
      </div>: <h2 className='font-semibold text-[1.7vw] self-start'>No Favourites Yet...</h2>}
    </div>
  )
}

export default Favourites