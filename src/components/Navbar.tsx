import { FC, useEffect } from "react"
import { ConnectButton } from '@rainbow-me/rainbowkit'
// import { StoreContainer } from "../store"
import { useAccount } from 'wagmi'
import { useNavigate } from "react-router-dom"
import useCurrentPath from "../hooks/useCurrentPath"

const Navbar: FC<Record<string, never>> = (() => {
  // let store = StoreContainer.useContainer()
  const { address } = useAccount()
  const navigate = useNavigate()
  const currentPath = useCurrentPath()

  const isActiveClass = ((pathname: string) => {
    const classProps = currentPath![0].pathname === pathname ?
    "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" 
    :
    "block py-2 pr-4 pl-3rounded border-b border-volta-gray-100 hover:bg-volta-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-volta-gray-100 lg:dark:hover:text-white dark:hover:bg-volta-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-volta-gray-700"
    return classProps
  })

  // useEffect(() => {
  //   store.setUserAddress(address)
  // }, [])

  return (
    <>
    <header>
      <nav className="bg-white border-volta-gray-200 px-4 lg:px-6 py-2.5 dark:bg-volta-gray-900 border-b border-b-volta-gray-500">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <button onClick={() => navigate('/')} className="flex items-center">
            <img src="/volta.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-extrabold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-volta-warm from-volta-cool">Volta Finance</span>
          </button>
          <div className="flex items-center lg:order-2">
            <ConnectButton/>
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-volta-gray-500 rounded-lg lg:hidden hover:bg-volta-gray-100 focus:outline-none focus:ring-2 focus:ring-volta-gray-200 dark:text-volta-gray-400 dark:hover:bg-volta-gray-700 dark:focus:ring-volta-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <button onClick={() => navigate('/wrapper')} className={isActiveClass('/wrapper')} aria-current="page">
                  Wrapper
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/vaults')} className={isActiveClass('/vaults')}>
                  Vaults
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </>
  )
})

export default Navbar
