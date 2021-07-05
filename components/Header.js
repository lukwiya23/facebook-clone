import React from 'react'
import Image from 'next/image'
import HeaderIcon from '../components/HeaderIcon'
// import '../styles/globals.css'
import {
    BellIcon, ChatIcon,ChevronDownIcon,HomeIcon,
    UserGroupIcon, ViewGridIcon}
    from '@heroicons/react/solid'

    import {
        FlagIcon,
        PlayIcon,
        SearchIcon,
        ShoppingCartIcon
    }
    from '@heroicons/react/outline'

function Header() {
    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
            
       

        {/* left */}
        <div className='flex items-center'>
            
            <Image
            src="https://links.papareact.com/5me" width={40} height={40}
            layout="fixed"
            />

            <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
            <SearchIcon className='h-6 text-gray-600' />
                <input type="text" placeholder="Search Facebook" className="hidden md:inline-flex flex ml-2 bg-transparent placeholder-gray-500 outline-none flex-shrink" />
            </div>
        </div>

        {/* center nav */}
        <div className="flex justify-center flex-grow">
        <div className='flex space-x-6 md:space-x-2'>
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
        </div>
        </div>

        {/* right nav */}
        <div className='flex items-center sm:space-x-2 justify-end'>
            {/* image */}

            <p className='whitespace-nowrap pr-3 fontweight-semibold'>Bonnie Lou</p>
            <ViewGridIcon className='icon ' />
            <ChatIcon className='icon ' />
            <BellIcon className='icon ' />
            <ChevronDownIcon className='icon ' />
        </div>
        </div>
    )
}

export default Header
