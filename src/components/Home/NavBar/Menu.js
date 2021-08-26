import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BellIcon, CogIcon, LogoutIcon, UserIcon, HeartIcon, DocumentTextIcon } from '@heroicons/react/outline'

const navigation = [
  {
    name: 'Mi información personal',
    icon: UserIcon,
    href: '##',
  }, 
  {
    name: 'Mis favoritos',
    icon: HeartIcon,
    href: '##',
  },
  {
    name: 'Mis opiniones',
    icon: DocumentTextIcon,
    href: '##',
  }
]
const profile = [
  {
    name: 'Configuración',
    icon: CogIcon,
    href: '##'
  },
  {
    name: 'Cerrar sesión',
    icon: LogoutIcon,
    href: '##'
  }
]

function Menu() {
    return (
        <Disclosure.Panel className="md:hidden">
            <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-20 w-20 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-9">
                    <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                    <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                  </div>
                  <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              <div className="pt-2 pb-3 space-y-1 sm:px-2 text-left pl-2">
                {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                      {item.name}
                    </a>
                  )
                )}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="px-2 flex">
                {profile.map((item) => (
                    <a 
                      key={item.name}
                      href={item.href}
                      className="flex block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                      {item.name}
                    </a>
                    )
                  )}
                </div>
              </div>
            </Disclosure.Panel>
    )
}

export default Menu
