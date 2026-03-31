import React from 'react';

const Link = ({route}) => {
    return (
        <li className=' md:mr-7 hover:bg-red-500 rounded-sm p-1'>
            <a className='text-xl' href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;