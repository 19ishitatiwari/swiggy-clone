import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({data}) => {
    const [imgErrors, setImgErrors] = useState({}); // track errors by index

    const handleImgError = (index) => {
        setImgErrors((prev) => ({ ...prev, [index]: true }));
    };

    const cartItems = useSelector((store) => store.cart.items);
     
    const dispatch = useDispatch();
    
    const handleAddItem = (item) => {
        const isInCart = cartItems.some(cartItem => cartItem.card.info.id === item.card.info.id);
        if(isInCart){
            dispatch(removeItem(item));
        } else {
            dispatch(addItem(item));
        }
    }

  return (
    <div>
          {data.map((item, index) => (
            <div key={item.card.info.id} 
            className={`flex justify-between py-2 
            ${index !== data.length - 1 ? "border-b-2 border-gray-100 my-2" : "mb-2"}`}>
                <div className="w-9/12">
                    <div className="py-2">
                        <span className="font-semibold">{item.card.info.name} - ₹{ item.card.info?.price/100 ? item.card.info?.price/100 : item.card.info?.defaultPrice/100 }</span>
                    </div>
                    <div className="text-sm text-gray-600">
                        {item.card.info.description}
                    </div>
                </div>
                <div className="w-3/12 relative">
                     {!imgErrors[index] && (
                        <img
                        className="w-full h-36 object-cover rounded-md"
                        src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                            item.card.info.imageId
                        }
                        alt={item.card.info.name}
                        onError={() => handleImgError(index)}
                        />
                    )}
                    <button className="absolute bottom-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-md shadow-md cursor-pointer" onClick={() => {handleAddItem(item)}}>
                        { cartItems.some(cartItem => cartItem.card.info.id === item.card.info.id) ? "Remove" : "Add +" }
                    </button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ItemList
