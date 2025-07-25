import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({setArtist}) => {
  return (
    <div className='h-[98.2vh] w-[17vw] bg-[#2D2D2D] p-[1vw] fixed glassmorph rounded-[10px]'>
        <Link to={'/center'} className='text-[2.3vw] font-medium mb-[2vw]'>Rythmix</Link>

        <div className='w-[15vw] h-[0.3vw] bg-[#AAAAAA] rounded-full my-[1vw]'></div>

        <div className='text-[#AAAAAA] font-medium'>
            <div className='flex flex-col gap-[1.5vw] text-[1.3vw]'>
                <h2 className='text-[1.7vw]'>Artists</h2>

                <Link to='/artist' onClick={() => setArtist('Eminem')} className='flex gap-[1vw] items-center'>
                    <img src="https://www.billboard.com/wp-content/uploads/2024/07/eminem-hwof-2020-billboard-1548.jpg" alt="" className='w-[3.7vw] h-[3.7vw] object-cover rounded-full'/>
                    <p>Eminem</p>
                </Link>
                
                <Link to='/artist' onClick={() => setArtist('Adele')}  className='flex gap-[1vw] items-center'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png" alt="" className='w-[3.7vw] h-[3.7vw] object-cover rounded-full'/>
                    <p>Adele</p>
                </Link>
                
                <Link to='/artist' onClick={() => setArtist('Coldplay')} className='flex gap-[1vw] items-center'>
                    <img src="https://seatgeekimages.com/performers-landscape/coldplay-827fc3/32/1100x1900.jpg?auto=webp&width=3840&quality=75" alt="" className='w-[3.7vw] h-[3.7vw] object-cover rounded-full'/>
                    <p>Cold Play</p>
                </Link>
                
                <Link to='/artist' onClick={() => setArtist('Tupac Shakur')} className='flex gap-[1vw] items-center'>
                    <img src="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/11/05/1331757981429_2/tupac-shakur" alt="" className='w-[3.7vw] h-[3.7vw] object-cover rounded-full'/>
                    <p>Tupac</p>
                </Link>
                
                <Link to='/artist' onClick={() => setArtist('The Beatles')} className='flex gap-[1vw] items-center'>
                    <img src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg" alt="" className='w-[3.7vw] h-[3.7vw] object-cover rounded-full'/>
                    <p>Beatles</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SideBar