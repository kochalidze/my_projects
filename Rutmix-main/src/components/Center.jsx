import React, { useState } from 'react'
import { songs } from '../assets/songs'
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';


const Center = ({setSongNumber, setArtist, setSong, allSong}) => {
    const [favourite, setFavourite] = useState(() => {
        const saved = localStorage.getItem('favourite');
        return saved ? JSON.parse(saved) : [];
    });

  return (
    <div className='ml-[17vw] mr-[20vw] pt-[0vw] p-[2vw]'>
        <a href="https://www.temu.com/" className="overflow-clip flex items-center h-[25vw] rounded-2xl border border-white/20 opacity-85 shadow-md my-[2vw]" target='blank'><img src="https://www.nextsmartship.com/wp-content/uploads/2024/06/a-comprehensive-guide-to-temu-shipping-time.jpg" alt="" /></a>
        
        <h2 className='text-[2vw] font-semibold mb-[1vw]'>Artists</h2>
        <div className='flex gap-[2vw] text-[1.3vw]'>
            <Link to='/artist' onClick={() => setArtist('Eminem')}>
                <img src="https://www.billboard.com/wp-content/uploads/2024/07/eminem-hwof-2020-billboard-1548.jpg" alt="Eminem" className='w-[10vw] h-[10vw] object-cover rounded-full hover:scale-105 hover:ring-2 hover:ring-green-300 transition-all duration-300'/>
            </Link>

            <Link to='/artist' onClick={() => setArtist('Adele')} className='flex gap-[1vw] items-center'>
                <img src="https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png" alt="Adele" className='w-[10vw] h-[10vw] object-cover rounded-full hover:scale-105 hover:ring-2 hover:ring-green-300 transition-all duration-300'/>
            </Link>

            <Link to='/artist' onClick={() => setArtist('Coldplay')} className='flex gap-[1vw] items-center'>
                <img src="https://seatgeekimages.com/performers-landscape/coldplay-827fc3/32/1100x1900.jpg?auto=webp&width=3840&quality=75" alt="Coldplay" className='w-[10vw] h-[10vw] object-cover rounded-full hover:scale-105 hover:ring-2 hover:ring-green-300 transition-all duration-300'/>
            </Link>

            <Link to='/artist' onClick={() => setArtist('Tupac Shakur')} className='flex gap-[1vw] items-center'>
                <img src="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/11/05/1331757981429_2/tupac-shakur" alt="Tupac Shakur" className='w-[10vw] h-[10vw] object-cover rounded-full hover:scale-105 hover:ring-2 hover:ring-green-300 transition-all duration-300'/>
            </Link>

            <Link to='/artist' onClick={() => setArtist('The Beatles')} className='flex gap-[1vw] items-center'>
                <img src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg" alt="The Beatles" className='w-[10vw] h-[10vw] object-cover rounded-full hover:scale-105 hover:ring-2 hover:ring-green-300 transition-all duration-300'/>
            </Link>
        </div>

        <h2 className='text-[2vw] font-semibold mt-[2vw] mb-[1vw]'>Songs</h2>

        <div className='flex flex-wrap gap-[2vw]'>
            {allSong.map((e, id) => <div id={id} key={id}>
                <img src={e.cover} className='w-[10vw] h-[10vw] object-cover rounded-xl shadow-xl shadow-black cursor-pointer mb-[0.5vw] hover:scale-105 hover:ring-2 hover:ring-green-300 transition duration-300' onClick={() => {
                    setSongNumber(e.id - 1);

                    const updatedSongs = song.map((songItem) =>
                    songItem.id === e.id ? { ...songItem, count: songItem.count + 1 } : songItem
                    );

                    setSong(updatedSongs);
                    localStorage.setItem('songs', JSON.stringify(updatedSongs));
                }
            }/>
                <p className='text-[1.04vw] font-bold'>{e.title}</p>
                <p className='text-[0.8vw]'>{e.artist}</p>
                <FaStar className={`float-right -translate-y-[1vw] cursor-pointer ${favourite.some(song => song.title === e.title) ? 'text-yellow-400' : 'text-[#313131]'} text-[1.2vw] origin-center transition-all duration-200`}
                    onClick={() => {
                        setFavourite(prev => {
                            const isFav = prev.some(song => song.title === e.title);

                            const updated = isFav
                            ? prev.filter(song => song.title !== e.title)
                            : [...prev, e];

                            localStorage.setItem('favourite', JSON.stringify(updated));
                            return updated;
                        });
                    }}
                />
            </div>)}
        </div>
    </div>
  )
}

export default Center