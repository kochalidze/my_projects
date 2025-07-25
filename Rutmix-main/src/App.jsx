import Artist from "./components/Artist";
import Center from "./components/Center";
import MusicBar from "./components/MusicBar";
import SideBar from "./components/SideBar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { songs } from "./assets/songs";
import Favourites from "./components/Favourites";
import { Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/LogIn";
import { Navigate } from "react-router-dom";
import Charts from "./components/Charts";

function App() {
  const [songNumber, setSongNumber] = useState(0);
  const [artist, setArtist] = useState()
  const [searchTerm, setSearchTerm] = useState("");
  const [allSong, setSong] = useState(() => {
    const stored = localStorage.getItem("songs");
    return stored ? JSON.parse(stored) : songs;
  });
  const [darkMode, setDarkMode] = useState(false); // ახალი state
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? "bg-[#181818] text-white" : "bg-white text-black"}`}>
      <div className='flex items-center gap-[2vw] ml-[19vw] mt-[1vw]'>
          <input type="search" placeholder='Search...' className={`focus:border-[#3182ce] focus:border-[1.5px] outline-0 ${darkMode ? "bg-white/10 text-white placeholder-white/70 border-white/20" : "bg-gray-100 text-black placeholder-gray-500 border-gray-300"} backdrop-blur-md text-[1.4vw] font-semibold px-[1vw] rounded-xl py-[0.5vw]`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
          <Link to={'/chart'} className='font-semibold text-[1.6vw] text-[#AAAAAA] cursor-pointer hover:scale-105 transition-all duration-300'>Charts</Link>
          <Link to={'/favourites'} className='font-semibold text-[1.6vw] text-[#AAAAAA] hover:scale-105 transition-all duration-300'>Favourites</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
      </div>

      {searchTerm && <div className="grid gap-[0.5vw] absolute w-[19vw] left-[19vw] top-[5vw]">
        {filteredSongs.map((song, i) => (
            <div key={i} className={`p-[0.5vw] rounded shadow flex items-center gap-[0.5vw] ${darkMode ? "bg-[#2d2d2d]" : "bg-gray-200"}`}>
                <img src={song.cover} alt={song.title} className="w-[3vw] h-[3vw] object-cover rounded" />
                <h2 className="font-bold text-[1vw]">{song.title}</h2>
                <p className="text-sm text-gray-600">{song.artist}</p>
            </div>
        ))}
      </div>}

      <SideBar setArtist={setArtist}/>
      <MusicBar songNumber={songNumber} setSongNumber={setSongNumber} />

      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/center" element={<Center setSongNumber={setSongNumber} setArtist={setArtist} setSong={setSong} allSong={allSong}/>}/>
        <Route path="/artist" element={<Artist artist={artist} setSongNumber={setSongNumber}/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chart" element={<Charts song={allSong} />} />
      </Routes>
    </div>
  );
}

export default App;