import React, { useState, useEffect } from 'react'
import { songs } from '../assets/songs'
import { artistInfo } from '../assets/artistsInfo'

const Artist = ({ artist, setSongNumber }) => {
  const [song, setSong] = useState([])

  useEffect(() => {
    if (artist === 'Eminem') {
      setSong(songs.slice(0, 5))
    } else if (artist === 'Adele') {
      setSong(songs.slice(5, 10))
    } else if (artist === 'Coldplay') {
      setSong(songs.slice(10, 15))
    } else if (artist === 'Tupac Shakur') {
      setSong(songs.slice(15, 20))
    } else if (artist === 'The Beatles') {
      setSong(songs.slice(20, 25))
    }
  }, [artist])

  const info = artistInfo[artist]

  return (
    <div className='ml-[17vw] mr-[20vw] pt-[0vw] p-[2vw]'>
      <div className='mt-[4vw] mb-[2.1vw]'>
        <img src={info.image} alt={info.name} className='w-[12vw] h-[12vw] object-cover rounded-full shadow-lg float-left m-[1vw]'/>
        <h1 className='text-[2.5vw] font-bold mb-[0.5vw] translate-x-[1.5vw]'>{info.name}</h1>
        <p className='text-[1.05vw] leading-relaxed text-neutral-300 text-center'>{info.description}</p>
      </div>

      <h2 className='text-[1.6vw] font-semibold mb-[1vw]'>Songs:</h2>

      <div className='flex flex-wrap gap-x-[2vw] gap-y-[2.5vw]'>
        {song.map((e, i) => (
          <div key={i} className='cursor-pointer group' onClick={() => setSongNumber(e.id - 1)}>
            <img src={e.cover} alt={e.title} className='w-[10vw] h-[10vw] object-cover rounded-xl shadow-xl shadow-black  hover:scale-105 hover:ring-2 hover:ring-green-300 transition duration-300'/>
            <p className='text-[1.04vw] font-bold mt-[0.3vw]'>{e.title}</p>
            <p className='text-[0.8vw] text-neutral-400'>{e.artist}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Artist