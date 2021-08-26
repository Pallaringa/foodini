/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Menu from './Menu';
import logo from '../../../img/logo.png';

const navigation = ['Mi información personal', 'Mis favoritos', 'Mis opiniones']

export default function NavBar({ onMenuClick, avatarValue }) {
  
  return (
    <div>
      <Disclosure as="nav" className="bg-black fixed top-0 left-0 right-0">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                {/* boton del menu */}
                <div className="-mr-auto flex md:hidden">
                  <Disclosure.Button className="bg-black inline-flex items-center justify-center p-2 rounded-md text-yellow-500 hover:text-yellow-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500 focus:ring-yellow-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-7 w-7" aria-hidden="true" value='true' onClick={onMenuClick}/>
                    ) : (
                      <MenuIcon className="block h-7 w-7" aria-hidden="true" value='false'onClick={onMenuClick}/>
                    )}
                  </Disclosure.Button>
                </div>
                {/* foto de la app */}
                  <div className="hidden md:block flex-shrink-0 ml-24">
                    <img
                      className="h-12 w-12"
                      src={logo}
                      alt="Workflow"
                    />
                  </div>
                  {/* opciones del menu */}
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-center space-x-4">
                      {navigation.map((item) =>(
                          <a
                            key={item}
                            href="/#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item}
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
                {/* foto de usuario */}
                <div className={avatarValue ? '' : 'hidden md:block'}>
                  <div className="ml-4">
                    <div className="ml-3 relative">
                          <div>
                          <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                          </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* opciones del menu */}
            <Menu/>
          </>
        )}
      </Disclosure>
      <div className={avatarValue ? '' : 'py-16'}>
                        
      </div>
    </div>
  )
}

