import '../App.css';
import React, { useState } from 'react';

function ShopList() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='shop_list'>
            <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
                <div className="burger-icon" onClick={handleToggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="menu-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>

    )
}
export default ShopList;