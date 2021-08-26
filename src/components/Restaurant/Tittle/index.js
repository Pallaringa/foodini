import React from 'react'
import { LocationMarkerIcon } from '@heroicons/react/solid'

export default function Tittle({data}) {

    const restaurantInfo = data[0].data

    return (
        <div className="max-w-7xl mx-auto px-6 mt-2">
            <div className="max-w-2xl mx-auto sm:py-24">
                <h2 className="text-2xl font-extrabold text-yellow-500">{restaurantInfo.title}</h2>
            </div>
            <div className="flex py-3">
                <LocationMarkerIcon className="text-yellow-500 h-5 w-5" aria-hidden="true"/>
                <span className="text-xs text-gray-300">{restaurantInfo.location.address}</span>
            </div>
            <div className="border-t border-gray-500 py-3">
                <h2 className="text-xl font-bold text-white">Descripción</h2>
                <span className="text-sm text-gray-300">{restaurantInfo.seoMeta.description}</span>
            </div>
        </div>
    )
}
