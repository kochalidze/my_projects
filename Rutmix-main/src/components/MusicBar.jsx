import React, { useRef, useState, useEffect } from 'react';
import { songs } from '../assets/songs';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { RiResetRightLine } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";
import { RiLoopLeftFill } from "react-icons/ri";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeDown } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";

const MusicBar = ({songNumber, setSongNumber}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [loop, setLoop] = useState(false)

  const song = songs[songNumber]; 

  useEffect(()=> {if (audioRef) audioRef.current.play(); setIsPlaying(true)}, [song])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(prev => !prev);
  };

  const handleTimeUpdate = () => {
    const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(percent);
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    if (audioRef) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  return (
    <div className="w-[20vw] h-[98.2vh] fixed right-0 bg-[#2d2d2d] flex flex-col justify-center items-center p-[1vw] glassmorph rounded-[16px]">
      <img src={song.cover} alt="cover" className={`w-full rounded-full shadow ${isPlaying && 'spin'}`} />
      <h2 className="text-[2vw] font-bold text-center mt-[2vw]">{song.title}</h2>
      <p className="text-[1.5vw] text-gray-400 mb-[2vw]">{song.artist}</p>

      <audio ref={audioRef} src={song.embedUrl} onTimeUpdate={handleTimeUpdate} loop={loop} onEnded={() => setSongNumber(prev => prev +1)}/>

      <div className='flex flex-col items-center text-[1.7vw] text-white'>
        <input type="range" value={progress} onChange={handleSeek} className="w-[18vw] m-[1vw] appearance-none rounded-lg audio" style={{ background: `linear-gradient(to right, #00FF90 ${progress}%, #444 ${progress}%)` }}/>

        

        <div className='flex w-[18vw] justify-between items-center'>
          <button onClick={() => {audioRef.current.currentTime = 0; setProgress(0)}} className='cursor-pointer hover:text-[#00FF90]'> <RiResetRightLine /> </button>

          <div className='flex text-[1.9vw] text-[#00FF90] my-[1vw]'>
            <button onClick={() => {if (songNumber == 0) setSongNumber(24); else setSongNumber(prev => prev + 1)}} className='cursor-pointer'><IoPlayBack/></button>
            <button onClick={togglePlay} className="mx-[0.8vw] text-white cursor-pointer"> {isPlaying ? <FaPause/>: <FaPlay/>} </button>
            <button><IoPlayForward onClick={() =>{if (songNumber == 24) setSongNumber(0); else setSongNumber(prev => prev + 1)}} className='cursor-pointer'/></button>
          </div>

          <a href={song.embedUrl} download className="hover:text-[#00FF90]"><IoMdDownload/></a>
        </div>
        
        <div className='flex justify-between items-center w-[18vw] mt-[1.5vw]'>
          <label htmlFor="audio" className='flex gap-[0.3vw] items-center'>
            {volume == 0 ? <FaVolumeMute onClick={() => {setVolume(1); audioRef.current.volume = 1}} className='cursor-pointer hover:text-[#00FF90]'/> : volume > 0.5 ? <FaVolumeUp onClick={() => {setVolume(0); audioRef.current.volume = 0}} className='cursor-pointer hover:text-[#00FF90]'/> : <FaVolumeDown onClick={() => {setVolume(0); audioRef.current.volume = 0}} className='cursor-pointer hover:text-[#00FF90]'/>}
            <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} className="w-[5vw] h-[0.5vw] appearance-none rounded-lg sound active:cursor-grab cursor-pointer" style={{ background: `linear-gradient(to right, #00FF90 ${volume * 100}%, #444 ${volume * 100}%)` }} id='audio'/>
          </label>

          <button onClick={() => {setLoop(prev => !prev)}} className={`cursor-pointer ${!loop ? '' : 'text-[#00FF90]'}`}><RiLoopLeftFill/></button>
        </div>
      </div>
    </div>
  );
};

export default MusicBar;