import { useState, React } from 'react'
import { RadioGroup } from '@headlessui/react'

const searchFilters = [
    
    { name: 'Distancia', href: '#'},
    { name: 'Precio', href: '#'},
    { name: 'Mejor calificación', href: '#'},
    { name: 'Nuevos restaurantes', href: '#'}
]

function SearchFilters() {
    const [selected, setSelected] = useState(searchFilters[0])
    return (
        <div className="py-10 pb-2">
          <div className="bg-gray-500 px-4 mb-2 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-white">Busqueda por</h2>
                </div>
            <h3 className="sr-only">Busqueda por</h3>
                    {/* tipos de busqueda */}
            <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="ml-2 flex space-x-2  px-1 py-2 overflow-x-auto">
            {searchFilters.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'flex-none ring-2 ring-offset-0 ring-yellow-500 ring-opacity-60 rounded-full'
                      : 'flex-none ring-2 ring-offset-0 ring-yellow-500 rounded-full'
                  }
                  ${
                    checked ? 'bg-yellow-500 text-white' : 'bg-black '
                  }
                    rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-yellow-500'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        </div>
    )
}

export default SearchFilters

function CheckIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }