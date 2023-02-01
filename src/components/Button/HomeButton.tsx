import React from 'react';

type ButtonProps = {
    name: string
    color: string
    bg: string
    width: string
    height: string
}

const HomeButton: React.FC<ButtonProps> = (props) => {
    return (
        <button
            className={`${props.bg} ${props.color} hover:opacity-80 font-opensans text-base ${props.width} ${props.height} rounded`}>
            {props.name}
        </button>
    )
};

export default HomeButton