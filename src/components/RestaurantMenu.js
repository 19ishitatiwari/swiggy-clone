import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import NestedItemCategory from "./NestedRestaurantCategory";

const RestaurantMenu = () => {

    const [openSection, setOpenSection] = useState(null);

    const params = useParams();
    const { resId } = params;

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const menuItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const validTypes = [
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    ];

    const categories = menuItems.filter((item) => validTypes.includes(item.card?.card?.["@type"]));

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl m-4">{name}</h1>
            <p className="font-bold text-lg mb-4">{cuisines.join(', ')} - {costForTwoMessage}</p>
            {categories.map((category, index) => {
                const type = category.card.card["@type"];
                return type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                    ? <RestaurantCategory
                            key={category.card.card.title}
                            data={category.card.card}
                            isOpen={openSection?.level === "outer" && openSection?.index === index}
                            onToggle={() =>
                                setOpenSection(
                                openSection?.level === "outer" && openSection?.index === index
                                    ? null
                                    : { level: "outer", index }
                                )
                            }
                        />
                    : <NestedItemCategory
                            key={category.card.card.title}
                            data={category.card.card}
                            openSection={openSection}
                            setOpenSection={setOpenSection}
                            parentIndex={index}
                        />
            })}
        </div>
    )
}

export default RestaurantMenu;