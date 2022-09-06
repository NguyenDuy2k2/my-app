import clsx from 'clsx';
import React from 'react'

interface ButtonProps {
    handleClick?: () => void;
    type?: "submit" | "reset" | "button";
    children?: any;
    customStyle?: string;
}


export const ButtonComponent = (props: ButtonProps) => {
    const { children, handleClick, customStyle, type } = props
    return (
        <button
            className={clsx(['p-2 m-1 hover:shadow-lg', customStyle])}
            onClick={handleClick}
            type={type} >
            {children}
        </button>
    )
}
