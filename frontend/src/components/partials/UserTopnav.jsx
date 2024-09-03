import React from 'react'
import { Link } from 'react-router-dom'

const UserTopnav = () => {
    <div className='w-[80%] h-[10vh] relative flex mx-auto items-center'>
        <i className="text-zinc-400 text-3xl ri-search-line"></i>
        <input className='w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent' type="text" placeholder='search anything' />
        <div className='z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto'>


        </div>
    </div>
}

export default UserTopnav