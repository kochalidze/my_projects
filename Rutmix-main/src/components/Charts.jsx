import React from 'react'

const Charts = ({song}) => {
    let sortedSong = [...song].sort((a, b) => b.count - a.count).slice(0, 10);
    console.log(sortedSong)

  return (
    <div className='ml-[17vw] mr-[20vw] pt-[0vw] p-[2vw] flex flex-col items-center gap-[1vw] mt-[2vw]'>
        {sortedSong.map((e, i) => 
            <div key={e.id} className={`flex ${i == 0 ? 'yellow-glassmorph w-[50vw] h-[9vw]' : 'glassmorph'} items-center p-[1vw] w-[40vw] rounded-xl gap-[1vw] `}>
                <p className={` ${i == 0 ? 'text-[3vw]' : ''} text-[2vw] font-bold`}>{i + 1}.</p>
                <img src={e.cover} alt="" className={` ${i == 0 ? 'w-[7vw]' : ''} w-[5vw] rounded-2xl`}/>
                <h1 className={`${i == 0 ? 'text-[2.5vw]' : ''} text-[1.5vw] font-bold`}>{e.title}</h1>
                <p className={`text-[1.1vw] ${i == 0 ? ' text-[1.7vw] font-semibold' : ''} text-[#aaaaaa]`}>{e.artist}</p>
            </div>
        )}
    </div>
  )
}

export default Charts