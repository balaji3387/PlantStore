import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from "./CartSlice.jsx";
export default function Plants({plantsArray}){
    
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addItem(product));
      }; 
    return(
        <div>
        {plantsArray.map((category, index) => (
            <div key={index}>
                <h1><div>{category.category}</div></h1>
                <div className="product-list">
                    {category.plants.map((plant, plantIndex) => (
                    <div className="product-card" key={plantIndex}>
                        <img className="product-image" src={plant.image} alt={plant.name} />
                        <div className="product-title">{plant.name}</div>
                        <div className="product-description">{plant.description}</div>
                        <div className="product-cost">${plant.cost}</div>
                        {/*Similarly like the above plant.name show other details like description and cost*/}
                        <button  className="product-button" onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                    </div>
                    ))}
                </div>
            </div>
            ))}
            </div>
    );
}