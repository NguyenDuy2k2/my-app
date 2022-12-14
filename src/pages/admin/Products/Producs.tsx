import React from 'react'
import { ButtonComponent } from '../../../components/button/button';
import { IconRoud } from '../../../components/Icons/IconRoud';
import { PathComponent } from '../../../components/Path/Path';
import { IProduct } from '../../../models/Products'


type Props = {
    product: IProduct[];
}

const Producs = (props: Props) => {
    return (
        <div>
            <div className="table w-full p-2">
                <div className="flex flex-nowrap p-3 m-2 bg-neutral-200">
                    <PathComponent name1='Dashboard' name2='Products' />
                </div>
                <table className="w-full border">
                <ButtonComponent customStyle="bg-blue-500 text-white"  >Add</ButtonComponent>
                    <thead>
                        <tr className="bg-gray-50 border-b">

                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    ID
                                    <IconRoud />
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Name
                                    <IconRoud />
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Email
                                    <IconRoud />
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Image
                                    <IconRoud />
                                </div>
                            </th>
                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div className="flex items-center justify-center">
                                    Action
                                    <IconRoud />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.product.map((item, index) => {
                            return <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td className="p-2 border-r">{index + 1}</td>
                                <td className="p-2 border-r">{item.name}</td>
                                <td className="p-2 border-r">{item.email}</td>
                                <td className="p-2 border-r "><img className=' w-20 h-20 ' src={item.image} alt="" /></td>
                                <td>
                                    <ButtonComponent customStyle="bg-blue-500 text-white" >Edit</ButtonComponent>
                                    <ButtonComponent customStyle="bg-red-500 text-white " >Remove</ButtonComponent>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Producs