import React from 'react'
import { HeartIcon } from '@heroicons/react/solid'

export default function SearchRestaurant({ data }) {

    var i = 0
    return (
        <div>
          <main>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                {/* Replace with your content */}
                {/*<div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-blue-400 h-12 w-12"></div>
                        <div className="flex-1 space-y-4 py-1">
                            <div className="h-4 bg-blue-400 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-yellow-500 rounded"></div>
                                <div className="h-4 bg-yellow-500 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                </div>*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-white">Restaurantes mejor calificados</h2>
          {data.length !== 0 && (
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {data?.slice(0, 15).map((callout) => (
              <div key={callout.data.title} className={"group "+i++}>
                <div className="w-full h-60 bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.data.heroImageUrls.url}
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mt-6">
                    <h3 className="text-base text-yellow-500">
                        <a href="/Restaurant">
                            <span className="inset-0" />
                            {callout.data.title}
                        </a>
                    </h3>
                    <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((rating) => (
                <svg key={rating} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <defs>
                      <linearGradient id={"half_grad"+rating+i}>
                          <stop offset={callout.data.rating.ratingValue > rating ? '100%' : (callout.data.rating.ratingValue-(rating-1))*100+'%'} stopColor="orange"/>
                          <stop offset={callout.data.rating.ratingValue > rating ? '0%' : ((rating)-callout.data.rating.ratingValue)*100+'%'} stopColor="grey" stopOpacity="1" />
                      </linearGradient>
                  </defs>
                  <path fill={"url(#half_grad"+rating+i+")"} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ))}
                  </div>
                  <div>
                    <button>
                    <HeartIcon className="text-yellow-500 h-5 w-5" aria-hidden="true"/>
                    </button>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-500">{callout.description}</p>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>
                {/* /End replace */}
      </div>
      </main>
    </div>
    )
}
