import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, isOpen, onToggle}) => {

    const { title, itemCards } = data;
    // const [isOpen, setIsOpen] = useState(false);

    // const handleClick = () => {
    //     // setIsOpen(!isOpen);
    //     setShow(!show);
    //     setShowCategoryType("ItemCategory");
    //     setShowIndex(data.title);
    // };

    return (
        <div className="w-1/2 m-auto p-4 text-left bg-amber-50 border-gray-100 border-b-2 cursor-pointer">
            <div className="my-2 flex justify-between" onClick={onToggle}>
                <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                <span className="font-bold text-lg">{isOpen ? "↑" : "↓" }</span>
            </div>
            <div className="mt-2">
                {isOpen && <ItemList data={itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;