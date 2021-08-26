import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { AdjustmentsIcon } from '@heroicons/react/solid'
import SearchFilters from './SearchFilters'
import CalificationFilter from './CalificationFilter'
import DistanceFilter from './DistanceFilter'
import PriceFilter from './PriceFilter'
import KitchenTypeFilter from './KitchenTypeFilter'

export default function Filters() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div>
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileFiltersOpen}>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative w-full h-full bg-black shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="fixed top-0 left-0 right-0 bg-yellow-500 px-4 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Filtros</h2>
                  <button
                    type="button"
                    className="bg-yellow-500 -mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-300"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="border-gray-200">
                  
                <SearchFilters/>
                <CalificationFilter/>
                <DistanceFilter/>
                <PriceFilter/>
                <KitchenTypeFilter/>
                  
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <div className="mr-1 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between border-gray-200">

            <div className="flex items-center">
              <button
                type="button"
                className="p-2 -m-2 sm:ml-4 text-yellow-500 hover:text-yellow-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <AdjustmentsIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
