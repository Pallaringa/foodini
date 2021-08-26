import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'

const filters = [
    {
      id: 'food',
      name: 'Tipo de cocina',
      options: [
        { value: 'Brasileña', label: 'Brasileña', checked: false },
        { value: 'Frances', label: 'Frances', checked: false },
        { value: 'Mexicana', label: 'Mexicana', checked: true },
      ],
    }
  ]

export default function KitchenTypeFilter() {
    return (
        <div>
            <div>
            {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="px-6 py-3 bg-gray-500 w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                              <span className="text-lg font-bold text-white">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon className="h-5 w-5 text-yellow-500" aria-hidden="true" />
                                ) : (
                                  <PlusSmIcon className="h-5 w-5 text-yellow-500" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="px-2 flex items-center">
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="border-0 focus:ring-0 focus-ring-offset-0 h-4 w-4 rounded-sm bg-gray-500 text-yellow-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
            </div>
        </div>
    )
}
