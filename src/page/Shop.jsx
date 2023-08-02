import '../App.css';
import logo from '../img/header_logo.png'
import video from '../img/video.mp4'
import search from '../img/search.svg'
import shop from '../img/shop.svg'
import user from '../img/user.svg'
import logoNavbar from '../img/logo_navbar.svg'
import { Menu } from "burger-menu";
import 'burger-menu/lib/index.css';
import React, { useState, useEffect } from "react";
import wine1 from '../img/wine1.png'
import wine2 from '../img/wine2.png'
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import axios from 'axios';
import Card from '../component/Card.jsx';
import winelist from '../winelist.json';

function Main() {

    const addToCart = (item) => {
        // Отримайте поточний стан кошика з локального сховища
        const existingCartItems = localStorage.getItem('cartItems');

        // Розпакуйте та перетворіть JSON у масив об'єктів
        const cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

        // Додайте новий товар до кошика
        cartItems.push(item);

        // Збережіть оновлений кошик у локальному сховищі
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };




    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
    ];

    const handleAddToCart = (product) => {
        // Викликайте функцію addToCart, передавши об'єкт товару
        Card.addToCart(product);
    };

    const [itemCard, setItemCard] = useState(0);
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div>
            <section className='main'>
                <header>
                    <div className='header_content'>
                        <div className='navbar'>
                            <div className='navbar_body'>
                                <div className='navbar_logo'>
                                    <img src={logoNavbar} alt="logo" />
                                </div>
                                <div className='navbar_link'>
                                    <a href="https://www.youtube.com/watch?v=RBtlPT23PTM&list=RDBLBFM2bTSTg&index=11">HOME</a>
                                    <a href="https://www.youtube.com/watch?v=RBtlPT23PTM&list=RDBLBFM2bTSTg&index=11">ABOUT</a>
                                    <a href="https://www.youtube.com/watch?v=RBtlPT23PTM&list=RDBLBFM2bTSTg&index=11">SHOP</a>
                                    <a href="https://www.youtube.com/watch?v=RBtlPT23PTM&list=RDBLBFM2bTSTg&index=11">EVENTS</a>
                                    <a href="https://www.youtube.com/watch?v=RBtlPT23PTM&list=RDBLBFM2bTSTg&index=11">CONTACT</a>
                                </div>
                                <div className='navbar_btn'>
                                    <img src={shop} onClick={() => setIsOpen(!isOpen)} alt="shop" />
                                    <img src={user} alt="user" />
                                    <img src={search} alt="search" />
                                </div>
                            </div>
                        </div>
                        <img src={logo} alt="" />
                        <h2>INTRODUCING VILLENOIR WINES</h2>
                        <h1>Refinemant in a bottle</h1>
                    </div>
                    <div className='header_video'>
                        <video src={video} preload='auto' autoPlay loop muted ></video>
                    </div>
                    <Menu className="burger-menu" isOpen={isOpen} selectedKey={'entry'} onClose={() => setIsOpen(false)}>
                        <p className='shop_title'>SHOPPING CART</p>
                        <div className='shop_list'>


                        </div>
                    </Menu>
                </header>


            </section>
            <section className='shop_card '>
                <Card></Card>
                <div className='container'>
                    <div className='shop_card_list'>

                    </div>
                    <div>
                        <h2>Product List</h2>
                        <ul>
                            {products.map((product) => (
                                <li key={product.id}>
                                    {product.name}{' '}
                                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Main;