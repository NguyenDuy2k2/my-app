import React from 'react'
import { Link } from 'react-router-dom'
import { IconSeach } from '../../../components/Icons/IconSeach'
import { IconShopping } from '../../../components/Icons/IconShopping'
import { IconUsers } from '../../../components/Icons/IconUsers'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <div className="User">
                <IconUsers />
                <Link to="login">Đăng Nhập </Link>
                <Link to="signup">Đăng Ký </Link>
            </div>
            <div className="logoShop">
                <img src="" alt="" />
            </div>
            <div className="">
                <IconSeach />
                <Link to="shopping">Giỏ Hàng</Link>
                <IconShopping />
            </div>
        </>
    )
}

export default Header