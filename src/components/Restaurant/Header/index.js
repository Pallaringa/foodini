import React from 'react'
import { ArrowCircleLeftIcon, HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'

export default function Header({data}) {

    const restaurantInfo = data[0].data

    return (
        <div className="relative w-full h-48">
            <a href="/" className="absolute top-3 left-3">
                <ArrowCircleLeftIcon className="text-yellow-500 h-10 w-10" aria-hidden="true"/>
            </a>
            <img 
            src={restaurantInfo.heroImageUrls.url}
            alt=""
            className="w-full h-full object-center object-cover"
            />
            <a href="/" className="absolute top-3 right-3">
                <div className="rounded-full bg-yellow-500">
                    <HeartIcon className="text-white h-8 w-8" aria-hidden="true"/>
                </div>
                <div className="rounded-full bg-yellow-500">
                    <HeartIconSolid className="text-white h-8 w-8" aria-hidden="true"/>
                </div>
            </a>
            <div className="absolute bottom-3 right-3 flex items-center justify-between mt-6">
                <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((rating) => (
                <svg key={rating} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <defs>
                      <linearGradient id={"half_grad"+rating}>
                          <stop offset={restaurantInfo.rating.ratingValue > rating ? '100%' : (restaurantInfo.rating.ratingValue-(rating-1))*100+'%'} stopColor="orange"/>
                          <stop offset={restaurantInfo.rating.ratingValue > rating ? '0%' : ((rating)-restaurantInfo.rating.ratingValue)*100+'%'} stopColor="grey" stopOpacity="1" />
                      </linearGradient>
                  </defs>
                  <path fill={"url(#half_grad"+rating+")"} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ))}
                  </div>
                </div>
        </div>
    )
}
