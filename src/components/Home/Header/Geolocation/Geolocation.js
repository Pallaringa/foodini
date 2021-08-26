import React from 'react'
import { LocationMarkerIcon } from '@heroicons/react/outline'

export default function Geolocation() {
    return (
        <div>
            <div className="ml-2 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between border-gray-200">

            <div className="flex items-center">
              <button
                type="button"
                className="p-2 -m-2 sm:ml-4 text-yellow-500 hover:text-yellow-500 lg:hidden"
              >
                <span className="sr-only">Geolocalozacion</span>
                <LocationMarkerIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        </div>
    )
}
