import { Link } from 'react-router-dom'
import 'tw-elements'
import { IconDashboard } from '../../components/Icons/IconDashboard'
import { IconProducts } from '../../components/Icons/IconProducts'
import { IconSetting } from '../../components/Icons/IconSetting'
import { IconUsers } from '../../components/Icons/IconUsers'
import { ButtonDropup } from './ButtonDropup'
type Props = {}

export const NavBar = (props: Props) => {
    return (
        <div className="min-h-screen bg-gray-100 col-2">
            <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
                <div className="flex h-screen flex-col justify-between pt-2 pb-6">
                    <div>
                        <div className="w-max p-2.5">
                            <img src="https://tailus.io/images/logo.svg" className="w-32" alt="" />
                        </div>
                        <ul className="mt-6 space-y-2 tracking-wide">
                            <li className="min-w-max">
                                <Link to="/admin" className="bg group flex items-center space-x-4  px-4 py-3 text-gray-600 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
                                    <IconDashboard />
                                    <span className="group-hover:text-gray-700">Dashboard</span>
                                </Link>
                            </li>
                            <li className="min-w-max">
                                <Link to="/admin/products" className="bg group flex items-center space-x-4  px-4 py-3 text-gray-600 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
                                    <IconProducts />
                                    <span className="group-hover:text-gray-700">Products</span>
                                </Link>
                            </li>
                            <li className="min-w-max">
                                <Link to="/admin/categories" className="bg group flex items-center space-x-4  px-4 py-3 text-gray-600 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
                                    <IconProducts />
                                    <span className="group-hover:text-gray-700">Categories</span>
                                </Link>
                            </li>

                            <li className="min-w-max">
                                <a href="reports" className="group flex items-center space-x-4 px-4 py-3 text-gray-600 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path className="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                        <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                    </svg>
                                    <span className="group-hover:text-gray-700">Reports</span>
                                </a>
                            </li>

                            <li className="min-w-max">
                                <a href="Finance" className="group flex items-center space-x-4 px-4 py-3 text-gray-600 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                        <path className="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="group-hover:text-gray-700">Finance</span>
                                </a>
                            </li>
                            <li className="min-w-max">
                                <Link to="/admin/" className="bg group flex items-center space-x-4  px-4 py-3 text-gray-600 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
                                    <IconUsers />
                                    <span className="group-hover:text-gray-700">User</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-max -mb-3">
                        <p className="bg group flex items-center space-x-4  px-4 py-3 text-gray-600 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
                            <IconSetting />
                            <span className="group-hover:text-gray-700"><ButtonDropup /></span> 
                        </p>
                        </div >
                </div >

            </div >
        </div >
    )
}