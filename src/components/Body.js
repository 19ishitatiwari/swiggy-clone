import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [data, setData] = useState(resList);
    
    return (
        <div className='body'>
            <div className='filter'>
                <div className='search-container'>
                    <input type='text' className='search-input' placeholder='Search for ...' />
                    <button className='search-button'>Search</button>
                </div>
                <div className="top-rated">
                    <button 
                        className="top-rated-button"
                        onClick={() => {
                            const filteredList = resList.filter(
                                (res) => res.data.avgRating > 4
                            );
                            setData(filteredList);
                        }}
                    >Top Rated Restaurants</button>
                </div>
            </div>
            <div className='res-container'>
                {data.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;