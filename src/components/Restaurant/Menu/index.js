import React, { useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { CurrencyDollarIcon, ChevronUpIcon, HomeIcon } from '@heroicons/react/solid'
import uberEatsLogo from "../../../img/uberEatsLogo.png"

export default function Menu({data}) {

    const [priceAverage, setpriceAverage] = useState("")
    //codigo para entrar al menu
    const restaurantMenuUuid = data[1].data.sections[0].uuid
    //codigos para entrar a las categorias del menu
    const restaurantCategoriesUuid = data[1].data.sections[0].subsectionUuids
    //categorias del menu
    const restaurantCategories = data[1].data.subsectionsMap
    //codigos para el platillo
    const restaurantPlateUuid = data[1].data.subsectionsMap
    //toda la info sobre el platillo
    const restaurantPlates = data[1].data.sectionEntitiesMap

    useEffect(() => {
        const getPriceAverage = async () => {

            var actualAveragePrice = 0
            var nPlatillos = 0

            restaurantCategoriesUuid?.map((codigoCategorias) =>
                restaurantPlateUuid[codigoCategorias].itemUuids?.map((codigoPlatillos)=> {
                    actualAveragePrice += restaurantPlates[restaurantMenuUuid][codigoPlatillos].price
                    nPlatillos += 1
                })
            )
            actualAveragePrice = actualAveragePrice/100
            actualAveragePrice = actualAveragePrice/nPlatillos
            setpriceAverage(actualAveragePrice.toString().match(/(\d*.\d{0,2})/)[0])
        }

        getPriceAverage().catch(null);
    }, [])

    return (
        <div className="max-w-7xl mx-auto px-6 py-4 bg-black">
            <div className="border-t border-gray-500 py-3 space-y-2">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <div className="flex">
                    <CurrencyDollarIcon className="text-gray-500 h-5 w-5" aria-hidden="true"/>
                    <span className="text-sm text-gray-300">Precio promedio de {priceAverage}$ MXN</span>
                </div>
            </div>
            {restaurantCategoriesUuid?.map((codigoCategorias) => 
            <div className="space-y-2" key={codigoCategorias}>
                <div className="flex items-center justify-between">
                    <h2 className="justify-start text-lg font-medium text-white">{restaurantCategories[codigoCategorias].title}</h2>
                        <div className="flex items-center">
                            <HomeIcon className="text-gray-500 mr-2 h-5 w-5" aria-hidden="true"/>
                            <img alt={restaurantCategories[codigoCategorias].title} className="h-10 w-10 rounded" src={uberEatsLogo}/>
                        </div>
                </div>
                {restaurantPlateUuid[codigoCategorias].itemUuids?.map((codigoPlatillos) => 
                <Disclosure as="div" key={restaurantPlates[restaurantMenuUuid][codigoPlatillos].uuid}>
                    {({ open }) => (
                        <>
                        <div className="grid grid-flow-col grid-cols-1 grid-rows-0">
                            {restaurantPlates[restaurantMenuUuid][codigoPlatillos].description !== "" || restaurantPlates[restaurantMenuUuid][codigoPlatillos].imageUrl !== "" ?
                            <Disclosure.Button className="flex items-center justify-between text-sm font-medium text-left text-gray-300 bg-black focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                                <div className="flex items-center">
                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-gray-500`}
                                    />
                                    <span>{restaurantPlates[restaurantMenuUuid][codigoPlatillos].title}</span>
                                </div>
                            </Disclosure.Button>
                            :
                                <div className="ml-5 flex items-center justify-between text-sm font-medium text-left text-gray-300 bg-black focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                                    <span>{restaurantPlates[restaurantMenuUuid][codigoPlatillos].title}</span>
                                </div>
                            }
                            <div>
                                <span className="text-sm mr-2 text-gray-300">--.--$</span>
                                <span className="text-sm text-gray-300">{restaurantPlates[restaurantMenuUuid][codigoPlatillos].price/100}$</span>
                            </div>
                        </div>
                        <Disclosure.Panel>
                            <div className="mt-2 grid grid-flow-col grid-cols-1 grid-rows-0">
                                <div>
                                    <span className="text-sm text-gray-300">{restaurantPlates[restaurantMenuUuid][codigoPlatillos].description}</span>
                                </div>
                                <div>
                                    <img alt="" src={restaurantPlates[restaurantMenuUuid][codigoPlatillos].imageUrl} className="h-24 w-30 rounded"/>
                                </div>
                            </div>
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                )}
            </div>
            )}
        </div>
    )
}
