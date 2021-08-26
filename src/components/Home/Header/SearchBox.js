import React from 'react'
import { SearchIcon, XIcon } from '@heroicons/react/outline'
import Filters from './Filters/Filters'
import Geolocation from './Geolocation/Geolocation'

function SearchBox({onSearch, clear, searchText}) {

    return (
        <div className="py-16">
            <header className="shadow fixed left-0 right-0 pb-4">
                <form action="/" method="get" className="flex flex items-center justify-center text-gray-300">
                    <Geolocation/>
                    <div className="pt-2 relative mx-auto text-gray-500">
                        <input value={searchText} onChange={onSearch} className="border-0 border-gray-800 h-10 px-5 pr-10 rounded-lg text-sm bg-transparent focus:border-yellow-500 focus:ring-0 focus:outline-none"
                        type="text" name="search" placeholder="Restaurante, comida"/>
                        {searchText.length===0 ? 
                        <SearchIcon className="text-yellow-500 absolute right-0 top-0 mt-5 w-5 h-5" aria-hidden="true" />
                        :
                        <button onClick={clear}>
                            <XIcon className="text-yellow-500 absolute right-0 top-0 mt-5 w-5 h-5" aria-hidden="true" />
                        </button>
                        }
                    </div>
                    <Filters/>
                </form>
            </header>
        </div>
    )
}

export default SearchBox
