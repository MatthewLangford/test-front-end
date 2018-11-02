import React from 'react';
import './Header.css';

const Header = props => {
    return <div className='title'>
            <h1>{ props.header }</h1>
        </div>
}

export default Header;