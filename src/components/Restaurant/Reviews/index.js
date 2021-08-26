import React, { useState } from 'react'
import fodiniLogo from '../../../img/logo.png'
import { StarIcon, ArrowRightIcon } from '@heroicons/react/solid'

export default function Reviews({data}) {

    const [starsSelected, setstarsSelected] = useState(0)

    const changeStarsColor = (star) => {
        setstarsSelected(star)
    }

    const formPreventDefault = (e) =>{
        e.preventDefault();
      }

    return (
        <div className="max-w-7xl mx-auto px-6 py-4 bg-black">
            <div className="border-t border-gray-500 py-3 space-y-2">
                <h2 className="text-xl font-bold text-white">Opiniones de la comunidad</h2>
            </div>
            <div className="py-4 grid justify-items-center">
                <div className="flex">
                    <img className="h-10 w-10" src={fodiniLogo}/>
                    <div className="text-3xl font-bold text-gray-300 self-center">
                        <span>4.9</span>
                    </div>
                    <div className="text-2xl font-medium text-gray-500 self-end">
                        <span>/5</span>
                    </div>
                </div>
                <div className="text-xs font-medium text-gray-500 self-center">
                    <span>12 opiniones en Foodiñi</span>
                </div>
            </div>
            <div className="grid grid-flow-col grid-cols-1 grid-rows-0">
                <div className="flex items-center justify-items-between">
                    <div className="flex items-center">
                        <img
                            className="h-12 w-12 rounded-full self-center"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                            />
                        <div className="grid">
                            <div className="flex ml-3">
                                <span className="text-sm text-gray-300 self-end">Stuart Jhonson R.</span>
                            </div>
                            <div className="flex ml-3">
                                <span className="text-xs text-gray-500 self-start">01 mayo 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex ml-3">
                    <StarIcon className="text-gray-500 mr-1 h-5 w-5 self-center" aria-hidden="true"/>
                    <span className="text-right font-bold text-xs text-gray-300 self-center right-0">5.0</span>
                    <span className="text-right font-medium text-xs text-gray-500 self-center right-0">/5</span>
                </div>
            </div>
            <div className="flex mt-1">
                <p className="text-xs text-gray-300 self-center">Nuevos platos, como siempre, originales, deliciosos y saludables. Recomiendo mucho la sopa de garbanzo por su especilaidad de toppings.</p>
            </div>
            <div className="py-2">
                <button className="flex">
                    <span className="text-xs text-yellow-500 self-center">VER TODAS LAS OPINIONES</span>
                    <ArrowRightIcon className="text-yellow-500 mr-1 h-4 w-4 self-center" aria-hidden="true"/>
                </button>
            </div>
            <form onSubmit={formPreventDefault}>
                <div className="grid grid-flow-col grid-cols-1 grid-rows-0">
                    <div>
                        <h2 className="text-lg font-bold text-white">Califica el restaurante</h2>
                    </div>
                    <div className="text-base self-center text-yellow-500">
                        <button className="disabled:opacity-50" disabled>
                            Publicar
                        </button>
                    </div>
                </div>
                <div  className="flex items-center justify-center pt-3">
                {[1, 2, 3, 4, 5].map((currentStar) => (
                    <button key={currentStar} onClick={()=>changeStarsColor(currentStar)}>
                        <StarIcon className={`${ starsSelected>=currentStar ? 'text-yellow-500' : 'text-gray-500'} mr-1 h-10 w-10 self-center`} aria-hidden="true"/>
                    </button>
                ))}
                </div>
                <div className="py-2">
                    <textarea placeholder="Escribe tu opinion de los platillos como del servicio en el establecimiento" className="text-sm h-24 w-full bg-black text-gray-500 resize-none border-transparent"></textarea>
                </div>
            </form>
        </div>
    )
}
