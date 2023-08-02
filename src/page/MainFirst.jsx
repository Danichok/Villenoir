import '../App.css';
import logo from '../img/header_logo.png'
import video from '../img/video.mp4'
import search from '../img/search.svg'
import shop from '../img/shop.svg'
import user from '../img/user.svg'
import logoNavbar from '../img/logo_navbar.svg'
import { Menu } from "burger-menu";
import 'burger-menu/lib/index.css';
import React, { useState } from "react";
import wine1 from '../img/wine1.png'
import wine2 from '../img/wine2.png'
import { IoMdRemoveCircleOutline } from 'react-icons/io';
function Main() {
    const wineList = [
        {
            id: 1,
            name: 'Срардане',
            img: wine1,
            price: 400,
            value1: 5
        },
        {
            id: 2,
            name: 'Дон Савільон',
            img: wine2,
            price: 550,
            value2: 10
        }
    ];

    

    const [shopItem, setShopItem] = useState(wineList);

    const addToCart = (product) => {
        setShopItem([...shopItem, product]);
    };

    const removeFromCart = (index) => {
        const newItems = [...shopItem];
        newItems.splice(index, 1);
        setShopItem(newItems);
    };

    const [itemCard, setItemCard] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
   

    const [totalItems, setTotalItems] = useState(0);

    const increaseQuantity = () => {
        setTotalItems(totalItems + 1);
    };

    const decreaseQuantity = () => {
        if (totalItems > 0) {
            setTotalItems(totalItems - 1);
        }
    };

    const totalPrice = wineList.reduce((total, wine) => total + wine.price, 0);

    const addToCartNew = (item) => {
        // Отримайте поточний стан кошика з локального сховища
        const existingCartItems = localStorage.getItem('cartItems');
        
        // Розпакуйте та перетворіть JSON у масив об'єктів
        const cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];
        
        // Додайте новий товар до кошика
        cartItems.push(item);
        
        // Збережіть оновлений кошик у локальному сховищі
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      };
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
                            {shopItem.length === 0 ? (
                                <p>Select a product</p>
                            ) : (
                                <div >
                                    {shopItem.map((item, index) => (
                                        <div className='shop_item' key={index}>
                                            <img src={item.img} alt="bottle" />
                                            <div style={{ marginLeft: '10px' }}>
                                                <h3>{item.name} - {item.price}$</h3>
                                                <div className='add_card_list'>

                                                    <div onClick={decreaseQuantity} className='add_card'>-</div>
                                                    <input value={totalItems} onChange={setItemCard} readOnly min={0} max={9} type="number" />
                                                    <div onClick={increaseQuantity} className='add_card'>+</div>
                                                    
                                                    <p>Total Items: {totalItems}</p>
                                                    
                                                </div>
                                            </div>



                                            <IoMdRemoveCircleOutline className='shop_item_remove' onClick={() => removeFromCart(index)} />
                                        </div>
                                    ))}
                                </div>
                            )}
                            <p className='total_price'>Total Count: {totalPrice}$</p>
                        </div>
                    </Menu>
                </header>


            </section>
            <section className='shop_card '>

                <div className='container'>
                    <div className='shop_card_list'>
                        {
                            wineList.map((item, key) => {
                                return (
                                    <div key={item.key} className='card_wine'>
                                        <div className='card_wine_photo'>
                                            <img src={item.img} alt="bottle" />
                                        </div>
                                        <p>{item.name}</p>

                                        <p>{item.price}$</p>
                                        <button onClick={() => addToCart(item)}>Add To Cart</button>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Main;