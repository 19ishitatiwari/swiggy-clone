import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [data, setData] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8504593&lng=75.76277019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <div className='body'>
            <div className='filter'>
                <div className='search-container'>
                    <input 
                        type='text' 
                        className='search-input' 
                        placeholder='Search for ...'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button 
                        className='search-button'
                        onClick={() => {
                            const filteredList = allRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setData(filteredList);
                        }}
                    >Search</button>
                </div>
                <div className="top-rated">
                    <button 
                        className="top-rated-button"
                        onClick={() => {
                            const filteredList = allRestaurants.filter(
                                (res) => res.info.avgRating > 4.3
                            );
                            setData(filteredList);
                        }}
                    >Top Rated</button>
                </div>
            </div>
            <div className='res-container'>
                {data.length === 0 ? <Shimmer /> : 
                    data.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;