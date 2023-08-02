import '../App.css';
import React from "react";
import { IoMdRemoveCircleOutline } from 'react-icons/io';

function Card(props) {



    return (
        <div className='shop_list'>
            {props.shopItem.length === 0 ? (
                <p>Select a product</p>
            ) : (
                <div>
                    {props.cartItems.map((item, index) => (
                        <div className='shop_item' key={index}>
                            <img src={item.img} alt="bottle" />
                            <div style={{ marginLeft: '10px' }}>
                                <h3>{item.name} - {item.years} </h3>
                                <div className='add_card_list'>
                                {item.price}$
                                </div>
                            </div>
                            <IoMdRemoveCircleOutline className='shop_item_remove' onClick={() => props.handleDelete(item.id)} />
                        </div>
                    ))}
                    
                </div>
            )}
            

        </div>
    );
}

export default Card;
