import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo, setResInfo ] = useState(null);

    const params = useParams();
    const { resId } = params;

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(`${MENU_API}${resId}`);
        const json = await data.json();
        setResInfo(json.data);
    }

    if(resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const menuItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
            <div className="menu-items">
                <h2>Menu</h2>
                {menuItems.map((item) => {
                    return (
                        <ul>
                            <li key={item?.card?.info?.id}>{item?.card?.info?.name} - ₹{item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default RestaurantMenu;