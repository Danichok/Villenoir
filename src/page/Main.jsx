import '../App.css';
import '../locomotive-scroll.css';
import logo from '../img/header_logo.png'
import video from '../img/video.mp4'
import search from '../img/search.svg'
import shop from '../img/shop.svg'
import user from '../img/user.svg'
import logoNavbar from '../img/logo_navbar.svg'
import { Menu } from "burger-menu";
import 'burger-menu/lib/index.css';
import React, { useState, useEffect, useRef } from "react";
import wine1 from '../img/wine_bottle_1.png'
import wine2 from '../img/wine_bottle_2.png'
import wine3 from '../img/wine_bottle_3.png'
import wine4 from '../img/wine_bottle_4.png'
import wine5 from '../img/wine_bottle_5.png'
import wine6 from '../img/wine_bottle_6.png'
import shopBackground from '../img/shop_background.jpg'
import LocomotiveScroll from 'locomotive-scroll';
import Card from '../component/Card';
import signature from '../img/signature-brown.png'
import silhouette from '../img/silhouette_man.jpg'
import bigRedBottle from '../img/big_red_bottle.png'
import bigWhiteBottle from '../img/big_white_bottle.png'

function Main() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
        });

        return () => scroll.destroy();
    }, []);
    const wineList = [
        {
            id: 1,
            name: 'Aged Merlot',
            img: wine1,
            price: 150,
            value1: 5,
            years: 2015
        },
        {
            id: 2,
            name: 'Cabernet Sauvignon',
            img: wine2,
            price: 110,
            value2: 10,
            years: 2014
        },
        {
            id: 3,
            name: ' Pinot Noir',
            img: wine3,
            price: 160,
            value1: 5,
            years: 2016
        },
        {
            id: 4,
            name: 'Sauvignon Blank',
            img: wine4,
            price: 693,
            value2: 10,
            years: 2011
        }
        ,
        {
            id: 5,
            name: 'Riesling',
            img: wine5,
            price: 165,
            value2: 10,
            years: 2015
        }
        ,
        {
            id: 6,
            name: 'Chardonnay',
            img: wine6,
            price: 236,
            value2: 10,
            years: 2015
        }
    ];

    const [shopItem] = useState(wineList);



    const [isOpen, setIsOpen] = useState(false);


    const [totalItems] = useState(0);



    const addToCart = (item) => {
        const existingCartItems = localStorage.getItem('cartItems');
        const cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];
        cartItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log(existingCartItems)
    };

    //json parce

    const existingCartItems = localStorage.getItem('cartItems');
    const [cartItems, setCartItems] = React.useState(existingCartItems ? JSON.parse(existingCartItems) : []);

    useEffect(() => {
        localStorage.setItem('shopItem', JSON.stringify(shopItem));
    }, [shopItem]);

    const handleDelete = (itemId) => {
        const itemIndex = cartItems.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems.splice(itemIndex, 1);
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        }
    };

    const totalPrice = cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);

    //json parce


    return (
        <div ref={scrollRef} data-scroll-container>
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
                        <div className='shopItem_length'>
                            <div >
                                {cartItems.length === 0 ? (
                                    <div style={{ display: 'none' }} className='shopItem_number'><p>{cartItems.length}</p></div>
                                ) : (
                                    <div className='shopItem_number'><p>{cartItems.length}</p></div>
                                )}
                            </div>
                            <img src={shop} onClick={() => setIsOpen(!isOpen)} alt="shop" />
                        </div>
                        <img src={user} alt="user" />
                        <img src={search} alt="search" />
                    </div>
                </div>
            </div>
            <Menu className="burger-menu" isOpen={isOpen} selectedKey={'entry'} onClose={() => setIsOpen(false)}>

                <p className='shop_title'>SHOPPING CART</p>
                <div className='scroll_shop'>
                    <div className='shop_list'>
                        <Card handleDelete={handleDelete} setCartItems={setCartItems} cartItems={cartItems} shopItem={shopItem} totalPrice={totalPrice} totalItems={totalItems} ></Card>

                    </div>
                </div>

                <div className='total_block'>
                    <p className='total_price'>Subtotal:</p>
                    <p className='total_price'>  {totalPrice}$</p>
                </div>
            </Menu>
            <div >
                <section data-scroll-section className='main'>
                    <header>
                        <div className='header_content'>

                            <img data-scroll data-scroll-speed="1" src={logo} alt="" />
                            <h2 data-scroll data-scroll-speed="1">INTRODUCING VILLENOIR WINES</h2>
                            <h1 data-scroll data-scroll-speed="1">Refinemant in a bottle</h1>
                        </div>
                        <div className='header_video'>
                            <video src={video} preload='auto' autoPlay loop muted ></video>
                        </div>

                    </header>
                </section>
                <section data-scroll-section className='massage'>
                    <div className='container'>
                        <div className='massage_content'>
                            <img className='silhouette_man' src={silhouette} alt="silhouette" />
                            <div className='massage_body'>
                                <h2>MESSAGE FROM VILLENOIR</h2>
                                <h3>A New Generation of Winemakers</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet elit leo.</p>
                                <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. .</p>
                                <img src={signature} alt="signature" />
                            </div>
                        </div>
                    </div>
                </section>
                <section data-scroll-section className='shop'>
                    <div data-scroll data-scroll-speed="1.5" className='shop_plot'>
                        <div >
                            <h2>INTRODUCING VILLENOIR SHOP</h2>
                            <p>Wines</p>
                        </div>
                    </div>
                    <div className='shopBackground' >
                    </div>
                </section>
                <section data-scroll-section className='shop_card '>
                    <div className='container'>
                        <div className='shop_card_list'>

                            {
                                wineList.map((item, key) => {
                                    return (
                                        <div style={{ width: '100%', maxWidth: '350px' }} key={item.key}>
                                            <div className='card_wine' >
                                                <div className='card_wine_top'>
                                                    <div className='card_wine_photo'>
                                                        <img src={item.img} alt="bottle" />
                                                    </div>
                                                    <p className='card_wine_price'>{item.price}$</p>
                                                    <p className='card_wine_years'>{item.years}</p>
                                                </div>

                                            </div>
                                            <div className='card_wine_border'>
                                                <h2>{item.name}</h2>
                                                <button onClick={() => addToCart(item)}>ADD TO CARD</button>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>

                    </div>
                </section>
                <section data-scroll-section className='stats'>
                    <div className='stats_left'>
                        <img src={bigRedBottle} alt="bigRedBottle" />
                        <div className='stats_left_list'>
                            <div className='stats_left_block'>
                                <h2>5</h2>
                                <p>VARIETALS</p>
                            </div>
                            <div className='stats_left_block'>
                                <h2>162</h2>
                                <p>WINE PRODUCED</p>
                            </div>
                            <div className='stats_left_block'>
                                <h2>48</h2>
                                <p>AWARDS WON</p>
                            </div>
                        </div>
                    </div>
                    <div className='stats_right'>
                        <h2>VARIETIES</h2>
                        <h3>The Reds</h3>
                        <ul>
                            <li>Cabernet Sauvignon</li>
                            <li>Merlot</li>
                            <li>Pinot Noir</li>
                        </ul>
                        <button>SHOP NOW</button>
                    </div>
                </section>
                <section data-scroll-section className='stats stats_reverce'>
                    <div className='stats_right'>
                        <h2>VARIETIES</h2>
                        <h3>The Whites</h3>
                        <ul>
                            <li>Chardonnay</li>
                            <li>Sauvignon Blanc</li>
                            <li>Riesling</li>
                        </ul>
                        <button>SHOP NOW</button>
                    </div>
                    <div className='stats_left'>
                        <img style={{ float: 'right' }} src={bigWhiteBottle} alt="bigRedBottle" />
                        <div style={{ paddingTop: '50px' }} className='stats_left_list'>
                            <div className='stats_left_block'>
                                <h2>5</h2>
                                <p>VARIETALS</p>
                            </div>
                            <div className='stats_left_block'>
                                <h2>162</h2>
                                <p>WINE PRODUCED</p>
                            </div>
                            <div className='stats_left_block'>
                                <h2>48</h2>
                                <p>AWARDS WON</p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}
export default Main;