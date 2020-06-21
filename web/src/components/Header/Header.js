import React from 'react';
import './Header.scss';
import phoneIcon from '../../assets/icons/phone-icon.svg'

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={phoneIcon} alt="myContacs Logo"/>

                <a href=""><h1>myContacts</h1></a>
            </div>

            <div>
                <a href="">About</a>
            </div>

        </header>
    )
}

export default Header